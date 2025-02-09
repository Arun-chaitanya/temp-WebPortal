import clsx from "clsx";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { Col, Row } from "react-grid-system";

import { Drawer } from "@mui/material";

import { HEADER_EVENTS } from "@config/events";
import useBreakpoint from "@hooks/useBreakpoint";
import { handleTrackEvent } from "@utils/analytics";

import FullContainer from "@components/FullContainer";
import Logo from "@components/Logo";
import NavItem from "@components/NavItem";
import NavList from "@components/NavList";
import LoginModal from "@views/LoginModal";
import SignupModal from "@views/SignupModal";

import Menu from "@icons/Menu";

import styles from "./Header.module.scss";
import SideNav from "./SideNav";

import useAppstore, { StoreState } from "@store/useAppstore";

const Header: React.FC = () => {
  const { t } = useTranslation("header");
  const isMobile = useBreakpoint({ max: "sm" });
  const [sideDrawer, setSideDrawer] = useState(false);

  const tabs = [
    { href: "/aboutus", text: t("About Us"), event: HEADER_EVENTS.HEADER_ABOUT_US_NAVIGATION_CLICKED },
    { href: "/partners", text: t("Partner With Us"), event: HEADER_EVENTS.HEADER_PARTNER_NAVIGATION_CLICKED },
    // { href: "", text: t("Login") },
  ];

  const setLoginModal = useAppstore((state: StoreState) => state.setLoginModal);

  const signupModal = useAppstore((state: StoreState) => state.signupModal);
  const loginModal = useAppstore((state: StoreState) => state.loginModal);

  const handleSignupModal = () => {
    setLoginModal(true);
  };

  const handleSideDrawer = () => {
    setSideDrawer(true);
    handleTrackEvent("click_top_menu", { text: "nav-menu" });
  };

  const renderLinks = () => (
    <>
      {tabs.map((item, index) => (
        <>
          <NavItem
            onClick={!item.href ? handleSignupModal : handleTrackEvent(item.event)}
            key={item.href}
            href={item.href}
            showDivider={index !== tabs.length - 1}
            exact
          >
            {item.text}
          </NavItem>
        </>
      ))}
    </>
  );

  return (
    <header className={styles.root} data-testid="header">
      {signupModal && <SignupModal />}
      {loginModal && <LoginModal />}
      <FullContainer className={styles.container}>
        <Row align="center" nogutter justify="between">
          <Col xs={4} sm={4} md={4.5} lg={4}>
            <Logo />
          </Col>
          <Col xs={8} sm={8} md={7.5} lg={8} className="flex items-center justify-end">
            {isMobile ? (
              <div className={clsx(styles.iconLink, "cursor-pointer relative")} onClick={handleSideDrawer}>
                <Menu className={styles.menuIcon} />
              </div>
            ) : (
              <NavList>{renderLinks()}</NavList>
            )}
          </Col>
        </Row>
        {isMobile && (
          <Drawer
            className={styles.fixed}
            anchor="right"
            open={sideDrawer}
            onClose={() => setSideDrawer(false)}
            classes={{ paper: styles.drawer }}
          >
            <SideNav />
          </Drawer>
        )}
      </FullContainer>
    </header>
  );
};

export default Header;
