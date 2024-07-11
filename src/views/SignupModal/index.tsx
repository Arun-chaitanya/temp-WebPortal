import Cross from "@icons/boilerplate-icons/Cross";
import CarecoveIcon from "@icons/CarecoveIcon";
import { Box, Button, Divider, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import useAppstore, { StoreState } from "@store/useAppstore";
import RoleStep from "./RoleStep";
import SignupForm from "./SignupForm";
import styles from "./signupmodal.module.scss";
import { RELATIONSHIP_ENUMS, ROLES_ENUM, STEPS, STEPS_ENUM } from "@config/constants";
import CareGiverFlow from "./CareGiverFlow";
import AdvocateFlow from "./AdvocateFlow";
import Extension from "./ExtensionStep";
import InviteOthers from "./InviteOthersStep";
import useUserSignup from "@api/auth";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface InfoFormData {
  careGiverName: string;
  careGiverRelation: number | null;
  story: string;
}

const SignupModal: React.FC = () => {
  const [stepNumber, setStepNumber] = useState(STEPS_ENUM.SIGNUP);

  /*Formdata for user login */
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  /*infomation about the caregiver */
  const [infoFormData, setinfoFormData] = useState<InfoFormData>({
    careGiverName: "",
    careGiverRelation: RELATIONSHIP_ENUMS.CHILD,
    story: "",
  });

  // const { mutate: userSignup } = useUserSignup();

  /*Handle signup submit */
  // const handleSignup = () => {
  //   const payload = {
  //     email: formData.email,
  //     first_name: formData.firstName,
  //     last_name: formData.lastName,
  //     role: "SUPPORTER",
  //     password: "stringst",
  //   };
  //   userSignup(payload);
  // };

  const [selectedRole, setSelectedRole] = useState<string>(""); // Use undefined for optional selection

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
                fontFamily={"Montserrat"}
                position={"relative"}
                textTransform={"uppercase"}
              >
                <Box position={"absolute"} top={"-1.25rem"} left={"-0.25rem"} display={"flex"}>
                  <CarecoveIcon width="1.25rem" height="1.25rem" />
                  <Typography fontSize={"0.875rem"} fontWeight={700}>
                    CARECOVE
                  </Typography>
                </Box>
                {stepNumber !== STEPS_ENUM.INFO && STEPS[stepNumber]?.heading}
                {stepNumber === STEPS_ENUM.INFO && STEPS[stepNumber]?.heading[parseInt(selectedRole) - 1]}
              </Typography>
              {stepNumber < STEPS_ENUM.ADD_EXTENSION && (
                <>
                  <Box sx={{ borderRight: "2px solid #ffffff", height: "2rem" }}></Box>
                  <Typography minWidth={"5rem"}>Step {STEPS[stepNumber]?.step} of 3</Typography>
                </>
              )}
            </Box>
            <IconButton onClick={handleClose} data-testid="close-modal-button">
              <Cross stroke="#ffffff" />
            </IconButton>
          </Box>

          {stepNumber === STEPS_ENUM.SIGNUP && (
            <SignupForm formData={formData} setFormData={setFormData} setStepNumber={setStepNumber} />
          )}
          {stepNumber === STEPS_ENUM.ROLE && (
            <RoleStep setStepNumber={setStepNumber} selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
          )}
          {stepNumber === STEPS_ENUM.INFO && parseInt(selectedRole) === ROLES_ENUM.CAREGIVER && (
            <CareGiverFlow
              infoFormData={infoFormData}
              setinfoFormData={setinfoFormData}
              setStepNumber={setStepNumber}
            />
          )}
          {stepNumber === STEPS_ENUM.INFO && parseInt(selectedRole) === ROLES_ENUM.ADVOCATE && (
            <AdvocateFlow setStepNumber={setStepNumber} />
          )}
          {stepNumber === STEPS_ENUM.ADD_EXTENSION && <Extension setStepNumber={setStepNumber} />}
          {stepNumber === STEPS_ENUM.INVITE_OTHERS && <InviteOthers setStepNumber={setStepNumber} />}
        </Box>
      </Modal>
    </div>
  );
};

export default SignupModal;
