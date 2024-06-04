import Navbar from "@components/NavBar";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import BannerImage from "../../../public/banner2.png";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Partners: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Box marginLeft={"2rem"} marginTop={"2rem"}>
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
          gutterBottom
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
      </Box>
      <Box>
        <img src={BannerImage.src} alt={"caregiver"} width={"100%"}></img>
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
              xs: "80%", // 0px - 600px
              sm: "80%", // 600px - 960px
              md: "70%", // 960px - 1280px
              lg: "70%", // 1280px - 1920px
              xl: "70%", // 1920px and up
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
            <FiberManualRecordIcon sx={{ color: "#ffffff", fontSize: "1rem" }} />
            Unlock new revenue opportunities by supporting a vital cause.
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
            <FiberManualRecordIcon sx={{ color: "#ffffff", fontSize: "1rem" }} />
            Extend your market reach by connecting with our caregiver community.
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
            <FiberManualRecordIcon sx={{ color: "#ffffff", fontSize: "1rem" }} />
            Gain recognition as a valued partner in Carecoves directory of trusted allies.
          </Typography>
        </Box>
      </Box>
      <Box textAlign={"center"}>
        <Typography fontSize={"2rem"} color={"#504E50"} letterSpacing="3px">
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
          borderBottom={"2px solid "}
          width={"20%"}
        ></Box>
        <Typography>Shape a world where caregivers thrive.</Typography>
      </Box>
    </div>
  );
};

export default Partners;
