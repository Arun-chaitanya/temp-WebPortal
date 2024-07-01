import { STEPS_ENUM } from "@config/constants";
import PlusWhitebg from "@icons/PlusWhitebg";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Banner from "/public/carecoveextension.png";

const TEXTS = [
  "Automatically apply the best coupons at checkout.",
  "Earn cash back on every eligible purchase.",
  "Track your rewards balance in real-time.",
];

const Extension = ({ setStepNumber }) => {
  const handleSkip = () => {
    setStepNumber(STEPS_ENUM.INVITE_OTHERS);
  };

  const handleAddExtension = () => {
    /*Logic to add extension */
  };

  return (
    <div>
      <Box>
        <img src={Banner.src}></img>
      </Box>
      <Box padding={"1rem 1.5rem"} borderBottom={"1px solid #e4e7ec"} display={"flex"} justifyContent={"space-between"}>
        {TEXTS?.map((item: string) => (
          <Typography color={"#475467"} textAlign={"center"} width={"32%"}>
            {item}
          </Typography>
        ))}
      </Box>
      <Box display={"flex"} gap={"1rem"} marginTop={"1.5rem"} padding={"0 1.5rem"} flexWrap={"wrap"}>
        <Button variant="outlined" sx={{ width: { xs: "100%", sm: "13rem" } }} onClick={handleSkip}>
          Skip
        </Button>
        <Button startIcon={<PlusWhitebg />} variant="contained" sx={{ flexGrow: 1 }} onClick={handleAddExtension}>
          Add extension to chrome
        </Button>
      </Box>
    </div>
  );
};

export default Extension;
