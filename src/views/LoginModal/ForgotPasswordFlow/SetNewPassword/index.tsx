import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "../../login.module.scss";

const SetNewPassword = ({ setFormState }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpasswordError, setConfirmpasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<any>) => {
    setPassword(e.target.value);
    if (e.target.value?.length < 6) setPasswordError("Password must be atleast 6 characters");
    else setPasswordError("");
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<any>) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setConfirmpasswordError("Password do not matches");
    } else {
      setConfirmpasswordError("");
    }
  };

  const isFormValid = () => {
    return password === confirmPassword && password?.length >= 6;
  };
  return (
    <div>
      <Box sx={{ mb: 2 }} borderBottom={"1px solid #e4e7ec"} padding={"1rem 1.5rem"}>
        <Box sx={{ mb: 2 }}>
          <Typography gutterBottom fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
            Password
          </Typography>
          <TextField
            className={styles.inputField}
            InputProps={{
              sx: { height: "44px" },
            }}
            variant="outlined"
            type="password"
            placeholder="Enter your new password"
            value={password}
            onChange={handlePasswordChange}
            required
            error={!!passwordError}
            helperText={passwordError}
            fullWidth
          />
        </Box>
        <Box>
          <Typography gutterBottom fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
            Confirm password
          </Typography>
          <TextField
            className={styles.inputField}
            InputProps={{
              sx: { height: "44px" },
            }}
            variant="outlined"
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            error={!!confirmpasswordError}
            helperText={confirmpasswordError}
            fullWidth
          />
        </Box>
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
        >
          Update password
        </Button>
      </Box>
    </div>
  );
};

export default SetNewPassword;
