import ReactGA from "react-ga4";

import { GA4_ID } from "@config/constants";

export function trackUserID(user: any) {
  if (GA4_ID) ReactGA.set({ userId: user.uid });
}

export function trackUsername(username: string) {
  if (GA4_ID) ReactGA.set({ username });
}

export function trackEvent(event: string, data?: Record<string, any>) {
  let trackingData = { ...data };
  const localTrackingId = localStorage.getItem("COMPANY_TRACKING_ID");
  trackingData.trackingId = localTrackingId || Math.random().toString().split(".")[1];
  if (!localTrackingId) localStorage.setItem("COMPANY_TRACKING_ID", trackingData.trackingId);
  trackingData.currentPage = window.location.pathname + window.location.search;

  if (GA4_ID) ReactGA.event(event, trackingData);
}

export function handleTrackEvent(event?: string, data?: Record<string, any>) {
  return function track() {
    if (event) trackEvent(event, data);
  };
}
