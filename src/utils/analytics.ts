
import { SEGMENT_KEY } from "@config/constants";
import { AnalyticsBrowser } from "@segment/analytics-next";

export const analytics = AnalyticsBrowser.load({
  writeKey: SEGMENT_KEY,
});

export function identifyUser(userId?: string) {
  return analytics.identify(userId || "tempUser")
}

export function trackEvent(event: string, data?: Record<string, any>) {
  let trackingData = { ...data };
  trackingData.currentPage = window.location.pathname;
  return analytics.track(event, data);
}

export function handleTrackEvent(event?: string, data?: Record<string, any>) {
  return function track() {
    if (event) trackEvent(event, data);
  };
}
