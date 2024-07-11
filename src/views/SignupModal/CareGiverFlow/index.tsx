import { RELATIONSHIP_SELECT_OPTIONS, STEPS_ENUM } from "@config/constants";
import { Box, Button, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "../signupmodal.module.scss";

const CareGiverFlow = ({ infoFormData, setinfoFormData, setStepNumber }) => {
  const handleFormFieldChange = (e: React.ChangeEvent<any>, key: string) => {
    setinfoFormData({ ...infoFormData, [key]: e.target.value });
  };

  const handleSubmit = () => {
    setStepNumber(STEPS_ENUM.ADD_EXTENSION);
  };

  const skipInfo = () => {
    setStepNumber(STEPS_ENUM.ADD_EXTENSION);
  };

  const isFormValid = () => {
    const { careGiverName, careGiverRelation } = infoFormData;

    return careGiverName && careGiverRelation;
  };

  return (
    <div>
      <Box
        padding={"1.25rem 1.5rem"}
        gap={"1.25rem"}
        display={"flex"}
        flexDirection={"column"}
        borderBottom={"1px solid #e4e7ec"}
      >
        <Typography fontFamily={"Montserrat"} fontSize={"1.125rem"} color={"primary"}>
          Help your support network understand your unique caregiving journey!
        </Typography>
        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Box
            display={"flex"}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: {
                xs: "0.5rem",
                sm: "1.25rem",
              },
            }}
          >
            <Typography width={"13rem"} fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
              Who are you caring for?
            </Typography>
            <TextField
              required
              variant="outlined"
              className={styles.inputField}
              value={infoFormData.careGiverName}
              onChange={(e: React.ChangeEvent<any>) => handleFormFieldChange(e, "careGiverName")}
              InputProps={{
                sx: {
                  height: "44px",
                  width: { xs: "100%", sm: "16rem" },
                  padding: "1rem 0px",
                  boxSizing: "border-box",
                },
              }}
              placeholder="Name"
            ></TextField>
          </Box>
          <Box
            display={"flex"}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: {
                xs: "0.5rem",
                sm: "1.25rem",
              },
            }}
          >
            <Typography width={"13rem"} fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
              What is your relationship?
            </Typography>
            <Select
              required
              variant="outlined"
              onChange={(e: SelectChangeEvent<any>) => {
                setinfoFormData({ ...infoFormData, careGiverRelation: e.target.value });
              }}
              sx={{ height: "54px", width: { xs: "100%", sm: "16rem" }, padding: "1rem 0px", boxSizing: "border-box" }}
              value={infoFormData.careGiverRelation}
            >
              {RELATIONSHIP_SELECT_OPTIONS?.map((item) => (
                <MenuItem value={item.value} key={item.label}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box
            display={"flex"}
            sx={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              gap: {
                xs: "0.5rem",
                sm: "1.25rem",
              },
            }}
          >
            <Typography width={"13rem"} fontSize={"0.875rem"} fontWeight={500} color={"#344054"}>
              Your Story
            </Typography>
            <TextField
              variant="outlined"
              className={styles.inputField}
              multiline
              value={infoFormData.story}
              onChange={(e: React.ChangeEvent<any>) => handleFormFieldChange(e, "story")}
              sx={{ flexGrow: 1 }}
              placeholder="Share details about your caregiving role, the person you're caring for, and any specific needs or support you require. This helps your cove understand how they can contribute meaningfully."
              rows={4} // This sets the number of visible rows
            ></TextField>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} gap={"1rem"} marginTop={"1.5rem"} padding={"0 1.5rem"} flexWrap={"wrap"}>
        <Button variant="outlined" sx={{ width: { xs: "100%", sm: "13rem" } }} onClick={skipInfo}>
          Skip
        </Button>
        <Button variant="contained" sx={{ flexGrow: 1 }} onClick={handleSubmit} disabled={!isFormValid()}>
          Continue
        </Button>
      </Box>
    </div>
  );
};

export default CareGiverFlow;
