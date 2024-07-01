import useCopyToClipBoard from "@hooks/useCopyToClipBoard";
import EmailIcon from "@icons/ShareIcons/EmailIcon";
import Facebook from "@icons/ShareIcons/Facebook";
import Instragram from "@icons/ShareIcons/Instragram";
import More from "@icons/ShareIcons/More";
import Twitter from "@icons/ShareIcons/Twitter";
import Whatsapp from "@icons/ShareIcons/Whatsapp";
import { Box, Button, TextField, Typography } from "@mui/material";
import { copyToClipboard } from "@utils/analytics";
import { shareUrl } from "@utils/index";
import React from "react";
import styles from "../signupmodal.module.scss";

const SHARE_VIA = [
  {
    label: "Whatsapp",
    icon: <Whatsapp />,
  },
  {
    label: "X",
    icon: <Twitter />,
  },
  {
    label: "E-mail",
    icon: <EmailIcon />,
  },
  {
    label: "Instagram",
    icon: <Instragram />,
  },
  {
    label: "Facebook",
    icon: <Facebook />,
  },
  {
    label: "More",
    icon: <More />,
  },
];

const InviteOthers = ({ setStepNumber }) => {
  const SHAREABLE_LINK = "https://www.carecove.com/cove/NlfVhYygRfe/";

  const { copy, isCopied } = useCopyToClipBoard();
  const handleClick = (type: string) => {
    shareUrl(type, SHAREABLE_LINK);
  };

  return (
    <div>
      <Box
        padding={"1.25rem 1.5rem 2rem 1.5rem"}
        gap={"1.25rem"}
        display={"flex"}
        flexDirection={"column"}
        borderBottom={"1px solid #e4e7ec"}
      >
        <Typography fontSize={"1.25rem"} fontWeight={600}>
          Share your story and invite others to contribute to your savings!{" "}
        </Typography>

        <Box display={"flex"} flexDirection={"column"} gap={"2rem"}>
          <div>
            <Typography gutterBottom fontSize={"0.75rem"} fontWeight={600} color={"#2B3F50"}>
              Share using custom link
            </Typography>
            <TextField
              variant="outlined"
              disabled
              value={SHAREABLE_LINK}
              fullWidth
              InputProps={{
                endAdornment: (
                  <Button
                    disableElevation
                    sx={{ height: "44px", width: "200px" }}
                    variant="contained"
                    onClick={() => copy(SHAREABLE_LINK)}
                  >
                    {isCopied ? "Copied" : "Copy link"}
                  </Button>
                ),
                sx: {
                  height: "44px",
                  width: "100%",
                  padding: "1rem 0px",
                  boxSizing: "border-box",
                  background: "rgba(208, 208, 208, 0.20)",
                },
              }}
            ></TextField>
          </div>
          <div>
            <Typography gutterBottom fontSize={"0.75rem"} fontWeight={600} color={"#2B3F50"}>
              Share link via
            </Typography>
            <Box display={"flex"} gap={"1.75rem"}>
              {SHARE_VIA?.map((item) => (
                <div style={{ textAlign: "center" }} onClick={() => handleClick(item.label)}>
                  <div className={styles.shareButton}>{item.icon}</div>
                  <Typography fontSize={"0.75rem"} color={"#3D5A80"}>
                    {item.label}
                  </Typography>
                </div>
              ))}
            </Box>
          </div>
        </Box>
      </Box>
      <Box display={"flex"} gap={"1rem"} marginTop={"1.5rem"} padding={"0 1.5rem"} flexWrap={"wrap"}>
        <Button variant="outlined" sx={{ width: { xs: "100%", sm: "13rem" } }}>
          Skip
        </Button>
        <Button variant="contained" sx={{ flexGrow: 1 }}>
          Confirm
        </Button>
      </Box>
    </div>
  );
};

export default InviteOthers;
