import React from "react";
import PageTitle from "@components/PageTitle";
import Text from "@components/Text";
import Button from "@components/Button";
import styles from "./HeroSection.module.scss";
import { mailToCarecove } from "@utils/index";
import Hero from "@components/Hero";
import { CONTACT_US_EMAIL } from "@config/constants";
import BannerImage from "../../../../public/banner2.jpeg";
import Image from "@components/Image";

const HeroSection: React.FC = () => {
  return (
    <Hero classes={{ left: styles.heroContentBox, right: styles.heroImageBox }}>
      <div className={styles.heroContent}>
        <PageTitle color="light" className="mb20">
          Grow with Carecove.
        </PageTitle>
        <Text size="xl" weight="bold" color="light" className="mb30">
          Invest in caregiver support & reap the rewards of compassion.
        </Text>
        <Button onClick={mailToCarecove}>{CONTACT_US_EMAIL}</Button>
      </div>
    </Hero>
  );
};

export default HeroSection;
