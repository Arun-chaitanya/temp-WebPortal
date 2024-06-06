import CarecoveIcon from "@icons/CarecoveIcon";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      color={"#ffffff"}
      sx={{
        background: "#679749",
      }}
      padding={"0.5rem 1rem"}
    >
      <Box display={"flex"} gap={1} alignItems={"center"}>
        <CarecoveIcon />
        <Typography variant="h4" fontWeight={700}>
          Carecove
        </Typography>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={4}>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>About us</Typography>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>Partner with us</Typography>
        <Button variant="text" color="inherit">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
