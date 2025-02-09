import React, { useEffect } from "react";
import { Col, Row } from "react-grid-system";

import { Container } from "@mui/material";

import { CONTACT_US_EMAIL, HELLO_EMAIL, PRESS_EMAIL } from "@config/constants";
import { PAGE_VIEW_EVENTS } from "@config/events";
import useBreakpoint from "@hooks/useBreakpoint";
import { trackEvent } from "@utils/analytics";
import { mailToContactCarecove } from "@utils/index";

import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Title from "@components/Title";

import styles from "@styles/ContactUs.module.scss";

const CONTACTS = [
  {
    title: "General",
    description: (
      <>
        For general queries, please email <a onClick={() => mailToContactCarecove(HELLO_EMAIL)}>{HELLO_EMAIL}</a>
      </>
    ),
  },
  {
    title: "Member Support",
    description: (
      <>
        If you have questions or need assistance with your Carecove account, please submit a support request{" "}
        <a onClick={() => mailToContactCarecove(HELLO_EMAIL)}>here</a>
      </>
    ),
  },
  {
    title: "Partnerships",
    description: (
      <>
        To learn more about partnering with us email{" "}
        <a onClick={() => mailToContactCarecove(CONTACT_US_EMAIL)}>{CONTACT_US_EMAIL}</a>
      </>
    ),
  },
  {
    title: "Media",
    description: (
      <>
        For press inquiries, please contact us at{" "}
        <a onClick={() => mailToContactCarecove(PRESS_EMAIL)}>{PRESS_EMAIL}</a>
      </>
    ),
  },
  {
    title: "Address",
    description: (
      <>
        48 Summit Ave #3
        <br />
        Brookline, MA 02446
      </>
    ),
  },
];

const ContactUs: React.FC = () => {
  const isMobile = useBreakpoint({ max: "md" });

  useEffect(() => {
    trackEvent(PAGE_VIEW_EVENTS.CONTACT_US_PAGE_VIEWED, { page: "Contact Us Page" });
  }, []);

  return (
    <Layout>
      <Container>
        <PageTitle className={isMobile ? "mt40 mb15" : "mt65 mb15"}>Contact Us</PageTitle>
        <Text className="mb70">Want to get in touch? We’d love to hear from you. Here’s how you can reach us...</Text>
        <Row gutterWidth={40} className={styles.row}>
          {CONTACTS.map(({ title, description }, index) => (
            <Col xs={12} md={6} className={styles.column} key={index}>
              <div>
                <Title className="mb20">{title}</Title>
                <Text size="lg" className={styles.description}>
                  {description}
                </Text>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default ContactUs;
