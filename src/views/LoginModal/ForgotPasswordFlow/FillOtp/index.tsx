import { FORMSTATE } from "@config/constants";
import { Box, Button, CircularProgress, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../login.module.scss";

const FillOtp = ({ setFormState }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState(["", "", "", "", ""]);
  const ref = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    for (let i = 0; i < inputValues.length; i++) {
      const element = document.getElementById("otp_box" + i);
      ref.current.push(element);
    }
    return () => {
      ref.current = [];
    };
  }, [inputValues.length]);

  const handleInputChange = (e: React.ChangeEvent<any>, index: number) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }

    if (parseInt(value) >= 10) return;
    const updatedValues = [...inputValues];

    updatedValues[index] = value;
    setInputValues(updatedValues);
    if (index + 1 < inputValues.length && parseInt(value) >= 0) {
      //@ts-ignore
      ref.current[index + 1].focus();
    }
  };

  const isFormValid = () => {
    return inputValues?.every((item) => !!item);
  };

  const onSubmit = () => {
    setFormState(FORMSTATE.SET_NEW_PASSWORD);
  };

  return (
    <form onSubmit={onSubmit}>
      {" "}
      <Box
        sx={{ mb: 2 }}
        borderBottom={"1px solid #e4e7ec"}
        padding={"2rem 1.5rem 0.5rem 1.5rem"}
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
      >
        <Box display={"flex"} gap={"2rem"} justifyContent={"center"}>
          {inputValues?.map((item, index) => {
            return (
              <TextField
                value={item}
                className={styles.inputField}
                InputProps={{
                  sx: { height: "44px", width: "44px", borderRadius: "0.5rem" },
                }}
                onChange={(e) => handleInputChange(e, index)}
                key={"otp_box" + index}
                id={"otp_box" + index}
              ></TextField>
            );
          })}
        </Box>
        <Box>
          <Typography fontSize={"0.875rem"} textAlign={"center"}>
            {"Didn't"} receive an email? <Link color={"#367AFF"}>Resend email?</Link>
          </Typography>
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
          Verify code
        </Button>
      </Box>
    </form>
  );
};

export default FillOtp;
