import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Paper, CircularProgress } from "@mui/material";

import Prompt from "../components/Prompt";

const ChatScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Chat Box Content */}
      <Box
        sx={(theme) => ({
          bgcolor: theme.palette.background.chat,
          borderRadius: "16px",
          boxShadow: 0,
          // border: "2px solid #EAEAEA",
          border: `2px solid ${theme.palette.border.main}`,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto", // Ensure content inside can scroll
        })}
      >
        {/* Question */}
        {/* Chat Bubble for Expand */}
        <Box
          sx={(theme) => ({
            width: 252, // Chat bubble width
            height: 50, // Chat bubble height
            bgcolor: theme.palette.background.input,
            borderRadius: "50px 50px 0px 50px", // Rounded edges
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            ml: "auto", // Align bubble to the right
          })}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              paddingX: 2, // Add padding inside bubble
            }}
            onClick={() => navigate("/chat/edit")} // Navigate to ChatScreen
          >
            If 3x+5=17, what is the value of x?
          </Typography>
        </Box>

        {/* Response */}

        <Paper
          elevation={0}
          sx={{
            padding: 2,
            marginBottom: 1,
            textAlign: "left",
            marginLeft: 0, // Align response to the left
            marginRight: "auto", // Ensure it's left-aligned
            width: 300, // Set bubble width
            bgcolor: "transparent",
            borderRadius: "50px 50px 50px 0px", // Rounded edges with flat left
            wordWrap: "break-word",
          }}
        >
          <Typography
            variant="body1"
            sx={{ mt: 2, fontWeight: "Bold", fontSize: "16px" }}
          >
            To solve the equation 3x+5=17, follow these steps:
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, fontWeight: "light", fontSize: "16px" }}
          >
            1. Subtract 5 from both sides:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 2,
              fontWeight: "light",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            3x = 17 - 5 <br />
            3x = 12
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              fontWeight: "light",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            2. Divide both sides by 3:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              ml: 2,
              fontWeight: "light",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            x = 12/3 <br />x = 4
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            So, the value of x is 4.
          </Typography>
        </Paper>

        {/* Chat Bubble for Expand */}
        <Box
          sx={(theme) => ({
            width: 249, // Chat bubble width
            height: 50, // Chat bubble height
            bgcolor: theme.palette.background.input,
            borderRadius: "50px 50px 0px 50px", // Rounded edges
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            ml: "auto", // Align bubble to the right
          })}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              paddingX: 2, // Add padding inside bubble
            }}
          >
            Expand each step with examples
          </Typography>
        </Box>

        {/* Left Chat Bubble */}

        <Box
          sx={(theme) => ({
            bgcolor: theme.palette.background.chat,
            borderRadius: "50px 50px 50px 0px", // Rounded edges with flat edge on the left
            border: "2px solid #EAEAEA", // Border with white color
            display: "flex",
            alignItems: "center",
            padding: 2,
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            mr: "auto", // Align bubble to the left
          })}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              color="#BABABA"
              sx={{
                textAlign: "center",
                fontSize: "14px",
                paddingX: 2, // Add padding inside bubble
              }}
            >
              Almost there
            </Typography>
            {/* <Box
              component="img"
              src="/assets/Label.png" // Replace with the actual image path
              alt="Almost there"
              sx={{
                width: 24, // Set the width of the image
                height: 24, // Set the height of the image
              }}
            /> */}
            <CircularProgress size={20} color="#EAEAEA" />
          </Box>
        </Box>
      </Box>

      <Prompt />
    </>
  );
};

export default ChatScreen;
