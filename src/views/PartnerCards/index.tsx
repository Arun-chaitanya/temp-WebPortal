import { Box, Button, Typography } from "@mui/material";
import { mailToCarecove } from "@utils/index";
import React from "react";

const PartnerCards = ({ icon, description, benefits, title }) => {
  return (
    <Box
      sx={{
        width: {
          xs: "20rem",
          sm: "26rem",
        },
      }}
      border={"3px solid #A62152"}
      borderRadius={"1.25rem"}
      textAlign={"center"}
      padding={"2rem"}
      marginTop={"2rem"}
    >
      <Box height={93} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        {icon}
      </Box>
      <Typography
        marginTop={"2rem"}
        fontWeight={700}
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.5rem",
            md: "1.5rem",
            lg: "1.5rem",
            xl: "1.5rem",
          },
        }}
        fontFamily={"Montserrat"}
        color={"#504E50"}
      >
        {title}
      </Typography>
      <Box
        sx={{
          margin: "1rem auto",
        }}
        borderBottom={"2px solid #2B3F50"}
        width={"20%"}
      ></Box>
      <Typography
        lineHeight={"150%"}
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.5rem",
          },
          height: {
            xs: "8rem",
            sm: "14rem",
          },
        }}
        color={"#504E50"}
      >
        {description}
      </Typography>
      <Button
        size="large"
        variant="contained"
        sx={{
          background: "#2B3F50",
          color: "#ffffff",
          marginBottom: "3rem",
          "&:hover": {
            backgroundColor: "#1F2D3A", // darker shade of #2B3F50
          },
        }}
        onClick={mailToCarecove}
      >
        Learn more
      </Button>
      <Box display={"flex"} flexDirection={"column"} gap={"1.5rem"}>
        <Typography
          fontWeight={700}
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
          fontFamily={"Montserrat"}
        >
          Partner benefits
        </Typography>
        {benefits?.map((benefit: string) => {
          return (
            <Box key={benefit}>
              <Typography
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
                color={"#504E50"}
              >
                {benefit}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default PartnerCards;
