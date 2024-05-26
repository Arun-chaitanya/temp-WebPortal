import useTranslation from "next-translate/useTranslation";
import { Col, Container, Row } from "react-grid-system";

import Calender from "@icons/boilerplate-icons/Tabs/Calender";
import Document from "@icons/boilerplate-icons/Tabs/Document";
import Home from "@icons/boilerplate-icons/Tabs/Home";
import Profile from "@icons/boilerplate-icons/Tabs/Profile";

import styles from "./MobileNavigator.module.scss";
import MobileTab, { MobileTabProps } from "./MobileTab";
import { SVGProps } from "react";

const MobileNavigator: React.FC = () => {
  const { t } = useTranslation("header");

  const tabs: MobileTabProps[] = [
    { href: "", Icon: Home as React.FC<SVGProps<SVGSVGElement>>, text: t("mobile-tab1") },
    { href: "", Icon: Document as React.FC<SVGProps<SVGSVGElement>>, text: t("mobile-tab2") },
    { href: "", Icon: Calender as React.FC<SVGProps<SVGSVGElement>>, text: t("mobile-tab3") },
    { href: "", Icon: Profile as React.FC<SVGProps<SVGSVGElement>>, text: t("mobile-tab4") },
  ];

  return (
    <>
      <div className="p45" />
      <div className={styles.root} data-testid="mobile-navigator">
        <Container>
          <Row>
            {tabs.map((tab) => (
              <Col xs={3} key={tab.text} style={{ padding: 0 }}>
                <MobileTab {...tab} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MobileNavigator;
