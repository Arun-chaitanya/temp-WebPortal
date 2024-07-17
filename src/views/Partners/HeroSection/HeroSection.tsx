import React from "react";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Button from "@components/Button";
import styles from "./HeroSection.module.scss";
import { mailToCarecove } from "@utils/index";
import Hero from "@components/Hero";
import { CONTACT_US_EMAIL } from "@config/constants";
import useBreakpoint from "@hooks/useBreakpoint";

const HeroSection: React.FC = () => {
  const isMobile = useBreakpoint({ max: "sm" });
  return (
    <Hero className={styles.hero} classes={{ left: styles.heroContentBox, right: styles.heroImageBox }}>
      <div className={styles.heroContent}>
        <PageTitle color="light" className="mb20" variant="medium">
          Grow with Carecove.
        </PageTitle>
        <Text size={isMobile ? "lg" : "xl"} weight="bold" color="light" className="mb30">
          Invest in caregiver support & reap the rewards of compassion.
        </Text>
        <Button onClick={mailToCarecove} size={isMobile ? "small" : "medium"} fullWidth={isMobile}>
          <Text size={isMobile ? "lg" : "xl"} weight="bold" color="light">
            {CONTACT_US_EMAIL}
          </Text>
        </Button>
      </div>
    </Hero>
  );
};

export default HeroSection;
