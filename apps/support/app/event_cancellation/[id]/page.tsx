import EventCancellationForm from "@/components/EventCancellationForm"
import {  db, functions } from "@/lib/firebase"
import { notFound } from "next/navigation"
import {  httpsCallableFromURL } from "firebase/functions"
import { COL, eventCancellationDataUrl } from "@/lib/constants"
import { EventCancellationRequestQuery } from "@/types/event_cancel"
import { MainEvent } from "@/types/event"
import { Organization } from "@/types/org"
import { collection, doc, getCountFromServer, getDoc, getDocs, query, where } from "firebase/firestore"
import { convertTimestamps } from "@/lib/utils/convertTimestamps"
import { OtherUser } from "@/types/user"
import { FirebaseError } from "firebase/app"
import { SUB_EVENT_COLLECTION } from "@/types/sub_event"



async function getCancellationData(params: string) {
    console.log({params, eventCancellationDataUrl})
    if (!eventCancellationDataUrl) {
        throw new Error("getEventCancellationDataUrl is not defined")
    }
    try {
        const callGetEventData = httpsCallableFromURL<{params: string, type: "GET"|"SUBMIT"}, {data:EventCancellationRequestQuery}>(functions, eventCancellationDataUrl)

        const response =  await callGetEventData({params, type: "GET"})
        console.log(response)
        const data = response.data.data
    
        const eventRef = doc(db, COL.EVENTS, data.event_id)
        const orgRef = doc(db, COL.ORGANIZATION, data.org_id)
        const userRef = doc(db, COL.USERS_PUBLIC, data.user_id)
    
        const eventP = getDoc(eventRef)
        const orgP = getDoc(orgRef)
        const userP = getDoc(userRef)
    
        const [ eventSnap, orgSnap, userSnap ] = await Promise.all([eventP, orgP, userP])
        const eventData = eventSnap.data() as MainEvent;
        const orgData = orgSnap.data() as Organization
        const userData = userSnap.data() as OtherUser

        const subEventRef = collection(db, "sub_events")
        const subEventQ = query(subEventRef, where("event_id", "==", data.event_id))

        const subEventSnaps = await getDocs(subEventQ)
        const subEventDocs =  subEventSnaps.docs.map(doc => doc.data()) as SUB_EVENT_COLLECTION[]

        const subEventRefs = subEventSnaps.docs.map(doc => doc.ref)
        const paidPlayerRefs = subEventRefs.map(ref => collection(ref, COL.PAID_PLAYERS_POOL))

        const playerCountsArrObj = await Promise.all(paidPlayerRefs.map(ref => getCountFromServer(ref)))
        const playerCounts = playerCountsArrObj.map(obj => obj.data().count)

        const subEventData = subEventDocs.map((doc, index) => ({
            subEvent: convertTimestamps(doc),
            playerCount: playerCounts[index] ?? NaN
        }))

    
        const result = {
            data : data,
            eventData : convertTimestamps(eventData),
            orgData : convertTimestamps(orgData),
            userData: convertTimestamps(userData),
            subEventData: subEventData
        }
        console.log(result)
        return {
            data: result
        }
    } catch (error) {
        if (error instanceof FirebaseError) {
            console.error(error.message)
            return {
                error: error.message
            }
        }  
    }
    return {
        error: "Unhandled error"
    }
    
}

export default async function EventCancellationPage({params}: {params: Promise<{id: string}>}) {
    const { id } = await params
    const {error, data:result} = await getCancellationData(id)

    if (error) {
        return <h1>{error}</h1>
    }

    if (!result) {
        return <h1>Not data found.</h1>
        // return notFound()
    }

    const { data, eventData, orgData, userData, subEventData } = result

    if (!result) {
        return <h1>Not data found.</h1>
        // return notFound()
    }

    if (!eventData || !orgData || !userData || !subEventData) {
        return <h1>Additional data not found.</h1>
    }

    return (
        <EventCancellationForm 
        params={id}
        eventId={id} data={data} 
        eventData={eventData} 
        orgData={orgData} 
        userData={userData} 
        subEventData={subEventData}
        />
    )
}