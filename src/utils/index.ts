import { CONTACT_US_EMAIL } from "@config/constants";

export const mailToCarecove = () => {
  const mailtoLink = `mailto:${CONTACT_US_EMAIL}`;
  window.location.href = mailtoLink;
};
