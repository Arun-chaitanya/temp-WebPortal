import React from "react";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import styles from "./ValuesSection.module.scss";
import Compassion from "@icons/Compassion";
import Innovation from "@icons/Innovation";
import Inclusion from "@icons/Inclusion";
import TrustIcon from "@icons/TrustIcon";
import { Col, Row } from "react-grid-system";
import { Container } from "@mui/material";
import Image from "@components/Image";

interface Value {
  icon: string;
  label: string;
  description: string;
}

export const OUR_VALUES: Value[] = [
  {
    icon: "/assets/aboutus/compassion-icon.svg",
    label: "Compassion",
    description:
      "We lead with compassion, offering a supportive hand & a listening ear to the caregivers who selflessly tend to their loved ones.",
  },
  {
    icon: "/assets/aboutus/trust-icon.svg",
    label: "Trust",
    description:
      "We build trust within our community by ensuring every interaction is reliable, secure, & honors the dedication we have to family caregivers.",
  },
  {
    icon: "/assets/aboutus/inclusion-icon.svg",
    label: "Inclusion",
    description:
      "We make sure that support & empowerment are accessible to all family caregivers, regardless of their background or journey.",
  },
  {
    icon: "/assets/aboutus/innovation-icon.svg",
    label: "Innovation",
    description:
      "We are committed to innovation, driving new pathways for financial support & community connection to family caregivers.",
  },
];

const ValuesSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <PageTitle align="center" color="radical-plum" className="mb60">
          Our values
        </PageTitle>
        <Row>
          {OUR_VALUES.map(({ icon, label, description }) => (
            <Col xs={12} md={12} lg={6} key={label} className="justify-center flex">
              <div className="flex column align-center mb50" style={{ maxWidth: "420px" }}>
                <Image src={icon} alt={label} className={styles.icon} />
                <Text size="xl" weight="bold" color="radical-plum" className="mb15">
                  {label}
                </Text>
                <Text size="xl" align="center" weight="medium" color="radical-plum">
                  {description}
                </Text>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ValuesSection;
