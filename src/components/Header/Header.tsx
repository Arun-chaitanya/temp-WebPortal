import useTranslation from "next-translate/useTranslation";
import { Container, Row, Col } from "react-grid-system";
import useBreakpoint from "@hooks/useBreakpoint";
import Logo from "@components/Logo";
import NavItem from "@components/NavItem";
import NavList from "@components/NavList";
import styles from "./Header.module.scss";
import useAppstore from "@store/useAppstore";
import SignupModal from "@views/SignupModal";

const Header: React.FC = () => {
  const { t } = useTranslation("header");
  const isTab = useBreakpoint({ max: "md" });

  const tabs = [
    { href: "/aboutus", text: t("About Us") },
    { href: "/partners", text: t("Partner With Us") },
    { href: "", text: t("Signup") },
  ];

  const setSignupModal = useAppstore((state: any) => state.setSignupModal);
  const signupModal = useAppstore((state: any) => state.signupModal);

  const handleSignupModal = () => {
    setSignupModal(true);
  };

  const renderLinks = () => (
    <>
      {tabs.map((item, index) => (
        <NavItem
          onClick={!item.href ? handleSignupModal : () => {}}
          key={item.href}
          className={isTab ? "" : "pl10 pr10"}
          href={item.href}
          exact
        >
          {item.text}
        </NavItem>
      ))}
    </>
  );

  return (
    <header className={styles.root} data-testid="header">
      {signupModal && <SignupModal />}
      <Container fluid className={styles.container}>
        <Row align="center" nogutter justify="between">
          <Col xs={4} sm={4} md={4.5} lg={4}>
            <Logo />
          </Col>
          <Col xs={8} sm={8} md={7.5} lg={8} className="flex items-center justify-end space-x-6">
            <NavList>{renderLinks()}</NavList>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
