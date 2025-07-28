
export enum EventStatus {
    DRAFT = 1,
    PUBLISHED = 3,
    DELETED = 7,
    ENDED = 8,
    /** @deprecated don't work on event level, and redundant on sub event level, remove this soon */
    FULL = 9,
    CANCELLED = 11,
  }

export type TLocation =  {
    formatted_address: string;
    name: string;
    city: string;
    admin_area_level: string;
    };


export interface MainEvent {
    orgId: string;
    eventId: string;
    eventName: string;
    eventPicture: string;
    location: null | TLocation;
    date: Date | string;
    end_date: Date | string;
    reg_start_date?: Date | string;
    reg_end_date?: Date | string;
    time: null | { timeFrom: Date | string; timeTo: Date | string };
    description?: string;
    status?: EventStatus;
    sub_images?: null | string[];
    date_published?: Date | string;
    rating: string;
    categories: string[];
    sports: string[];
    is_fraud?: boolean;
    /** @usage add this for exclusive club when publishing event */
    is_exclusive?: boolean;
}
