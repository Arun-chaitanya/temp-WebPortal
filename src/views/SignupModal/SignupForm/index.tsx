import { STEPS_ENUM } from "@config/constants";
import Google from "@icons/boilerplate-icons/Google";
import { Box, Button, CircularProgress, Divider, TextField, Typography } from "@mui/material";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { isEmail } from "validator";

import styles from "../signupmodal.module.scss";
import signupbanner from "../../../../public/signupbanner.png";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface SignupFormProps {
  setStepNumber: (step: number) => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ setStepNumber, formData, setFormData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setFormData({ ...formData, email: emailValue });
    if (emailValue && !isEmail(emailValue)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
    setFormData({ ...formData, password: passwordValue });
  };

  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const { name, email, password } = formData;
    if (name && email && isEmail(email) && password) {
      setIsLoading(true);

      // Simulate an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
        setStepNumber(STEPS_ENUM.ROLE);
      }, 2000);
    }
  };

  const isFormValid = () => {
    const { name, email, password } = formData;

    return name && email && isEmail(email) && password && !emailError && !passwordError;
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1} component="form" onSubmit={handleSignup} noValidate>
      <Box display={"flex"} borderBottom={"1px solid #e4e7ec"}>
        <Box
          sx={{
            background: "#A62152",
            width: {
              xs: "0%",
              sm: "40%",
            },
          }}
        >
          <img src={signupbanner.src} alt="caregiver helping client" width={"100%"} height={"100%"} />
        </Box>
        <Box flexGrow={1} padding={"1rem"}>
          <Button
            startIcon={<Google />}
            variant="contained"
            size="large"
            color="primary"
            fullWidth
            sx={{ mb: 2, mt: 2 }}
          >
            Sign up with Google
          </Button>
          <Divider variant="middle" sx={{ color: "#919191" }}>
            OR
          </Divider>
          <Box>
            <Box sx={{ mb: 2 }}>
              <Typography gutterBottom fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
                Name*
              </Typography>
              <TextField
                className={styles.inputField}
                InputProps={{
                  sx: { height: "44px" },
                }}
                variant="outlined"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleNameChange}
                required
                fullWidth
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography gutterBottom fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
                Email*
              </Typography>
              <TextField
                className={styles.inputField}
                InputProps={{
                  sx: { height: "44px" },
                }}
                variant="outlined"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleEmailChange}
                required
                error={!!emailError}
                helperText={emailError}
                fullWidth
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography gutterBottom fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
                Password*
              </Typography>
              <TextField
                className={styles.inputField}
                InputProps={{
                  sx: { height: "44px" },
                }}
                variant="outlined"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                inputProps={{
                  autoComplete: "new-password",
                }}
                onChange={handlePasswordChange}
                required
                fullWidth
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box padding={"0rem 2rem"} marginTop={"1rem"}>
        <Button
          disabled={isLoading || !isFormValid()}
          endIcon={isLoading ? <CircularProgress size={24} /> : null}
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          fullWidth
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default SignupForm;
