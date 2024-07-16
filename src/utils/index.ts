import { CONTACT_US_EMAIL, SUPPORT_EMAIL } from "@config/constants";

export const mailToCarecove = () => {
  const mailtoLink = `mailto:${CONTACT_US_EMAIL}`;
  window.location.href = mailtoLink;
};

export const mailToSupportCarecove = () => {
  const mailtoLink = `mailto:${SUPPORT_EMAIL}`;
  window.location.href = mailtoLink;
};

export function shareUrl(type: string, url: string) {
  if (type === "X") {
    const twitterBaseUrl = "https://twitter.com/intent/tweet";
    const fullUrl = `${twitterBaseUrl}?url=${encodeURIComponent(url)}`;
    window.open(fullUrl, "_blank", "width=550,height=235");
  } else if (type === "E-mail") {
    const mailtoLink = `mailto:${""}`;
    window.location.href = mailtoLink;
  }
}
