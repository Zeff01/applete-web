import { CANCELLATION_REASON, URGENCY_LEVEL } from '@/lib/constants'
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
  status: EVENT_CANCELLATION_STATUS
  event_id: string
  user_id: string
  org_id: string
  created_at: Timestamp
  updated_at: Timestamp

  // will be available after organizer completes request form
  cancellation_reason?: CANCELLATION_REASON;
  cancellation_details?: string;
  urgency_level?: URGENCY_LEVEL;
  /** optional */
  additional_notes?: string;
}


export interface EventCancellationRequestQuery extends Omit<EventCancellationRequest, "created_at" | "updated_at"> {
    created_at: number;
    updated_at: number
}

export type CancelEventPayload = Required<
  Pick<
    EventCancellationRequest,
    | 'additional_notes'
    | 'cancellation_details'
    | 'cancellation_reason'
    | 'urgency_level'
  >
>
