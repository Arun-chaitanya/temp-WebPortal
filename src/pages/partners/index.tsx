import React, { useEffect } from "react";

import { PAGE_VIEW_EVENTS } from "@config/events";
import { trackEvent } from "@utils/analytics";

import Banner from "@components/Banner";
import Layout from "@components/Layout";
import ElevationImpactSection from "@views/Partners/ElevationImpactSection";
import HeroSection from "@views/Partners/HeroSection";
import PartnershipOpportunity from "@views/Partners/PartnershipOpportunity";

const Partners: React.FC = () => {
  useEffect(() => {
    trackEvent(PAGE_VIEW_EVENTS.PARTNER_PAGE_VIEWED, { page: "Partners Page" });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ElevationImpactSection />
      <Banner src="/assets/partners/banner.png" />
      <PartnershipOpportunity />
    </Layout>
  );
};

export default Partners;
