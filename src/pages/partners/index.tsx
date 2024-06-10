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
      <Box width={"95%"} margin={"2rem auto"}>
        <Typography color={"#232325"} fontSize={"1.5rem"} lineHeight={"1rem"} marginBottom={"0.25rem"}>
          Partner With Us
        </Typography>
        <Typography
          variant="h3"
          fontWeight={700}
          color={"#2B3F50"}
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "4rem",
              xl: "4rem",
            },
          }}
          textTransform={"uppercase"}
          letterSpacing={"0.625rem"}
          fontFamily={"Merriweather"}
        >
          Grow with Carecove.
        </Typography>
        <Typography
          lineHeight={"150%"}
          color={"#A62152"}
          gutterBottom
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2rem",
              xl: "2rem",
            },
          }}
        >
          Invest in caregiver support & reap the rewards of compassion.
        </Typography>
        <Button
          onClick={mailToCarecove}
          variant="contained"
          size="large"
          sx={{
            background: "#2B3F50",
            color: "#ffffff",

            "&:hover": {
              backgroundColor: "#1F2D3A", // darker shade of #2B3F50
            },
          }}
        >
          {CONTACT_US_EMAIL}
        </Button>
      </Box>
      <Box
        height={"700px"}
        sx={{
          height: {
            xs: "300px",
            sm: "500px",
            md: "600px",
          },
        }}
      >
        <img
          src={BannerImage.src}
          alt={"caregiver"}
          width={"100%"}
          height={"100%"}
          className={styles.imageContainer}
          style={{ objectFit: "cover", height: "100% !important" }}
        ></img>
      </Box>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        width={"90%"}
        margin={"0 auto"}
        borderRadius={2.5}
        marginY={8}
        color={"#ffffff"}
        gap={1}
        padding={"2.5rem 1rem"}
        sx={{
          background: "#A62152",
        }}
      >
        <Box
          textAlign={"center"}
          sx={{
            width: {
              xs: "90%", // 0px - 600px
              sm: "90%", // 600px - 960px
              md: "80%", // 960px - 1280px
            },
          }}
        >
          <Typography
            fontWeight={700}
            lineHeight={"3.375rem"}
            letterSpacing={"3px"}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "2rem",
                md: "2rem",
                lg: "2rem",
                xl: "2rem",
              },
            }}
            fontFamily={"Merriweather"}
          >
            Elevate Your Impact
          </Typography>
          {/** divider */}
          <Box
            sx={{
              margin: {
                xs: "1rem auto",
                sm: "2rem auto",
                md: "2rem auto",
                lg: "2rem auto",
                xl: "2rem auto",
              },
            }}
            borderBottom={"2px solid #ffffff"}
            width={"20%"}
          ></Box>
          <Typography
            fontSize={"1.5rem"}
            lineHeight={"150%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={0.5}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
                md: "1.5rem",
                lg: "1.5rem",
                xl: "1.5rem",
              },
            }}
          >
            • Unlock new revenue opportunities by supporting a vital cause.
          </Typography>
          <Typography
            fontSize={"1.5rem"}
            lineHeight={"150%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={0.5}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
                md: "1.5rem",
                lg: "1.5rem",
                xl: "1.5rem",
              },
            }}
          >
            • Extend your market reach by connecting with our caregiver community.
          </Typography>
          <Typography
            fontSize={"1.5rem"}
            lineHeight={"150%"}
            display={"flex"}
            alignItems={"center"}
            gap={0.5}
            justifyContent={"center"}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.5rem",
                md: "1.5rem",
                lg: "1.5rem",
                xl: "1.5rem",
              },
            }}
          >
            • Gain recognition as a valued partner in Carecoves directory of trusted allies.
          </Typography>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Typography
          fontSize={"2rem"}
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "2rem",
              md: "2rem",
            },
          }}
          color={"#504E50"}
          letterSpacing="3px"
          fontWeight={"700"}
          fontFamily={"Merriweather"}
        >
          Explore our Partnership Opportunities
        </Typography>
        <Box
          sx={{
            margin: {
              xs: "1rem auto",
              sm: "2rem auto",
              md: "2rem auto",
              lg: "2rem auto",
              xl: "2rem auto",
            },
          }}
          borderBottom={"2px solid #504E50"}
          width={"15%"}
        ></Box>
        <Typography
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "1.5rem",
            },
          }}
          color={"#504E50"}
          lineHeight={"150%"}
        >
          Shape a world where caregivers thrive.
        </Typography>
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-around"} marginTop={"2rem"}>
        {PARTNER_OPPURTUNITIES?.map((oppurtunity) => <PartnerCards {...oppurtunity} key={oppurtunity?.title} />)}
      </Box>
      <Box marginY={"3rem"} textAlign={"center"}>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: "#2B3F50",
            color: "#ffffff",

            "&:hover": {
              backgroundColor: "#1F2D3A", // darker shade of #2B3F50
            },
          }}
          onClick={mailToCarecove}
        >
          Connect with us
        </Button>
      </Box>
    </Layout>
  );
};

export default Partners;
