import React from "react";

import { Box, Typography, Paper } from "@mui/material";

import Prompt from "../components/Prompt";

const ChatScreen = () => {
  return (
    <>
      {/* Chat Box Content */}
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "16px",
          boxShadow: 0,
          border: "2px solid #EAEAEA",
          padding: 3,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto", // Ensure content inside can scroll
        }}
      >
        {/* Question */}
        {/* Chat Bubble for Expand */}
        <Box
          sx={{
            bgcolor: "#EAEAEA", // Background color
            borderRadius: "50px 50px 0px 50px", // Rounded edges
            border: "2px solid #FFFFFF", // Border with white color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            ml: "auto", // Align bubble to the right
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#000", // Black text color
              paddingX: 2, // Add padding inside bubble
            }}
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
            wordWrap: "break-word",
          }}
        >
          <Typography
            variant="body1"
            sx={{ mt: 2, fontWeight: "medium", fontSize: "16px" }}
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
            sx={{ ml: 2, fontWeight: "light", fontSize: "16px" }}
          >
            3x = 17 - 5 <br />
            3x = 12
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, fontWeight: "light", fontSize: "16px" }}
          >
            2. Divide both sides by 3:
          </Typography>
          <Typography
            variant="body2"
            sx={{ ml: 2, fontWeight: "light", fontSize: "16px" }}
          >
            x = 12/3 <br />x = 4
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, fontWeight: "medium", fontSize: "16px" }}
          >
            So, the value of x is 4.
          </Typography>
        </Paper>

        {/* Chat Bubble for Expand */}
        <Box
          sx={{
            bgcolor: "#EAEAEA", // Background color
            borderRadius: "50px 50px 0px 50px", // Rounded edges
            border: "2px solid #FFFFFF", // Border with white color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            ml: "auto", // Align bubble to the right
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#000", // Black text color
              paddingX: 2, // Add padding inside bubble
            }}
          >
            Expand each step with examples
          </Typography>
        </Box>

        {/* Left Chat Bubble */}
        <Box
          sx={{
            bgcolor: "#FFFFFF", // Background color
            borderRadius: "50px 50px 50px 0px", // Rounded edges with flat edge on the left
            border: "2px solid #EAEAEA", // Border with white color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            mr: "auto", // Align bubble to the left
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#BABABA", // Black text color
              paddingX: 2, // Add padding inside bubble
            }}
          >
            Almost there
          </Typography>
        </Box>

        {/* Chat Bubble for Expand */}
        <Box
          sx={{
            width: 252, // Chat bubble width
            height: 50, // Chat bubble height
            bgcolor: "#EAEAEA", // Background color
            borderRadius: "50px 50px 0px 50px", // Rounded edges
            border: "2px solid #FFFFFF", // Border with white color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            ml: "auto", // Align bubble to the right
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#000", // Black text color
              paddingX: 2, // Add padding inside bubble
            }}
          >
            Expand each step with examples
          </Typography>
        </Box>

        {/* Left Chat Bubble */}
        <Box
          sx={{
            width: 171, // Chat bubble width
            height: 56, // Chat bubble height
            bgcolor: "#FFFFFF", // Background color
            borderRadius: "50px 50px 50px 0px", // Rounded edges with flat edge on the left
            border: "2px solid #EAEAEA", // Border with white color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            mr: "auto", // Align bubble to the left
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#BABABA", // Black text color
              paddingX: 2, // Add padding inside bubble
            }}
          >
            Almost there
          </Typography>
        </Box>
      </Box>

      <Prompt />
    </>
  );
};

export default ChatScreen;
