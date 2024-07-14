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

const Header: React.FC = () => {
  const { t } = useTranslation("header");
  const isTab = useBreakpoint({ max: "md" });

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
            <NavList>{renderLinks()}</NavList>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
