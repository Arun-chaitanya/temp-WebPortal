import AdvocateIcon from "@icons/AdvocateIcon";
import CareGiverIcon from "@icons/CareGiverIcon";

const checkWindow = () => typeof window !== "undefined";
const checkIsProd = () => checkWindow() && window.location?.href?.includes("www.carecove.com");

export const CONTACT_US_EMAIL = "partner@carecove.com";
export const PRESS_EMAIL = "press@carecove.com";
export const HELLO_EMAIL = "hello@carecove.com";
// export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";
export const APP_ENVIRONMENT = process.env.NEXT_PUBLIC_APP_ENVIRONMENT || "";
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "";
// export const APP_ORIGIN = process.env.NEXT_PUBLIC_APP_ORIGIN || "";
export const TWITTER_WIDGET_SDK = "https://platform.twitter.com/widgets.js";
export const APP_NAME = "Carecove";
export const APP_DESCRIPTION = "Company Description";
// export const SEGMENT_KEY = process.env.NEXT_PUBLIC_SEGMENT_KEY || "";
export const BREAKPOINTS = { xs: 550, sm: 760, md: 1020, lg: 1270, xl: 1420, xxl: 1600 };

export const API_BASE_URL = checkIsProd() ? "https://api.carecove.com" : "https://api-dev.carecove.com";
export const APP_ORIGIN = checkIsProd() ? "https://www.carecove.com/" : "https://dev.carecove.com/";
export const SEGMENT_KEY = checkIsProd() ? "DS81XgpolUyOFxScrAHf928RlgG3L92J" : "DA1v9HSJszN5D0z6Il2ZAgQuuqkXUDgb";

export enum STEPS_ENUM {
  SIGNUP = 1,
  ROLE,
  INFO,
  ADD_EXTENSION,
  INVITE_OTHERS,
}

export const STEPS = {
  [STEPS_ENUM.SIGNUP]: {
    heading: ["CREATE YOUR ACCOUNT"],
    step: STEPS_ENUM.SIGNUP,
  },
  [STEPS_ENUM.ROLE]: {
    heading: ["SELECT YOUR ROLE"],
    step: STEPS_ENUM.ROLE,
  },
  [STEPS_ENUM.INFO]: {
    heading: ["SHARE YOUR CAREGIVING STORY", "CAREGIVER INFORMATION"],
    step: STEPS_ENUM.INFO,
  },
  [STEPS_ENUM.ADD_EXTENSION]: {
    heading: ["Add Our Extension & Start Saving!"],
    step: STEPS_ENUM.ADD_EXTENSION,
  },
  [STEPS_ENUM.INVITE_OTHERS]: {
    heading: ["INVITE OTHERS TO HELP"],
    step: STEPS_ENUM.INVITE_OTHERS,
  },
};

export enum ROLES_ENUM {
  CAREGIVER = 1,
  ADVOCATE = 2,
}

export interface Role {
  icon: React.ReactNode;
  heading: string;
  description: string;
}

export const ROLES: { [key: string]: Role } = {
  [ROLES_ENUM.CAREGIVER]: {
    icon: <CareGiverIcon />,
    heading: "I am a caregiver",
    description: "I am caring for someone in need and would love cash back.",
  },
  [ROLES_ENUM.ADVOCATE]: {
    icon: <AdvocateIcon />,
    heading: "I am an advocate",
    description: "I want to give my cash back to a well deserving person.",
  },
};

export enum RELATIONSHIP_ENUMS {
  PARENT = 1,
  CHILD,
  SPOUSE,
  FRIEND,
  OTHER,
}

export const RELATIONSHIP_SELECT_OPTIONS = [
  {
    value: RELATIONSHIP_ENUMS.PARENT,
    label: "Parent",
  },
  {
    value: RELATIONSHIP_ENUMS.CHILD,
    label: "Child",
  },
  {
    value: RELATIONSHIP_ENUMS.SPOUSE,
    label: "Spouse/partner",
  },
  {
    value: RELATIONSHIP_ENUMS.FRIEND,
    label: "Friend",
  },
  {
    value: RELATIONSHIP_ENUMS.OTHER,
    label: "Other",
  },
];

export enum FORMSTATE {
  LOGIN = 1,
  FORGOT_PASSWORD,
  FILL_OTP,
  SET_NEW_PASSWORD,
}

export const FORMSTATE_DATA = {
  [FORMSTATE.LOGIN]: { value: "SIGN IN", showCareCoveIcon: true, label: "" },
  [FORMSTATE.FORGOT_PASSWORD]: {
    value: "FORGOT PASSWORD",
    showCareCoveIcon: false,
    label: "A code will be sent to your email to reset password",
  },
  [FORMSTATE.FILL_OTP]: {
    value: "CHECK YOUR EMAIL",
    showCareCoveIcon: false,
    label: "Enter the 5 digit code that was sent to your email",
  },
  [FORMSTATE.SET_NEW_PASSWORD]: { value: "SET A NEW PASSWORD", showCareCoveIcon: false, label: "" },
};
