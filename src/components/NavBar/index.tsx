import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      <Typography>Carecove</Typography>
      <Box display={"flex"} alignItems={"center"} gap={4}>
        <Typography>About us</Typography>
        <Typography>Partner with us</Typography>
        <Button variant="text">Login</Button>
      </Box>
    </Box>
  );
};

export default Navbar;
