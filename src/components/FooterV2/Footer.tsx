import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import clsx from "clsx";
import Logo from "@components/Logo";
import LinkedIn from "@icons/LinkedIn";
import IconButton from "@components/IconButton";
import useBreakpoint from "@hooks/useBreakpoint";
import { handleTrackEvent } from "@utils/analytics";
import { FOOTER_EVENTS, FOOTER_SOCIALS_TYPE } from "@config/events";

const Footer: React.FC<React.HTMLProps<HTMLDivElement>> = (className, disabled, ...props) => {
  const isMobile = useBreakpoint({ max: "sm" });
  return (
    <footer className={clsx(styles.footer)}>
      <div className={styles.container}>
        <Logo className={styles.logo} variant="footer" />
        <div className={styles.right}>
          <div className={styles.middle}>
            <p className={styles.links}>
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
            </p>
          </div>
          <div className={isMobile ? "" : "flex justify-end mt10"}>
            <IconButton
              className={styles.linkedInBox}
              isExternal
              href={"https://www.linkedin.com/company/getcarecove/"}
              onClick={handleTrackEvent(FOOTER_EVENTS.FOOTER_SOCIALS_CLICKED, {
                socialMediaName: FOOTER_SOCIALS_TYPE.LINKEDIN,
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
