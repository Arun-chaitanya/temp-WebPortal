/* src/components/Footer/Footer.tsx */
import React from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";
import Logo from "@components/Logo";
import IconButton from "@components/IconButton";
import useBreakpoint from "@hooks/useBreakpoint";
import { handleTrackEvent } from "@utils/analytics";
import { FOOTER_EVENTS, FOOTER_SOCIALS_TYPE, HEADER_EVENTS } from "@config/events";
import LinkedIn from "@icons/LinkedIn";
import Facebook from "@icons/Facebook";
import Twitter from "@icons/Twitter";
import Instagram from "@icons/Instagram";
import NavItem from "@components/NavItem";
import NavList from "@components/NavList";

const Footer: React.FC<React.HTMLProps<HTMLDivElement>> = (className, disabled, ...props) => {
  const isMobile = useBreakpoint({ max: "sm" });

  const tabs = [
    { href: "/aboutus", text: "About Us", event: FOOTER_EVENTS.FOOTER_ABOUT_US_CLICKED },
    { href: "/partners", text: "Partner With Us", event: FOOTER_EVENTS.FOOTER_PARTNER_CLICKED },
    { href: "/contactus", text: "Contact Us", event: FOOTER_EVENTS.FOOTER_PARTNER_CLICKED },
  ];

  const subTabs = [
    { href: "/faq", text: "FAQ", event: FOOTER_EVENTS.FOOTER_ABOUT_US_CLICKED },
    { href: "/termsofservice", text: "Terms of Service", event: FOOTER_EVENTS.FOOTER_PARTNER_CLICKED },
    { href: "/privacypolicy", text: "Privacy Policy", event: FOOTER_EVENTS.FOOTER_PARTNER_CLICKED },
  ];

  const renderLinks = (list, variant: "big" | "medium" | "small" = "big") => (
    <>
      {list.map((item, index) => (
        <>
          <NavItem
            variant={variant}
            onClick={handleTrackEvent(item.event)}
            key={item.href}
            href={item.href}
            showDivider={index !== tabs.length - 1}
            exact
            showActive={false}
          >
            {item.text}
          </NavItem>
        </>
      ))}
    </>
  );

  return (
    <footer className={clsx(styles.footer, className)}>
      <div className={styles.container}>
        <Logo className={styles.logo} variant="footer" />
        <div className={styles.right}>
          <NavList>{renderLinks(tabs, isMobile ? "medium" : "big")}</NavList>
          <NavList>{renderLinks(subTabs, isMobile ? "small" : "medium")}</NavList>
          <div className={styles.socialIcons}>
            <IconButton
              className={styles.icon}
              isExternal
              href={"https://www.facebook.com/"}
              onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_SOCIALS_CLICKED, {
                socialMediaName: FOOTER_SOCIALS_TYPE.FACEBOOK,
              })}
            >
              <Facebook />
            </IconButton>
            <IconButton
              className={styles.icon}
              isExternal
              href={"https://twitter.com/"}
              onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_SOCIALS_CLICKED, {
                socialMediaName: FOOTER_SOCIALS_TYPE.TWITTER,
              })}
            >
              <Twitter />
            </IconButton>
            <IconButton
              className={styles.icon}
              isExternal
              href={"https://www.instagram.com/"}
              onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_SOCIALS_CLICKED, {
                socialMediaName: FOOTER_SOCIALS_TYPE.INSTAGRAM,
              })}
            >
              <Instagram />
            </IconButton>
            <IconButton
              className={styles.icon}
              isExternal
              href={"https://www.linkedin.com/"}
              onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_SOCIALS_CLICKED, {
                socialMediaName: FOOTER_SOCIALS_TYPE.LINKEDIN,
              })}
            >
              <LinkedIn />
            </IconButton>
            {/* <IconButton
              className={styles.icon}
              isExternal
              href={"https://www.youtube.com/"}
              onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_SOCIALS_CLICKED, {
                socialMediaName: FOOTER_SOCIALS_TYPE.YOUTUBE,
              })}
            >
              <LinkedIn />
            </IconButton> */}
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Copyright 2024, Carecove LLC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
