import React from "react";
import { Col, Container, Row } from "react-grid-system";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Image from "@components/Image";
import styles from "./OurWhySection.module.scss";
import useBreakpoint from "@hooks/useBreakpoint";

const OurWhySection: React.FC = () => {
  const isMobile = useBreakpoint({ max: "md" });
  return (
    <section className={styles.ourWhySection}>
      <PageTitle align="center" className="mb60" color="radical-plum">
        Our Why
      </PageTitle>
      <Row className={styles.ourWhyRow}>
        <Col xs={12} lg={6.25} className={styles.whyText}>
          <PageTitle color="light">2019</PageTitle>
          <Text className={styles.description}>
            Steve’s life changed in an instant due to a tragic car accident. Overnight, his wife became his caregiver.
            Friends & family rallied around her, highlighting the power of collective care.
          </Text>
        </Col>
        <Col xs={12} lg={5.75} className={styles.whyImageContainer}>
          <Image src="/assets/coreteam/steve-family.png" alt="Steve with Family" className={styles.whyImage} />
        </Col>
      </Row>

      <Row className={styles.ourWhyRow} direction={isMobile ? "row-reverse" : "row"}>
        {!isMobile && (
          <Col xs={12} lg={5.75} className={styles.whyImageContainer}>
            <Image src="/assets/coreteam/alice-family.png" alt="Alice with Family" className={styles.whyImage} />
          </Col>
        )}
        <Col xs={12} lg={6.25} className={styles.whyText}>
          <PageTitle color="light">2022</PageTitle>
          <Text className={styles.description}>
            Alice unexpectedly became a caregiver because of her husband’s severe work injury. Her community provided
            unwavering support, easing the burden of her new, challenging reality.
          </Text>
        </Col>
        {isMobile && (
          <Col xs={12} lg={5.75} className={styles.whyImageContainer}>
            <Image src="/assets/coreteam/alice-family.png" alt="Steve with Family" className={styles.whyImage} />
          </Col>
        )}
      </Row>

      <Row className={styles.ourWhyRow}>
        <Col xs={12} lg={6.25} className={styles.whyText}>
          <PageTitle color="light">2024</PageTitle>
          <Text className={styles.description}>
            Brought together by their experiences & inspired by the support they received, Alice & Steve aim to build a
            lifeline for caregivers everywhere.
          </Text>
        </Col>
        <Col xs={12} lg={5.75} className={styles.whyImageContainer}>
          <Image src="./assets/coreteam/steve-and-alice.png" alt="Steve with Family" className={styles.whyImage} />
        </Col>
      </Row>
    </section>
  );
};

export default OurWhySection;
