import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useBreakpoint from "@hooks/useBreakpoint";

import styles from "./SideNav.module.scss";
import { HEADER_EVENTS } from "@config/events";
import { handleTrackEvent } from "@utils/analytics";
import NavItem from "@components/NavItem";
import NavList from "@components/NavList";

const SideNav = () => {
  const { t } = useTranslation("footer");
  const router = useRouter();
  const isMobile = useBreakpoint({ max: "sm" });

  const tabs = [
    { href: "/aboutus", text: t("About Us"), event: HEADER_EVENTS.HEADER_ABOUT_US_NAVIGATION_CLICKED },
    { href: "/partners", text: t("Partner With Us"), event: HEADER_EVENTS.HEADER_PARTNER_NAVIGATION_CLICKED },
    // { href: "", text: t("Login") },
  ];

  const renderLinks = () => (
    <>
      {tabs.map((item, index) => (
        <>
          <NavItem key={item.href} href={item.href} exact className={styles.navItem}>
            {item.text}
          </NavItem>
        </>
      ))}
    </>
  );

  return (
    <div className={styles.sideDrawer}>
      <NavList className="flex column align-start" justify="start">
        {renderLinks()}
      </NavList>
    </div>
  );
};

export default SideNav;
