import React, { useState } from "react";
import { Box, Button, Divider, IconButton, Modal, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import styles from "./login.module.scss";
import Cross from "@icons/boilerplate-icons/Cross";
import CarecoveIcon from "@icons/CarecoveIcon";
import useAppstore, { StoreState } from "@store/useAppstore";
import ForgotPasswordFlow from "./ForgotPasswordFlow/ForgotPassword";
import { FORMSTATE, FORMSTATE_DATA } from "@config/constants";
import FillOtp from "./ForgotPasswordFlow/FillOtp";
import SetNewPassword from "./ForgotPasswordFlow/SetNewPassword";

interface FormData {
  email: string;
  password: string;
}

const LoginModal = () => {
  /*Formdata for user login */
  const [formState, setFormState] = useState<number>(FORMSTATE.LOGIN);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const setLoginModal = useAppstore((state: StoreState) => state.setLoginModal);

  const handleClose = () => {
    setLoginModal(false);
  };

  return (
    <div>
      <Modal open={true} className={styles.loginModal}>
        <Box className={styles.loginmodalContainer}>
          <Box className={styles.loginmodalHeader}>
            <Box>
              <Typography
                sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
                fontFamily={"Montserrat"}
                position={"relative"}
                textTransform={"uppercase"}
              >
                {FORMSTATE_DATA[formState]?.showCareCoveIcon && (
                  <Box position={"absolute"} top={"-1.25rem"} left={"-0.25rem"} display={"flex"}>
                    <CarecoveIcon width="1.25rem" height="1.25rem" />
                    <Typography fontSize={"0.875rem"} fontWeight={700}>
                      CARECOVE
                    </Typography>
                  </Box>
                )}
                {FORMSTATE_DATA[formState]?.value}
              </Typography>
              <Typography fontWeight={500} sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
                {FORMSTATE_DATA[formState]?.label}
              </Typography>
            </Box>
            <IconButton onClick={handleClose} data-testid="close-modal-button">
              <Cross stroke="#ffffff" />
            </IconButton>
          </Box>
          {formState === FORMSTATE.LOGIN && (
            <LoginForm formData={formData} setFormData={setFormData} setFormState={setFormState} />
          )}
          {formState === FORMSTATE.FORGOT_PASSWORD && <ForgotPasswordFlow setFormState={setFormState} />}
          {formState === FORMSTATE.FILL_OTP && <FillOtp setFormState={setFormState} />}
          {formState === FORMSTATE.SET_NEW_PASSWORD && <SetNewPassword setFormState={setFormState} />}
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
