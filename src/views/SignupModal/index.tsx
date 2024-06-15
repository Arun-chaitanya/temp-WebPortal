import Cross from "@icons/boilerplate-icons/Cross";
import CarecoveIcon from "@icons/CarecoveIcon";
import { Box, Button, Divider, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import useAppstore, { StoreState } from "src/store/useAppstore";
import RoleStep from "./RoleStep";
import SignupForm from "./SignupForm";
import styles from "./signupmodal.module.scss";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export enum STEPS_ENUM {
  SIGNUP = 1,
  ROLE,
}

export const STEPS = {
  [STEPS_ENUM.SIGNUP]: {
    heading: "CREATE YOUR ACCOUNT",
    step: 1,
  },
  [STEPS_ENUM.ROLE]: {
    heading: "SELECT YOUR ROLE",
    step: 2,
  },
};

const SignupModal = () => {
  const [stepNumber, setStepNumber] = useState(STEPS_ENUM.SIGNUP);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const setSignupModal = useAppstore((state: StoreState) => state.setSignupModal);

  const handleClose = () => {
    setSignupModal(false);
  };

  return (
    <div>
      <Modal open={true} className={styles.modal}>
        <Box className={styles.modalContainer}>
          <Box className={styles.modalHeader}>
            <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
              <Typography fontSize={"1.5rem"} fontFamily={"Merriweather"} position={"relative"}>
                <Box position={"absolute"} top={"-1.25rem"} left={"-0.25rem"} display={"flex"}>
                  <CarecoveIcon width="1.25rem" height="1.25rem" />
                  <Typography fontSize={"0.875rem"} fontWeight={700}>
                    CARECOVE
                  </Typography>
                </Box>
                {STEPS[stepNumber]?.heading}
              </Typography>
              <Box sx={{ borderRight: "2px solid #ffffff", height: "2rem" }}></Box>
              <Typography>Step {STEPS[stepNumber]?.step} of 2</Typography>
            </Box>
            <IconButton onClick={handleClose}>
              <Cross stroke="#ffffff" />
            </IconButton>
          </Box>
          {stepNumber === STEPS_ENUM.SIGNUP && (
            <SignupForm formData={formData} setFormData={setFormData} setStepNumber={setStepNumber} />
          )}
          {stepNumber === STEPS_ENUM.ROLE && <RoleStep setStepNumber={setStepNumber} />}
        </Box>
      </Modal>
    </div>
  );
};

export default SignupModal;
