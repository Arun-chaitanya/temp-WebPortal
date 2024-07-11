/* src/components/Footer/Footer.tsx */
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import clsx from "clsx";
import Logo from "@components/Logo";
import IconButton from "@components/IconButton";
import useBreakpoint from "@hooks/useBreakpoint";
import { handleTrackEvent } from "@utils/analytics";
import { FOOTER_EVENTS, FOOTER_SOCIALS_TYPE } from "@config/events";
import LinkedIn from "@icons/LinkedIn";

const Footer: React.FC<React.HTMLProps<HTMLDivElement>> = (className, disabled, ...props) => {
  const isMobile = useBreakpoint({ max: "sm" });

  return (
    <footer className={clsx(styles.footer, className)}>
      <div className={styles.container}>
        <Logo className={styles.logo} variant="footer" />
        <div className={styles.right}>
          <div className={styles.links}>
            <Link href="/aboutus" onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_ABOUT_US_CLICKED)}>
              About Us
            </Link>
            {" | "}
            <Link href="/partners" onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_PARTNER_CLICKED)}>
              Partner with us
            </Link>
            {" | "}
            <Link href="/contact" onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_CONTACT_US_CLICKED)}>
              Contact us
            </Link>
          </div>
          <div className={styles.socialIcons}>
            <IconButton
              className={styles.icon}
              isExternal
              href={"https://www.facebook.com/"}
              onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_SOCIALS_CLICKED, {
                socialMediaName: FOOTER_SOCIALS_TYPE.FACEBOOK,
              })}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              className={styles.icon}
              isExternal
              href={"https://www.instagram.com/"}
              onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_SOCIALS_CLICKED, {
                socialMediaName: FOOTER_SOCIALS_TYPE.INSTAGRAM,
              })}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              className={styles.icon}
              isExternal
              href={"https://twitter.com/"}
              onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_SOCIALS_CLICKED, {
                socialMediaName: FOOTER_SOCIALS_TYPE.TWITTER,
              })}
            >
              <LinkedIn />
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
            <IconButton
              className={styles.icon}
              isExternal
              href={"https://www.youtube.com/"}
              onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_SOCIALS_CLICKED, {
                socialMediaName: FOOTER_SOCIALS_TYPE.YOUTUBE,
              })}
            >
              <LinkedIn />
            </IconButton>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Copyright 2024, Carecove LLC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
