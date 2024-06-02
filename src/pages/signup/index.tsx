import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress, Typography } from "@mui/material";
import isEmail from "validator/lib/isEmail"; // Import email validator
import Link from "next/link";

const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    if (emailValue && !isEmail(emailValue)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (confirmPassword && event.target.value !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    if (password && event.target.value !== password) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleSignup = () => {
    if (name && email && isEmail(email) && password && password === confirmPassword) {
      setIsLoading(true);

      // Simulate an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const isFormValid =
    name && email && isEmail(email) && password && password === confirmPassword && !emailError && !passwordError;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={4}
        borderRadius={2}
        boxShadow={3}
        width={300}
      >
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          margin="normal"
          required
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
          margin="normal"
          required
          error={!!emailError}
          helperText={emailError}
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          inputProps={{
            autoComplete: "new-password",
          }}
          onChange={handlePasswordChange}
          margin="normal"
          required
          fullWidth
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          margin="normal"
          inputProps={{
            autoComplete: "new-password",
          }}
          required
          error={!!passwordError}
          helperText={passwordError}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignup}
          disabled={isLoading || !isFormValid}
          endIcon={isLoading ? <CircularProgress size={24} /> : null}
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>
        <Box display={"flex"} alignItems={"center"} mt={2}>
          <Typography>Already have an account?</Typography>
          <Link href="/signin">Login</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupForm;
