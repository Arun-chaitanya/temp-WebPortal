import React, { useEffect } from "react";

import { PAGE_VIEW_EVENTS } from "@config/events";
import { trackEvent } from "@utils/analytics";

import Banner from "@components/Banner";
import Layout from "@components/Layout";
import HeroSection from "@views/AboutUs/HeroSection";
import JoinSection from "@views/AboutUs/JoinSection";
import MissionSection from "@views/AboutUs/MissionSection";
import OurTeamSection from "@views/AboutUs/OurTeamSection";
import OurWhySection from "@views/AboutUs/OurWhySection";
import ValuesSection from "@views/AboutUs/ValuesSection";

const AboutUs: React.FC = () => {
  useEffect(() => {
    trackEvent(PAGE_VIEW_EVENTS.ABOUT_US_PAGE_VIEWED, { page: "About Us Page" });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <Banner src="/assets/aboutus/banner.png" />
      <ValuesSection />
      <OurWhySection />
      <OurTeamSection />
      <JoinSection />
    </Layout>
  );
};

export default AboutUs;
