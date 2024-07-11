import { ROLES, ROLES_ENUM, STEPS_ENUM } from "@config/constants";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from "../signupmodal.module.scss";

interface RoleStepProps {
  setStepNumber: React.Dispatch<React.SetStateAction<STEPS_ENUM>>;
  setSelectedRole: React.Dispatch<React.SetStateAction<string>>;
  selectedRole: string;
}

const RoleStep: React.FC<RoleStepProps> = ({ setStepNumber, setSelectedRole, selectedRole }) => {
  const handleSelectRole = (role: string) => {
    if (role === selectedRole) return setSelectedRole("");
    setSelectedRole(role);
  };

  return (
    <>
      <Box padding={"1.5rem"} borderBottom={"1px solid #e4e7ec"}>
        <Typography fontSize={"1.125rem"} fontWeight={700} fontFamily={"Montserrat"}>
          Who are you?
        </Typography>
        <Box className={styles.roleCardContainer}>
          {Object.entries(ROLES)?.map(([key, value]) => (
            <div
              key={key}
              className={`${styles.roleCard} ${selectedRole === key ? styles.selectedRoleCard : ""}`}
              onClick={() => handleSelectRole(key)} // Cast key to the enum type
            >
              {value.icon}
              <Box>
                <Typography fontSize={"1.5rem"} fontWeight={600}>
                  {value.heading}
                </Typography>
                <Typography
                  fontSize={"0.75rem"}
                  color={selectedRole === key ? "ffffff" : "#727272"}
                  fontWeight={600}
                  lineHeight={"150%"}
                >
                  {value.description}
                </Typography>
              </Box>
            </div>
          ))}
        </Box>
      </Box>{" "}
      <Box display={"flex"} gap={"1rem"} marginTop={"1.5rem"} padding={"0 1.5rem"} flexWrap={"wrap"}>
        <Button
          variant="outlined"
          sx={{ width: { xs: "100%", sm: "13rem" } }}
          onClick={() => setStepNumber(STEPS_ENUM.SIGNUP)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          sx={{ flexGrow: 1 }}
          disabled={!selectedRole}
          onClick={() => setStepNumber(STEPS_ENUM.INFO)}
        >
          Continue
        </Button>
      </Box>
    </>
  );
};

export default RoleStep;
