import React from "react";
import { Box, Typography, IconButton, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import MagicPenimage from "../assets/MagicPenimage.png";

export const MagicPen = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          bgcolor: theme.palette.background.chat,
          border: `2px solid ${theme.palette.border.main}`,
          borderRadius: "16px",
          boxShadow: 0,
          padding: 3,
          marginBottom: 3,
          display: "flex",
          //   height: 100,
          flexDirection: "column",
          overflowY: "auto", // Ensure content inside can scroll
          // backgroundColor: "yellow",
        })}
      >
        <Box
          sx={{
            bgcolor: (theme) => theme.palette.background.chat,
            borderRadius: "50px 50px 50px 0px",
            border: "2px solid #EAEAEA", // Border with white color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
            mt: 1, // Margin on top for spacing
            mr: "auto", // Align bubble to the left
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#BABABA",
              paddingX: 2,
            }}
          >
            Analyzing Equation
          </Typography>
          <CircularProgress size={20} color="#EAEAEA" />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
          borderRadius: "12px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          marginBottom: "100px",
          bgcolor: (theme) => theme.palette.background.chat,
          //   backgroundColor: "green",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%", // Full width for spacing adjustment
            marginBottom: 0,
            // backgroundColor: "blue",
          }}
        >
          <IconButton>
            <AutoFixHighIcon />
          </IconButton>
          <IconButton>
            <SendIcon />
          </IconButton>
        </Box>

        <Divider sx={{ width: "auto", marginY: 1, marginX: 2 }} />
        <Box
          sx={{
            bgcolor: (theme) => theme.palette.background.default,
            width: "90%",
            borderRadius: "8px",
            margin: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: (theme) => theme.palette.background.default,
              backgroundImage: `url(${MagicPenimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
              display: "flex",
              //   justifyContent: "flex-start",
              alignItems: "center",
              //   position: "relative",
              height: 250, // Set a height for the image box
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};
