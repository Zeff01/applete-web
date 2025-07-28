import EventCancellationForm from "@/components/EventCancellationForm"
import {  db, functions } from "@/lib/firebase"
import { notFound } from "next/navigation"
import {  httpsCallableFromURL } from "firebase/functions"
import { getEventCancellationDataUrl } from "@/lib/constants"
import { EventCancellationRequestQuery } from "@/types/event_cancel"
import { MainEvent } from "@/types/event"
import { Organization } from "@/types/org"
import { doc, getDoc } from "firebase/firestore"
import { convertTimestamps } from "@/lib/utils/convertTimestamps"
import { OtherUser } from "@/types/user"



async function getCancellationData(params: string) {
    console.log({params, getEventCancellationDataUrl})
    if (!getEventCancellationDataUrl) {
        throw new Error("getEventCancellationDataUrl is not defined")
    }
    const callGetEventData = httpsCallableFromURL<{params: string}, {data:EventCancellationRequestQuery}>(functions, getEventCancellationDataUrl)

    const response =  await callGetEventData({params})
    console.log(response)
    const data = response.data.data

    const eventRef = doc(db, "events", data.event_id)
    const orgRef = doc(db, "organization", data.org_id)
    const userRef = doc(db, "users_public", data.user_id)

    const eventP = getDoc(eventRef)
    const orgP = getDoc(orgRef)
    const userP = getDoc(userRef)

    const [ eventSnap, orgSnap, userSnap ] = await Promise.all([eventP, orgP, userP])
    const eventData = eventSnap.data() as MainEvent;
    const orgData = orgSnap.data() as Organization
    const userData = userSnap.data() as OtherUser

    const result = {
        data : data,
        eventData : convertTimestamps(eventData),
        orgData : convertTimestamps(orgData),
        userData: convertTimestamps(userData)
    }
    console.log(result)
    return result
}

export default async function EventCancellationPage({params}: {params: Promise<{id: string}>}) {
    const { id } = await params
    const {data, eventData, orgData, userData} = await getCancellationData(id)

    if (!data) {
        return <>Not data found.</>
        // return notFound()
    }

    if (!eventData || !orgData || !userData) {
        return <>Additional data not found.</>
    }

    return (
        <EventCancellationForm eventId={id} data={data} eventData={eventData} orgData={orgData} userData={userData} />
    )
}