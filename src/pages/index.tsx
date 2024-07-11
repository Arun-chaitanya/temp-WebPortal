import type { NextPage } from "next";
import Layout from "@components/Layout";
import Text from "@components/Text";
import Image from "@components/Image";
import styles from "@styles/Home.module.scss";
import { Container, Row, Col } from "react-grid-system";
import Title from "@components/Title";
import PageTitle from "@components/PageTitle";
import InputText from "@components/InputText";
import Button from "@components/Button";
import { useCallback, useEffect, useState } from "react";
import { useJoinWaitList } from "@api/home";
import { toast } from "react-toastify";
import useBreakpoint from "@hooks/useBreakpoint";
import TextButton from "@components/TextButton";
import { analytics } from "@utils/analytics";
import Hero from "@components/Hero";
import HowItWorks from "@views/Home/HowItWorks";
import CashbackStore from "@views/Home/CashbackStore";
import HeroSection from "@views/Home/HeroSection";
import CareCoveCommunity from "@views/Home/CareCoveCommunity";
import ContributionForCaregiver from "@views/Home/ContributionForCaregiver";

const Home: NextPage = () => {
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
      {/* <CareCoveCommunity /> */}
      <section className="pv60">
        <Container>
          <div className="flex column align-center">
            <Text weight="bold" color="midnight-lagoon" size="xl" align="center" className="mb50">
              Nobody Expects to be a Caregiver,
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <br /> but it's One of Life's Most Important, Challenging, & Loving Roles.
            </Text>
            <Button size="small">Join The Waitlist</Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Home;
