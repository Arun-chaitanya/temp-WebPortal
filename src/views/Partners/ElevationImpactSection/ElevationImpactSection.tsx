import React from "react";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import styles from "./ElevationImpactSection.module.scss";
import Image from "@components/Image";
import { Container } from "@mui/material";
import Button from "@components/Button";
import { Col, Row } from "react-grid-system";

const ElevationImpactSection: React.FC = () => {
  return (
    <>
      <section className={styles.elevationImpactSection}>
        <Container>
          <PageTitle color="midnight-lagoon" className="mb85">
            Elevate Your Impact
          </PageTitle>
          <Row>
            <Col xs={12} lg={4} className={styles.card}>
              <Image src="/assets/partners/unlock-icon.svg" alt="Unlock" className={styles.icon} />
              <Text weight="bold" size="xl" color="midnight-lagoon" align="center" className="mb15">
                Unlock
              </Text>
              <Text weight="medium" size="xl" color="midnight-lagoon" align="center" className={styles.cardContent}>
                New revenue opportunities by supporting a vital cause.
              </Text>
            </Col>
            <Col xs={12} lg={4} className={styles.card}>
              <Image src="/assets/partners/extend-icon.svg" alt="Extend" className={styles.icon} />
              <Text weight="bold" size="xl" color="midnight-lagoon" align="center" className="mb15">
                Extend
              </Text>
              <Text weight="medium" size="xl" color="midnight-lagoon" align="center" className={styles.cardContent}>
                Your market reach by connecting with our extensive caregiver network.
              </Text>
            </Col>
            <Col xs={12} lg={4} className={styles.card}>
              <Image src="/assets/partners/gain-icon.svg" alt="Gain" className={styles.icon} />
              <Text weight="bold" size="xl" color="midnight-lagoon" align="center" className="mb15">
                Gain
              </Text>
              <Text weight="medium" size="xl" color="midnight-lagoon" align="center" className={styles.cardContent}>
                Recognition as a valued partner in Carecove’s directory of trusted allies.
              </Text>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mv60 flex justify-center">
        <Button size="small">Join The Waitlist</Button>
      </section>
    </>
  );
};

export default ElevationImpactSection;
