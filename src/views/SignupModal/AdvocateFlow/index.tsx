import { RELATIONSHIP_ENUMS, RELATIONSHIP_SELECT_OPTIONS, STEPS_ENUM } from "@config/constants";
import { EmailIcon } from "@icons/EmailIcon";
import PhoneIcon from "@icons/PhoneIcon";
import { Box, Button, InputAdornment, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";
import styles from "../signupmodal.module.scss";

const AdvocateFlow = ({ setStepNumber }) => {
  const [advocateFormData, setAdvocateFormData] = useState({
    caregiverName: "",
    caregiverEmail: "",
    caregiverPhone: "",
    caregiverRelation: RELATIONSHIP_ENUMS.PARENT,
    story: "",
  });
  const [emailError, setEmailError] = useState("");

  const handleFormFieldChange = (e: React.ChangeEvent<any>, key: string) => {
    setAdvocateFormData({ ...advocateFormData, [key]: e.target.value });
    if (key === "caregiverEmail") {
      const emailValue = e.target.value;
      if (emailValue && !isEmail(emailValue)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const isFormValid = () => {
    const { caregiverEmail, caregiverName, caregiverPhone } = advocateFormData;
    return caregiverEmail && !emailError && caregiverName && caregiverPhone;
  };

  const onSubmit = () => {
    setStepNumber(STEPS_ENUM.ADD_EXTENSION);
  };

  return (
    <form onSubmit={onSubmit}>
      <Box
        padding={"1.25rem 1.5rem"}
        gap={"1.25rem"}
        display={"flex"}
        flexDirection={"column"}
        borderBottom={"1px solid #e4e7ec"}
      >
        <Typography fontFamily={"Montserrat"} fontSize={"1.125rem"} color={"primary"}>
          Enter information about the caregiver you want to support. We’ll send them an invite to join Carecove and
          start saving together.{" "}
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          sx={{ height: { xs: "40vh", sm: "auto" }, overflowY: "auto" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            sx={{
              width: {
                xs: "100%",
                sm: "47%",
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography gutterBottom fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
                Caregiver Name*
              </Typography>
              <TextField
                className={styles.inputField}
                InputProps={{
                  sx: { height: "44px" },
                }}
                variant="outlined"
                placeholder="Enter your first name"
                value={advocateFormData.caregiverName}
                onChange={(e: React.ChangeEvent<any>) => handleFormFieldChange(e, "caregiverName")}
                required
                fullWidth
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography gutterBottom fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
                Caregiver email*
              </Typography>
              <TextField
                className={styles.inputField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                  sx: { height: "44px" },
                }}
                variant="outlined"
                type="email"
                placeholder="Enter your email"
                value={advocateFormData.caregiverEmail}
                onChange={(e: React.ChangeEvent<any>) => handleFormFieldChange(e, "caregiverEmail")}
                required
                error={!!emailError}
                helperText={emailError}
                fullWidth
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography gutterBottom fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
                Caregiver phone number*
              </Typography>
              <TextField
                className={styles.inputField}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                  sx: { height: "44px" },
                }}
                variant="outlined"
                placeholder="(123) (456)-(7890)"
                value={advocateFormData.caregiverPhone}
                onChange={(e: React.ChangeEvent<any>) => handleFormFieldChange(e, "caregiverPhone")}
                required
                fullWidth
              />
            </Box>
          </Box>
          <Box alignItems={"stretch"} sx={{ borderRight: { xs: "", sm: "1px dotted #A6A6A6" } }}></Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "47%",
              },
            }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box sx={{ mb: 2 }}>
              {" "}
              <Typography gutterBottom width={"13rem"} fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
                Who are they caring for?*
              </Typography>
              <Select
                required
                variant="outlined"
                sx={{
                  height: "44px",
                  width: "100%",
                  padding: "1rem 0px",
                  boxSizing: "border-box",
                }}
                value={advocateFormData.caregiverRelation}
                onChange={(e: SelectChangeEvent<any>) => {
                  setAdvocateFormData({ ...advocateFormData, caregiverRelation: e.target.value });
                }}
              >
                {RELATIONSHIP_SELECT_OPTIONS?.map((item) => (
                  <MenuItem key={item.label} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography gutterBottom fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
                Their story (optional)
              </Typography>
              <TextField
                variant="outlined"
                className={styles.inputField}
                multiline
                fullWidth
                value={advocateFormData.story}
                onChange={(e: React.ChangeEvent<any>) => handleFormFieldChange(e, "story")}
                placeholder="Provide a brief description of the caregiver’s situation. This can be specific challenges they are facing or how additional help can make a difference."
                rows={5} // This sets the number of visible rows
              ></TextField>
            </Box>
          </Box>
        </Box>
      </Box>{" "}
      <Box display={"flex"} gap={"1rem"} marginTop={"1.5rem"} padding={"0 1.5rem"} flexWrap={"wrap"}>
        <Button
          variant="outlined"
          sx={{ width: { xs: "100%", sm: "13rem" } }}
          onClick={() => setStepNumber(STEPS_ENUM.ROLE)}
        >
          Back
        </Button>
        <Button type="submit" variant="contained" sx={{ flexGrow: 1 }} disabled={!isFormValid()}>
          Send Invitation & Continue
        </Button>
      </Box>
    </form>
  );
};

export default AdvocateFlow;
