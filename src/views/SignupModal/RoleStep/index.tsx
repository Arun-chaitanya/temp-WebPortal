import AdvocateIcon from "@icons/AdvocateIcon";
import CareGiverIcon from "@icons/CareGiverIcon";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { STEPS_ENUM } from "..";
import styles from "../signupmodal.module.scss";

enum ROLES_ENUM {
  CAREGIVER,
  ADVOCATE,
}
const ROLES = {
  [ROLES_ENUM.CAREGIVER]: {
    icon: <CareGiverIcon />,
    heading: "I am a caregiver",
    description: "and am looking for support.",
  },
  [ROLES_ENUM.ADVOCATE]: {
    icon: <AdvocateIcon />,
    heading: "I am an advocate",
    description: "and want to support a caregiver.",
  },
};

const RoleStep = ({ setStepNumber }) => {
  const [selectedRole, setSelectedRole] = useState<string>();

  const handleSelectRole = (role: string) => {
    if (role === selectedRole) return setSelectedRole("");
    setSelectedRole(role);
  };

  return (
    <>
      <Box padding={"1.5rem"} borderBottom={"1px solid #e4e7ec"}>
        <Typography fontSize={"1.125rem"} fontWeight={700} fontFamily={"Merriweather"}>
          Who are you?
        </Typography>
        <Box className={styles.roleCardContainer}>
          {Object.entries(ROLES)?.map(([key, value]) => (
            <div
              key={key}
              className={`${styles.roleCard} ${selectedRole === key ? styles.selectedRoleCard : ""}`}
              onClick={() => handleSelectRole(key)}
            >
              {value.icon}
              <Box>
                <Typography fontSize={"1.5rem"} fontWeight={600}>
                  {value.heading}
                </Typography>
                <Typography fontSize={"0.75rem"} color={selectedRole === key ? "ffffff" : "#727272"} fontWeight={600}>
                  {value.description}
                </Typography>
              </Box>
            </div>
          ))}
        </Box>
      </Box>{" "}
      <Box display={"flex"} gap={"1rem"} marginTop={"1rem"} padding={"0 1.5rem"}>
        <Button variant="outlined" sx={{ width: "209px" }} onClick={() => setStepNumber(STEPS_ENUM.SIGNUP)}>
          Back
        </Button>
        <Button variant="contained" sx={{ flexGrow: 1 }} disabled={!selectedRole}>
          Confirm
        </Button>
      </Box>
    </>
  );
};

export default RoleStep;
