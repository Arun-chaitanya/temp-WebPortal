import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import BannerImage from "../../../public/banner2.jpeg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SponsorsIcon from "@icons/SponsorsIcon";
import PartnerCards from "@views/PartnerCards";
import { CONTACT_US_EMAIL } from "@config/constants";
import { mailToCarecove } from "@utils/index";
import CommunityIcon from "@icons/CommunityIcon";
import PartnersIcon from "@icons/PartnersIcon";
import Layout from "@components/Layout";
import styles from "./partners.module.scss";
import HeroSection from "@views/Partners/HeroSection";
import ElevationImpactSection from "@views/Partners/ElevationImpactSection";
import PartnershipOpportunity from "@views/Partners/PartnershipOpportunity";
import Banner from "@components/Banner";

const PARTNER_OPPURTUNITIES = [
  {
    title: "Sponsors",
    description:
      "Unite with us in offering caregivers exclusive discounts, nurturing their resilience and your brand's growth.",
    icon: <SponsorsIcon />,
    benefits: [
      "✔ Market Insights",
      "✔ Positive Brand Association",
      "✔ Positive Brand Association", // Duplicate benefit included
      "✔ Prominent Community Placements",
      "✔ Collaborative Joint Marketing Efforts",
    ],
  },
  {
    title: "Community Champions",
    description:
      "Create a dedicated following by empowering caregivers by sharing your expertise and connecting with caregivers who value your guidance.",
    icon: <CommunityIcon />,
    benefits: [
      "✔ Personal Brand Growth",
      "✔ Dedicated Follower Base",
      "✔ Community Impact",
      "✔ Engagement Opportunities",
      "✔ Content Amplification",
    ],
  },
  {
    title: "Wellness Partners",
    description:
      "Showcase your offerings with Carecove, ensuring that the right caregivers discover the benefits of your product or service.",
    icon: <PartnersIcon />,
    benefits: [
      "✔ Product Visibility",
      "✔ Market Insights",
      "✔ Solution Spotlight",
      "✔ Champion Connection",
      "✔ Caring Certification",
    ],
  },
];

const Partners: React.FC = () => {
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
