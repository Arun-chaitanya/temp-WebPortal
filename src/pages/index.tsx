import type { NextPage } from "next";
import Layout from "@components/Layout";
import Text from "@components/Text";
import { Container } from "react-grid-system";
import Button from "@components/Button";
import { useEffect } from "react";
import useBreakpoint from "@hooks/useBreakpoint";
import { analytics } from "@utils/analytics";
import HowItWorks from "@views/Home/HowItWorks";
import CashbackStore from "@views/Home/CashbackStore";
import HeroSection from "@views/Home/HeroSection";
import CareCoveCommunity from "@views/Home/CareCoveCommunity";
import ContributionForCaregiver from "@views/Home/ContributionForCaregiver";

const Home: NextPage = () => {
  const isMobile = useBreakpoint({ max: "md" });
  useEffect(() => {
    if (!analytics) return;
    analytics.track("Home Page Viewed", { page: "Home" });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <CashbackStore />
      <HowItWorks />
      <ContributionForCaregiver />
      <CareCoveCommunity />
      <section className="pv60">
        <Container>
          <div className="flex column align-center">
            <Text
              weight="bold"
              color="midnight-lagoon"
              size="xl"
              align="center"
              className={isMobile ? "mb50" : "mb50 ph100"}
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Nobody Expects to be a Caregiver, but it's One of Life's Most Important, Challenging, & Loving Roles."
            </Text>
            <Button size="small" href="#home_section">
              Join The Waitlist
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
