export const eventCancellationDataUrl = process.env.NEXT_PUBLIC_GET_EVENT_CANCELLATION_DATA_URL

/** firestore collections */
export enum COL {
    REFUND_FORMS = "refund_forms",
    CONFIG = "config",
    EVENTS = "events",
    FRAUD_EVENTS = "fraud_events",
    USERS = "users",
    EVENT_CANCEL_REQUESTS = "event_cancel_requests",
    ORGANIZATION = "organization",
    ORG_PENALTY = "org_penalty",
    SUB_EVENTS = "sub_events",
    EVENT_REPORTS = "event_reports",
    QUESTIONS = "questions",
    NOTIFICATIONS = "notifications",
    CHECKOUT = "checkout",
    CREDIT = "credit",
    TRANSACTIONS = "transactions",
    SUBSCRIPTION = "subscription",
    SUBSCRIPTION_PLANS = "subscription_plans",
    SUBSCRIPTION_DATA = "subscription_data",
    PAID_PLAYERS_POOL = "paid_players_pool",
    ORG_WALLET = "org_wallet",
    USER_WALLET = "user_wallet",
    SESSION_PACKAGES = "session_packages",
    PAID_SESSION_PACKAGES = "paid_session_packages",
    FOLLOWERS = "followers",
    FOLLOWINGS = "followings",
    REVIEWS = "reviews",
    SUB_EVENT_TEMPLATES = "sub_event_templates",
    EVENT_TEMPLATES = "event_templates",
    SE_PRIVATE_CODES = "se_private_codes",
    PRIVATE_VIEWERS = "private_viewers",
    KYC = "kyc",
    MEMBERS = "members",
    BOARD = "board",
    ACTIVITIES = "activities",
    INVITES = "invites",
    CHAT_ROOM = "chat_roomsV2",
    FEEDS = "feeds",
    FEED_COMMENTS = "comments",
    FEED_REACTS = "reacts",
    USER_FOLLOWERS = "user_followers",
    USER_FOLLOWINGS = "user_followings",
    CLUB_REPORTS = "club_reports",
    MUTED_NOTIFS = "muted_notifs",
    TEAMS = "teams",
    USERS_META = "users_meta",
    JOINED_EVENTS = "joined_events",
    USER_RECENT_SEARCHES = "user_recent_searches",
    CONVERSATION = "conversation",
    SAVED_EVENTS = "saved_events",
    /** usage: on limited supply session packages */
    SP_RESERVED = "sp_reserved",
    USERS_PUBLIC = "users_public",
    COURTS = "courts",
    SCHEDULES = "schedule",
    TIME_SLOTS = "time_slots",
    RESERVATION = "reservation",
  }
  

  export enum URGENCY_LEVEL {
     LOW="low",
     NORMAL="normal",
     URGENT="urgent",
     IMMEDIATE="immediate",
  }

  export enum CANCELLATION_REASON {
    WEATHER = "weather",
    VENUE_UNAVAILABLE = "venue-unavailable",
    INSUFFICIENT_PARTICIPANTS = "insufficient-participants",
    ORGANIZER_EMERGENCY = "organizer-emergency",
    SAFETY_CONCERNS = "safety-concerns",
    EQUIPMENT_ISSUES = "equipment-issues",
    OTHER = "other",
  }
  

  export const URGENCY_LEVEL_LABELS : Record<URGENCY_LEVEL, string> = {
    immediate: "Immediate (Same Day)",
    urgent: "Urgent (Within 24 hours)",
    normal: "Normal (2-3 days)",
    low: "Low Priority",
  };

  export const CANCELLATION_REASON_LABELS : Record<CANCELLATION_REASON, string> = {
    weather: "Weather Conditions",
    "venue-unavailable": "Venue Unavailable",
    "insufficient-participants": "Insufficient Participants",
    "organizer-emergency": "Organizer Emergency",
    "safety-concerns": "Safety Concerns",
    "equipment-issues": "Equipment Issues",
    other: "Other",
  };
  
  