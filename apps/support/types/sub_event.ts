import { Timestamp } from "firebase/firestore";
import { MainEvent, EventStatus } from "./event";

export interface Category {
    label: string;
    value: string;
  }
  
export interface SubCategory extends Category {
    type: string;
}

type schedules = {
    start_date: Timestamp;
    end_date: Timestamp;
};

export type SUB_EVENT_OPTION = {
    is_required?: boolean;
    option_type: "multiple" | "single";
    title: string;
    add_custom_options?: boolean;
    options: {
      subtitle: string;
      // price: 0
    }[];
  };
  

export type SUB_EVENT_COLLECTION = {
    category: string | null | Category;
    created_at: string;
    created_by?: string;
    description?: string;
    event_id: MainEvent["eventId"]; //FK
    image_medium: string | null;
    image_small?: string;
    // image_small?: string;
    location?: string;
    schedules?: schedules;
    // star_rate_voted?: number;
    stars?: number;
    sub_category?: string | null | SubCategory;
    total_players_join?: number;
    total_players?: number;
    title: string;
    sub_event_id: string; //PKs
    rate?: number | string;
    org_id?: string;
    updated_at: string;
    options?: SUB_EVENT_OPTION[]; //dynamic options
    total_players_per_team?: number;
    total_teams?: number;
    isTeam?: boolean;
    status?: EventStatus;
    add_notes?: boolean;
    teams?: SUB_EVENT_TEAM[];
    player_ids?: string[];
    sub_images?: string[] | null;
    is_private?: boolean;
    is_free?: boolean;
    will_club_shoulder_fees?: boolean;
    valid_session_packages?: null | string[];
    /** the order in which the sub event is rendered */
    order?: number | null;
    /** should always be falsy on team sub events and can be true or false on individual events  */
    hide_attendees_until_after_payment?: boolean;
    /** added for activity tabs, must manually add*/
    eventName?: string;
    /** @usage add this for exclusive club when publishing event */
    is_exclusive?: boolean;
    date_published?: string;
  };

  export type SUB_EVENT_TEAM = {
    team_id: string;
    sub_event_id?: string;
    team_name: string;
    total_players_per_team: number;
    total_teams: number;
    team_color?: string;
  };