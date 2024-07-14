import useTranslation from "next-translate/useTranslation";
import { Container, Row, Col } from "react-grid-system";
import useBreakpoint from "@hooks/useBreakpoint";
import Logo from "@components/Logo";
import NavItem from "@components/NavItem";
import NavList from "@components/NavList";
import styles from "./Header.module.scss";
import useAppstore, { StoreState } from "@store/useAppstore";
import SignupModal from "@views/SignupModal";
import LoginModal from "@views/LoginModal";
import { handleTrackEvent } from "@utils/analytics";
import { HEADER_EVENTS } from "@config/events";
import { Drawer } from "@mui/material";
import { useState } from "react";
import SideNav from "./SideNav";
import clsx from "clsx";
import LinkedIn from "@icons/LinkedIn";

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
      <Container fluid className={styles.container}>
        <Row align="center" nogutter justify="between">
          <Col xs={4} sm={4} md={4.5} lg={4}>
            <Logo />
          </Col>
          <Col xs={8} sm={8} md={7.5} lg={8} className="flex items-center justify-end">
            {isMobile ? (
              <div className={clsx(styles.iconLink, "cursor-pointer relative")} onClick={handleSideDrawer}>
                <LinkedIn />
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
      </Container>
    </header>
  );
};

export default Header;
