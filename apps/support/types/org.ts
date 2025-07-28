import { Timestamp } from "firebase/firestore";
import { TLocation } from "./event";

export enum ClubMemberType {
    MEMBER = "MEMBER",
    ADMIN = "STAFF",
    COACH = "COACH",
    OWNER = "FOUNDER",
  }

export interface Organization {
    org_id: string;
    id: string;
    org_owner: string;
    uid?: string;
    org_profile_pic?: string;
    org_name?: string;
    description?: string;
    org_email?: string;
    org_contact_person?: string;
    org_mobile?: string;
    org_phone?: string;
    org_avail_time?: null | { timeFrom: Date | string; timeTo: Date | string };
    org_avail_time_start?: string;
    org_avail_time_end?: string;
    org_ofc_address?: null | TLocation;
    org_fb_link?: string;
    org_ig_link?: string;
    org_linkedin_link?: string;
    org_website_link?: string;
    org_total_reviews?: number;
    org_rate?: number;
    customer_id?: string;
    created_at?: string;
    updated_at?: string;
    created_by?: string;
    updated_by?: string;
    role?: ClubMemberType;
    number_of_events?: number;
    last_online?: Date | string;
    is_online?: boolean;
    user_status?: string;
    org_status?: string;
    info_privacy?: {
      org_profile_pic: boolean;
      org_email: boolean;
      org_contact_person: boolean;
      org_phone: boolean;
      org_mobile: boolean;
      org_avail_time: boolean;
      org_ofc_address: boolean;
      org_fb_link: boolean;
      org_ig_link: boolean;
      org_linkedin_link: boolean;
      org_website_link: boolean;
    };
    subscription?: {
      isSubscribed: boolean;
      valid_until_date: Date | string;
      updated_at: Timestamp;
      subscription_data_id: string;
    };
    club_chat_id?: string;
    /** @usage for private clubs, need approval to join,  */
    is_exclusive?: boolean;
  }