
import { TLocation } from "./event";
import { Timestamp } from "firebase/firestore";
import { ClubMemberType } from "./org";

export enum UserTypeEnum {
    Founder = "FOUNDER",
    Staff = "STAFF",
    Player = "PLAYER",
    Support = "SUPPORT",
  }


export type OrganizationArray = {
    org_id: string;
    user_type: ClubMemberType;
  };

export interface User {
    // why all the values are optional???
    uid: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string | null;
    profile_pic?: string;
    link?: string;
    age?: number | null;
    gender: string | null;
    address: null | TLocation;
    date_of_birth: Date | string;
    kyc_info?: {
      city?: string;
      postal_code?: number;
      id_number?: string;
      id_type?: string;
      valid_id_pic_front?: string;
      valid_id_pic_back?: string;
      selfie_pic?: string;
      selfie_id_pic?: string;
    };
    is_verified?: boolean;
    user_status?: string;
    created_at?: Timestamp;
    updated_at?: Timestamp;
    created_by?: string;
    updated_by?: string;
    user_type_enum?: UserTypeEnum;
    org_id?: string;
    default_device?: "email";
    followers?: number;
    organizations?: OrganizationArray[];
    interests?: string[];
    last_online?: Date | string;
    is_online?: boolean;
    full_name?: string;
    info_privacy?: {
      date_of_birth: boolean;
      phone: boolean;
      address: boolean;
      gender: boolean;
      email: boolean;
    };
  }

export type OtherUser = Pick<
  User,
  | "uid"
  | "first_name"
  | "last_name"
  | "full_name"
  | "profile_pic"
  | "is_verified"
  | "is_online"
  | "organizations"
  | "last_online"
  | "gender"
  | "user_status"
  | "age"
>;
