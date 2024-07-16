import React from "react";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import { Container } from "@mui/material";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Title from "@components/Title";
import { Col, Row } from "react-grid-system";
import styles from "@styles/ContactUs.module.scss";
import useBreakpoint from "@hooks/useBreakpoint";
import { mailToSupportCarecove } from "@utils/index";

const CONTACTS = [
  {
    title: "General",
    description: (
      <>
        For general queries, please email <a onClick={mailToSupportCarecove}>email@carecove.com</a>
      </>
    ),
  },
  {
    title: "Member Support",
    description: (
      <>
        If you have questions or need assistance with your Carecove account, please submit a support request{" "}
        <a onClick={mailToSupportCarecove}>here</a>
      </>
    ),
  },
  {
    title: "Partnerships",
    description: (
      <>
        To learn more about partnering with us email <a onClick={mailToSupportCarecove}>email@carecove.com</a>
      </>
    ),
  },
  {
    title: "Media",
    description: (
      <>
        For press inquiries, please contact us at <a onClick={mailToSupportCarecove}>email@carecove.com</a>
      </>
    ),
  },
  {
    title: "Address and Phone",
    description: (
      <>
        123 Main Street
        <br />
        22nd Floor
        <br />
        Boston, MA 02115
        <br />
        <br />
        123 456-7890
      </>
    ),
  },
];

const AboutUs: React.FC = () => {
  const router = useRouter();
  const isMobile = useBreakpoint({ max: "md" });

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

export default AboutUs;
