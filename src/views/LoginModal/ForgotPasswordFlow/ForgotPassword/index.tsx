import { FORMSTATE } from "@config/constants";
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import { isEmail } from "validator";
import styles from "../../login.module.scss";

const ForgotPasswordFlow = ({ setFormState }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    if (emailValue && !isEmail(emailValue)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const isFormValid = () => {
    return email && isEmail(email) && !emailError;
  };

  const onEmailSubmit = () => {
    setFormState(FORMSTATE.FILL_OTP);
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }} borderBottom={"1px solid #e4e7ec"} padding={"1rem 1.5rem"}>
        <Typography gutterBottom fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
          Email
        </Typography>
        <TextField
          className={styles.inputField}
          InputProps={{
            sx: { height: "44px" },
          }}
          variant="outlined"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          required
          error={!!emailError}
          helperText={emailError}
          fullWidth
        />
      </Box>
      <Box marginTop={"1.5rem"} padding={"0rem 1.5rem"}>
        <Button
          disabled={isLoading || !isFormValid()}
          endIcon={isLoading ? <CircularProgress size={24} /> : null}
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          fullWidth
          onClick={onEmailSubmit}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPasswordFlow;
