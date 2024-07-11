import React from "react";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import HeroSection from "@views/AboutUs/HeroSection";
import MissionSection from "@views/AboutUs/MissionSection";
import ValuesSection from "@views/AboutUs/ValuesSection";
import OurWhySection from "@views/AboutUs/OurWhySection";
import OurTeamSection from "@views/AboutUs/OurTeamSection";
import JoinSection from "@views/AboutUs/JoinSection";
import Banner from "@components/Banner";

const AboutUs: React.FC = () => {
  const router = useRouter();

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
