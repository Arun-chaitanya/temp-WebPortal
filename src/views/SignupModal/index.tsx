import Cross from "@icons/boilerplate-icons/Cross";
import CarecoveIcon from "@icons/CarecoveIcon";
import { Box, Button, Divider, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import useAppstore, { StoreState } from "@store/useAppstore";
import RoleStep from "./RoleStep";
import SignupForm from "./SignupForm";
import styles from "./signupmodal.module.scss";
import { STEPS, STEPS_ENUM } from "@config/constants";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignupModal: React.FC = () => {
  const [stepNumber, setStepNumber] = useState(STEPS_ENUM.SIGNUP);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const setSignupModal = useAppstore((state: StoreState) => state.setSignupModal);

  const handleClose = () => {
    setSignupModal(false);
  };

  return (
    <div data-testid="signup-modal">
      <Modal open={true} className={styles.modal}>
        <Box className={styles.modalContainer}>
          <Box className={styles.modalHeader}>
            <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
              <Typography
                sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                fontFamily={"Merriweather"}
                position={"relative"}
              >
                <Box position={"absolute"} top={"-1.25rem"} left={"-0.25rem"} display={"flex"}>
                  <CarecoveIcon width="1.25rem" height="1.25rem" />
                  <Typography fontSize={"0.875rem"} fontWeight={700}>
                    CARECOVE
                  </Typography>
                </Box>
                {STEPS[stepNumber]?.heading}
              </Typography>
              <Box sx={{ borderRight: "2px solid #ffffff", height: "2rem" }}></Box>
              <Typography minWidth={"5rem"}>Step {STEPS[stepNumber]?.step} of 2</Typography>
            </Box>
            <IconButton onClick={handleClose} data-testid="close-modal-button">
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
