import Navbar from "@components/NavBar";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import clsx from "clsx";
import styles from "./aboutus.module.scss";
import BannerImage from "../../../public/banner.png";
import Innovation from "@icons/Innovation";
import Inclusion from "@icons/Inclusion";
import TrustIcon from "@icons/TrustIcon";
import Compassion from "@icons/Compassion";

//static values
export const OUR_VALUES = [
  {
    icon: <Compassion />,
    label: "Compassion",
    description:
      "We lead with compassion, offering a supportive hand & a listening ear to the caregivers who selflessly tend to their loved ones.",
  },
  {
    icon: <TrustIcon />,
    label: "Trust",
    description:
      "We lead with compassion, offering a supportive hand & a listening ear to the caregivers who selflessly tend to their loved ones.",
  },
  {
    icon: <Inclusion />,
    label: "Inclusion",
    description:
      "We make sure that support & empowerment are accessible to every caregiver, regardless of their journey or background.",
  },
  {
    icon: <Innovation />,
    label: "Innovation",
    description:
      "Our commitment to innovation drives us to turn routine activities into impactful support, creating new pathways for financial empowerment & community connection for caregivers.",
  },
];

export const OUR_TEAM = [
  {
    image: <Avatar sx={{ width: "6rem", height: "6rem" }}>A</Avatar>,
    name: "Alice  Lewis",
    role: (
      <>
        CEO <br />
        Co-Founder
      </>
    ),
  },
  {
    image: <Avatar sx={{ width: "6rem", height: "6rem" }}>S</Avatar>,
    name: "Stephen lane",
    role: (
      <>
        Executive Chairman <br />
        Co-founder
      </>
    ),
  },
  {
    image: <Avatar sx={{ width: "6rem", height: "6rem" }}>B</Avatar>,
    name: "Bruno Botvinik",
    role: "Technical Advisor",
  },
  {
    image: <Avatar sx={{ width: "6rem", height: "6rem" }}>B</Avatar>,
    name: "Amanpreet singh",
    role: "Product Designer",
  },
];

const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <Box marginLeft={"2rem"} marginTop={"2rem"}>
        <Typography color={"#232325"} fontSize={"1.5rem"} lineHeight={"1rem"} marginBottom={"0.25rem"}>
          About Carecove
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
          Boosting Caregivers. <br /> Bridging Gaps.
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
          We help elevate routine activities into meaningful support for caregivers— crucial support for those we
          cherish.
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
              md: "60%", // 960px - 1280px
              lg: "60%", // 1280px - 1920px
              xl: "60%", // 1920px and up
            },
          }}
        >
          <Typography
            fontWeight={700}
            lineHeight={"3.375rem"}
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
            Our Mission
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
            Empower family caregivers through a community, everyday savings, and enduring support.
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} gap={4}>
        <Typography
          fontWeight={700}
          color={"#504E50"}
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "1.875rem",
              md: "1.875rem",
              lg: "1.875rem",
              xl: "1.875rem",
            },
          }}
        >
          Our Values
        </Typography>
        <Box display={"flex"} gap={8} flexWrap={"wrap"} justifyContent={"space-around"} width={"80%"}>
          {OUR_VALUES?.map(({ icon, label, description }) => {
            return (
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                textAlign={"center"}
                key={label}
                marginTop={"1rem"}
                gap={2}
                sx={{
                  width: {
                    xs: "100%", // 0px - 600px
                    sm: "100%", // 600px - 960px
                    md: "40%", // 960px - 1280px
                    lg: "40%", // 1280px - 1920px
                    xl: "40%", // 1920px and up
                  },
                }}
              >
                {icon}
                <Typography
                  fontSize={"1.75rem"}
                  fontWeight={500}
                  color={"#504E50"}
                  sx={{
                    fontSize: {
                      xs: "1.25rem",
                      sm: "1.75rem",
                      md: "1.75rem",
                      lg: "1.75rem",
                      xl: "1.75rem",
                    },
                  }}
                >
                  {label}
                </Typography>
                <Box margin={"1rem auto"} borderBottom={"2px solid #504E50"} width={"20%"}></Box>
                <Typography
                  fontWeight={500}
                  color={"#504E50"}
                  lineHeight={"150%"}
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "1.25rem",
                      md: "1.25rem",
                      lg: "1.25rem",
                      xl: "1.25rem",
                    },
                  }}
                >
                  {description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={8} marginTop={"4rem"}>
        <Typography fontSize={"1.5rem"} fontWeight={700} color={"#232325"}>
          Our team
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} gap={4} flexWrap={"wrap"} width={"100%"}>
          {OUR_TEAM?.map(({ image, name, role }) => {
            return (
              <Box
                key={name}
                gap={2}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  width: {
                    xs: "100%", // 0px - 600px
                    sm: "40%", // 600px - 960px
                    md: "40%", // 960px - 1280px
                    lg: "20%", // 1280px - 1920px
                    xl: "20%", // 1920px and up
                  },
                }}
              >
                <Box
                  textAlign={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                  sx={{
                    width: {
                      xs: "50%", // 0px - 600px
                      sm: "100%", // 600px - 960px
                      md: "100%", // 960px - 1280px
                      lg: "100%", // 1280px - 1920px
                      xl: "100%", // 1920px and up
                    },
                  }}
                >
                  {image}
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1.25rem",
                        lg: "1.25rem",
                        xl: "1.25rem",
                      },
                    }}
                    marginTop={2}
                    marginBottom={0.5}
                    fontWeight={700}
                    color={"#232325"}
                  >
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1.25rem",
                        lg: "1.25rem",
                        xl: "1.25rem",
                      },
                    }}
                  >
                    {role}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <Box
          marginY={2}
          padding={"4rem 0"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                md: "1.25rem",
                lg: "1.25rem",
                xl: "1.25rem",
              },
            }}
            fontWeight={700}
            marginBottom={"1rem"}
            color={"#232325"}
          >
            Join our community today
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#2B3F50",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#1F2D3A", // darker shade of #2B3F50
              },
            }}
          >
            Start earning
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;
