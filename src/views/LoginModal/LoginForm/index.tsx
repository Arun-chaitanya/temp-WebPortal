import { FORMSTATE } from "@config/constants";
import Google from "@icons/boilerplate-icons/Google";
import { Box, Button, CircularProgress, Divider, Link, TextField, Typography } from "@mui/material";
import useAppstore, { StoreState } from "@store/useAppstore";
import React, { ChangeEvent, FormEvent, useState } from "react";
import isEmail from "validator/lib/isEmail";
import styles from "../login.module.scss";

const LoginForm = ({ formData, setFormData, setFormState }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const setSignupModal = useAppstore((state: StoreState) => state.setSignupModal);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
    setFormData({ ...formData, password: passwordValue });
    if (passwordValue?.length < 6) {
      setpasswordError("Please enter atleast 6 characters");
    } else {
      setpasswordError("");
    }
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

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const { email, password } = formData;
    if (email && isEmail(email) && password) {
      setIsLoading(true);

      // Simulate an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const isFormValid = () => {
    const { email, password } = formData;

    return email && isEmail(email) && password && !emailError && !passwordError;
  };

  return (
    <form onSubmit={handleLogin}>
      <Box padding={"1rem 1.5rem"} borderBottom={"1px solid #e4e7ec"}>
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
        <Box sx={{ mb: 1 }}>
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
            error={!!passwordError}
            helperText={passwordError}
            required
            fullWidth
          />
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Link
            color={"#367AFF"}
            fontSize={"0.875rem"}
            onClick={() => {
              setFormState(FORMSTATE.FORGOT_PASSWORD);
            }}
          >
            Forgot password?
          </Link>
        </Box>
        <Divider variant="middle" sx={{ color: "#919191" }}>
          OR
        </Divider>
        <Button
          startIcon={<Google fill="#2B3F50" />}
          variant="outlined"
          size="large"
          color="primary"
          fullWidth
          sx={{ mb: 2, mt: 2 }}
        >
          Sign up with Google
        </Button>
        <Box>
          <Typography fontSize={"0.875rem"} textAlign={"center"}>
            Dont have an account?{" "}
            <Link color={"#367AFF"} onClick={() => setSignupModal(true)}>
              Create one?
            </Link>
          </Typography>
        </Box>
      </Box>
      <Box padding={"0rem 1.5rem"} marginTop={"1.5rem"}>
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
    </form>
  );
};

export default LoginForm;
