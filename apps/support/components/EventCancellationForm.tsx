"use client"

import { MainEvent } from "@/types/event"
import { EventCancellationRequestQuery } from "@/types/event_cancel"
import { Organization } from "@/types/org"
import { OtherUser } from "@/types/user"
import { ConvertTimestamps } from "@/types/utility"
import { Button } from "@repo/ui/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/ui/card"
import { Input } from "@repo/ui/components/ui/input"
import { Label } from "@repo/ui/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/components/ui/select"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { Calendar, MapPin, Users, AlertTriangle } from "lucide-react"

export default function EventCancellationForm({eventId, data, eventData, orgData, userData}:{
  eventId: string; 
  data: EventCancellationRequestQuery; 
  eventData: ConvertTimestamps<MainEvent>; 
  orgData: ConvertTimestamps<Organization>; 
  userData: ConvertTimestamps<OtherUser>
}) {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
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
                  <Label htmlFor="event-date">Event Date *</Label>
                  <Input id="event-date" type="date" required readOnly value={new Date(eventData.date).toISOString().split('T')[0]} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-time">Event Time</Label>
                  <Input id="event-time" type="time" readOnly
                  value={new Date(eventData.time?.timeFrom)
                    .toTimeString()
                    .slice(0, 5)} // "14:30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue">Venue *</Label>
                <Input id="venue" placeholder="Enter venue name and address" required readOnly value={eventData.location?.formatted_address} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sport-type">Sport Type *</Label>
                <Input id="sport-type" placeholder="Sports" required readOnly value={"Basketball"} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="participants">Expected Participants</Label>
                  <Input id="participants" type="number" placeholder="Number of participants" readOnly value={100} />
                </div>
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

            {/* Cancellation Details Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Cancellation Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Cancellation *</Label>
                  <Select>
                    <SelectTrigger id="reason">
                      <SelectValue placeholder="Select reason" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weather">Weather Conditions</SelectItem>
                      <SelectItem value="venue-unavailable">Venue Unavailable</SelectItem>
                      <SelectItem value="insufficient-participants">Insufficient Participants</SelectItem>
                      <SelectItem value="organizer-emergency">Organizer Emergency</SelectItem>
                      <SelectItem value="safety-concerns">Safety Concerns</SelectItem>
                      <SelectItem value="equipment-issues">Equipment Issues</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="urgency">Urgency Level *</Label>
                  <Select>
                    <SelectTrigger id="urgency">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (Same Day)</SelectItem>
                      <SelectItem value="urgent">Urgent (Within 24 hours)</SelectItem>
                      <SelectItem value="normal">Normal (2-3 days)</SelectItem>
                      <SelectItem value="low">Low Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="detailed-reason">Detailed Explanation *</Label>
                <Textarea
                  id="detailed-reason"
                  placeholder="Please provide a detailed explanation for the cancellation request..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional-notes">Additional Notes</Label>
                <Textarea
                  id="additional-notes"
                  placeholder="Any additional information or special circumstances..."
                  className="min-h-[80px]"
                />
              </div>
            </div>

            {/* Refund Information */}
            <div className="space-y-4">
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
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button variant="outline" className="flex-1 bg-transparent">
                Save as Draft
              </Button>
              <Button className="flex-1 bg-red-600 hover:bg-red-700">Submit Cancellation Request</Button>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Once submitted, this cancellation request will be reviewed by our admin
                team. You will receive a confirmation email and updates on the status of your request. Please ensure all
                information is accurate before submitting.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
