import { Timestamp } from 'firebase/firestore'

export enum EVENT_CANCELLATION_STATUS {
  /** organizer completed and submitted his event cancellation form and waiting to be approved */
  PENDING = 1,
  /** admins approved the event cancellation, no penalty will be received by organizer */
  APPROVED = 3,
  /** admins rejected the event cancellation, penalty MAY be received by organizer */
  REJECTED = 5,
  /** when user click the cancel event in the app,
   * it will set the status to 'NOT_STARTED'
   * it will redirect to the support site
   */
  NOT_STARTED = 7,
}

export interface EventCancellationRequest {
  cancellation_reason: string
  status: EVENT_CANCELLATION_STATUS
  event_id: string
  user_id: string
  org_id: string
  created_at: Timestamp
  updated_at: Timestamp
}


export interface EventCancellationRequestQuery extends Omit<EventCancellationRequest, "created_at" | "updated_at"> {
    created_at: number;
    updated_at: number
}