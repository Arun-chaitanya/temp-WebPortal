export const CONTACT_US_EMAIL = "partner@carecove.com";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
export const APP_ENVIRONMENT = process.env.NEXT_PUBLIC_APP_ENVIRONMENT || "";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
export const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || "";
export const TWITTER_WIDGET_SDK = "https://platform.twitter.com/widgets.js";
export const APP_NAME = "CareCove";
export const APP_DESCRIPTION = "Company Description";
export const SEGMENT_KEY = process.env.NEXT_PUBLIC_SEGMENT_KEY || "";
export const BREAKPOINTS = { xs: 550, sm: 760, md: 1020, lg: 1270, xl: 1420, xxl: 1600 };
export const IS_PROD = APP_ENVIRONMENT === "PRODUCTION";

export enum STEPS_ENUM {
  SIGNUP = 1,
  ROLE,
}

export const STEPS = {
  [STEPS_ENUM.SIGNUP]: {
    heading: "CREATE YOUR ACCOUNT",
    step: 1,
  },
  [STEPS_ENUM.ROLE]: {
    heading: "SELECT YOUR ROLE",
    step: 2,
  },
};
