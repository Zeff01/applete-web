"use client"

import { MainEvent } from "@/types/event"
import { CancelEventPayload, EVENT_CANCELLATION_STATUS, EventCancellationRequestQuery } from "@/types/event_cancel"
import { Organization } from "@/types/org"
import { SUB_EVENT_COLLECTION } from "@/types/sub_event"
import { OtherUser } from "@/types/user"
import { ConvertTimestamps } from "@/types/utility"
import Button from "@repo/ui/components/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Label } from "@repo/ui/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/components/ui/select"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Calendar, MapPin, Users, AlertTriangle } from "lucide-react"
import { FormEvent,  useMemo,  useState } from "react"
import { CANCELLATION_REASON, eventCancellationDataUrl, URGENCY_LEVEL, URGENCY_LEVEL_LABELS, CANCELLATION_REASON_LABELS } from "@/lib/constants"
import { functions } from "@/lib/firebase"
import { httpsCallableFromURL } from "firebase/functions"
import { useRouter } from "next/navigation"
import { toast } from "@shared/src/components/ui/sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@shared/src/components/ui/alert-dialog"

export default function EventCancellationForm({params, eventId, data, eventData, orgData, userData, subEventData}:{
  params: string
  eventId: string; 
  data: EventCancellationRequestQuery; 
  eventData: ConvertTimestamps<MainEvent>; 
  orgData: ConvertTimestamps<Organization>; 
  userData: ConvertTimestamps<OtherUser>
  subEventData: {
    subEvent: ConvertTimestamps<SUB_EVENT_COLLECTION>,
    playerCount: number
  }[]
}) {
  const router = useRouter()

  const [cancellationReason, setCancellationReason] = useState(data.cancellation_reason ?? "")
  const [urgencyLevel, setUrgencyLevel] = useState(data.urgency_level ?? "")
  const [explanation, setExplanation] = useState(data.cancellation_details ?? "")
  const [notes, setNotes] = useState(data.additional_notes ?? "")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isSubmitted = useMemo(() => data.status !== EVENT_CANCELLATION_STATUS.NOT_STARTED, [data])

  const isPending = useMemo(() => data.status === EVENT_CANCELLATION_STATUS.PENDING, [data])
  const isReviewed = useMemo(() => data.status === EVENT_CANCELLATION_STATUS.APPROVED || data.status === EVENT_CANCELLATION_STATUS.REJECTED, [data])

  async function onSubmit(e: FormEvent<HTMLFormElement> ) {
    e.preventDefault()
    if (isSubmitting || isSubmitted) {
      return
    }
    if (!eventCancellationDataUrl) {
        throw new Error("eventCancellationDataUrl is not defined")
    }
    try {
      setIsSubmitting(true)
      console.log({notes, explanation, urgencyLevel, cancellationReason}) 
      const callGetEventData = httpsCallableFromURL<{params: string, type: "GET"|"SUBMIT", updates: CancelEventPayload}, {success: true}>(functions, eventCancellationDataUrl)
      const result = await callGetEventData({params, type : "SUBMIT", updates: {
        additional_notes: notes,
        cancellation_details: explanation,
        urgency_level: (urgencyLevel as URGENCY_LEVEL),
        cancellation_reason: (cancellationReason as CANCELLATION_REASON),
      }})
      if (result.data.success) {
        toast("Cancellation request submitted successfully.")
        router.refresh()
      }
      
    } catch (error) {
        console.error(error)
        toast("Error submitting cancellation request.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-custom-backdrop p-2 rounded-lg flex items-center justify-center">
              <img src="/applete-icon.png" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Applete</h1>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Event Cancellation Request</h2>
          <p className="text-gray-600">Submit a request to cancel your scheduled sports event</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Cancellation Request Form
            </CardTitle>
            <CardDescription>
              Please provide all required information for your event cancellation request. This will be reviewed by our
              admin team.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">

                        {/* Cancellation Details Section */}
                        <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Cancellation Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Cancellation *</Label>
                  <Select onValueChange={v => setCancellationReason(v)} defaultValue={isSubmitted ? data.cancellation_reason : undefined}>
                    <SelectTrigger id="reason" className={`${ cancellationReason ? "" : "bg-custom-primary/10"}`} disabled={isSubmitted}>
                      <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(CANCELLATION_REASON).map((value) => (
                        <SelectItem key={value} value={value}>
                          {CANCELLATION_REASON_LABELS[value]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level *</Label>
                  <Select onValueChange={v => setUrgencyLevel(v)} defaultValue={isSubmitted ? data.urgency_level : undefined} >
                    <SelectTrigger id="urgency" className={`${ urgencyLevel ? "" : "bg-custom-primary/10"}`} disabled={isSubmitted} >
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                    {Object.values(URGENCY_LEVEL).map((value) => (
                      <SelectItem key={value} value={value}>
                        {URGENCY_LEVEL_LABELS[value]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="detailed-reason">Detailed Explanation *</Label>
                <Textarea
                  readOnly={isSubmitted}
                  onChange={(e) => setExplanation(e.currentTarget.value)}
                  value={explanation}
                  id="detailed-reason"
                  placeholder="Please provide a detailed explanation for the cancellation request..."
                  className={`min-h-[100px] ${ explanation ? "" : "bg-custom-primary/10"}`}
                  required
                  disabled={isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-notes">Additional Notes</Label>
                <Textarea
                  readOnly={isSubmitted}
                  onChange={(e) => setNotes(e.currentTarget.value)}
                  value={notes}
                  id="additional-notes"
                  placeholder="Any additional information or special circumstances..."
                  className="min-h-[80px]"
                  disabled={isSubmitted}
                />
              </div>
            </div>

            {/* Event Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Event Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="event-name">Event Name *</Label>
                  <Input id="event-name" placeholder="Enter event name" required value={eventData.eventName} readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-id">Event ID</Label>
                  <Input id="event-id" placeholder="e.g., EVT-2024-001" value={eventData.eventId} readOnly />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="event-date">Event Date Start *</Label>
                  <Input id="event-date" type="date" required readOnly value={new Date(eventData.date).toISOString().split('T')[0]} />
                </div>
                { eventData.time?.timeFrom && <div className="space-y-2">
                  <Label htmlFor="event-time">Event Time Start</Label>
                  <Input id="event-time" type="time" readOnly
                  value={new Date(eventData.time?.timeFrom)
                    .toTimeString()
                    .slice(0, 5)} // "14:30"
                  />
                </div>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue">Venue *</Label>
                <Input id="venue" placeholder="Enter venue name and address" required readOnly value={eventData.location?.formatted_address} />
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="font-bold">Sub Events</h1>
                {
                  subEventData.map(({subEvent, playerCount}) => (
                    <div key={subEvent.sub_event_id} className="flex flex-col gap-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="venue">Sub Event Name *</Label>
                        <Input id="venue" placeholder="Enter venue name and address" required readOnly value={subEvent.title} />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
                      <div className="space-y-2">
                        <Label htmlFor="sport-type">Sport Type *</Label>
                        <Input id="sport-type" placeholder="Sports" required readOnly value={
                          typeof subEvent.sub_category === "string" ? subEvent.sub_category : subEvent.sub_category?.label
                        } />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="participants">Total Participants *</Label>
                          <Input id="participants" type="number" placeholder="Number of participants" readOnly value={playerCount} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="participants">Max Participants</Label>
                          <Input id="participants" type="number" placeholder="Number of participants" readOnly value={
                            subEvent.isTeam ? Number(subEvent.total_players_per_team) * Number(subEvent.total_teams) : Number(subEvent.total_players)
                          } />
                        </div>
                        </div>
                      </div>
                  ))
                }
               </div>
            </div>

            {/* Organizer Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Organizer Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="organizer-name">Organizer Name *</Label>
                  <Input id="organizer-name" placeholder="Your full name" required readOnly value={userData.full_name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" placeholder="Organization/Club name" readOnly value={orgData?.org_name ?? ""} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required readOnly value={orgData?.org_email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required readOnly value={orgData?.org_phone}  />
                </div>
              </div>
            </div>

            {/* Refund Information */}
            {/* <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Refund Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="registration-fee">Registration Fee Collected</Label>
                  <Input id="registration-fee" type="number" placeholder="0.00" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="refund-method">Preferred Refund Method</Label>
                  <Select>
                    <SelectTrigger id="refund-method">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="original-payment">Original Payment Method</SelectItem>
                      <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                      <SelectItem value="check">Check</SelectItem>
                      <SelectItem value="no-refund">No Refund Required</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              {/* <Button variant="outline" className="flex-1 bg-transparent">
                Save as Draft
              </Button> */}
            
              <AlertDialog>
              <AlertDialogTrigger asChild>
              <Button
                disabled={!cancellationReason || !urgencyLevel || !explanation || isSubmitted}
                loading={isSubmitting}
                className="flex-1 bg-red-600 hover:bg-red-700" type="button" >
                  {
                    isSubmitted ? "Cancellation Request Submitted" :
                    "Submit Cancellation Request"
                  }
              </Button>
              </AlertDialogTrigger>
                  <AlertDialogContent asChild>
                    <form onSubmit={onSubmit}>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-black">Event Cancellation</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="text-black" >Cancel</AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Button
                        type="submit"
                        disabled={!cancellationReason || !urgencyLevel || !explanation || isSubmitted}
                        loading={isSubmitting}
                        className="flex-1 bg-red-600 hover:bg-red-700">
                          {
                            isSubmitted ? "Cancellation Request Submitted" :
                            "Submit Cancellation Request"
                          }
                        </Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                    </form>
                  </AlertDialogContent>
              </AlertDialog>
            </div>

            { isPending && <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6 flex flex-col gap-y-2">
              <p className="text-sm text-yellow-800">
                <strong>Pending:</strong> Please wait for our admins to review this cancellation.
                </p>
            </div>}

            { isReviewed && <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6 flex flex-col gap-y-2">
              <p className={`text-sm ${
                data.status === EVENT_CANCELLATION_STATUS.APPROVED ? "text-green-800" : "text-red-800"}`}>
                <strong>{ data.status === EVENT_CANCELLATION_STATUS.APPROVED ? "Approved" : "Rejected" }:</strong> {
                  data.status === EVENT_CANCELLATION_STATUS.APPROVED ? "Your cancellation request has been approved." :
                  "Your cancellation request has been rejected."}
                </p>
            </div>}

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6 flex flex-col gap-y-2">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Once submitted, this cancellation request will be reviewed by our admin
                team. You will receive a confirmation email and updates on the status of your request. Please ensure all
                information is accurate before submitting.
              </p>
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> This cancellation request will be reviewed by our support team. You’ll receive a confirmation email once a decision has been made. Please ensure all information is accurate before submitting.
              </p>
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> If players have already joined and paid, you will be required to cover all applicable refund-related fees, including payment gateway charges (~2–3%) and an optional ₱100 Applete service fee.
              </p>
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Players will receive full refunds via their original payment method or as Applete Credits, depending on the situation.
              </p>
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> New players will no longer be able to join once this request is submitted.
              </p>
              <p className="text-sm text-yellow-800">
                <strong>Reminder:</strong> In cases of rescheduling or force majeure (e.g. extreme weather), fees may be waived upon valid proof.
              </p>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
