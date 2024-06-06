import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress, Typography, Link } from "@mui/material";
import isEmail from "validator/lib/isEmail"; // Import email validator

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    if (emailValue && !isEmail(emailValue)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleLogin = () => {
    if (password && email && isEmail(email)) {
      setIsLoading(true);

      // Simulate an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isFormValid = password && email && isEmail(email) && !emailError;

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
          Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          autoComplete={"off"}
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
          autoComplete={"off"}
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
          required
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          disabled={isLoading || !isFormValid}
          endIcon={isLoading ? <CircularProgress size={24} /> : null}
          sx={{ mt: 2 }}
        >
          Login
        </Button>

        <Box display={"flex"} alignItems={"center"} mt={2}>
          <Typography>Dont have an account?</Typography>
          <Link href="/signup">Sign up</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
