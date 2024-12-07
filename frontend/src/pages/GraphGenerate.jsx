import React from "react";

import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import Prompt from "../components/Prompt";
import Graph1 from "../assets/Graph1.png";

const ChatScreen = () => {
  return (
    <>
      {/* Chat Box Content */}
      <Box
        sx={(theme) => ({
          bgcolor: theme.palette.background.chat,
          borderRadius: "16px",
          boxShadow: 0,
          border: `2px solid ${theme.palette.border.main}`,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        })}
      >
        {/* Question */}
        {/* Chat Bubble for Expand */}
        <Box
          sx={{
            width: "100%", // Use full width of the parent container
            maxWidth: 700, // Set a maximum width for the chat bubble
            height: "auto", // Adjust height based on content
            bgcolor: (theme) => theme.palette.background.chatBubble,
            borderRadius: "25px", // Rounded edges for a smoother look
            display: "flex",
            flexDirection: "column", // Align text vertically
            justifyContent: "center",
            alignItems: "center",
            mt: 2, // Margin on top for spacing
            ml: "auto", // Align bubble to the right
            p: 2, // Padding inside the bubble
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "16px", // Slightly larger text for readability
              lineHeight: 1.4, // Add some line spacing for readability
            }}
          >
            The temperature throughout a day was recorded at different times:
            <br />
            40°F at 5 a.m., 45°F at 8 a.m., 50°F at 11 a.m., 50°F at 2 p.m.,
            40°F at 5 p.m., and 40°F at 8 p.m. Plot these temperatures on a line
            graph to show how the temperature changed over time.
          </Typography>
        </Box>

        {/* Response */}

        <Paper
          elevation={0}
          sx={{
            padding: 2,
            marginBottom: 1,
            textAlign: "center", // Center align for image
            marginLeft: 0,
            marginRight: "auto",
            width: 300, // Adjust width for image
            bgcolor: "transparent", // Background color
            borderRadius: "50px 50px 50px 0px", // Rounded edges
          }}
        >
          <img
            src={Graph1}
            alt="Graph showing temperature change"
            // style={{
            //   width: "100%", // Ensure the image fills the container
            //   borderRadius: "15px", // Optional: rounded corners for the image
            // }}
          />
        </Paper>

        {/* Chat Bubble for Expand */}
        <Box
          sx={{
            width: 249, // Chat bubble width
            height: 50, // Chat bubble height
            bgcolor: (theme) => theme.palette.background.chatBubble,
            borderRadius: "50px 50px 0px 50px", // Rounded edges
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
              paddingX: 2, // Add padding inside bubble
            }}
          >
            Expand each step with examples
          </Typography>
        </Box>

        {/* Left Chat Bubble */}

        <Box
          sx={{
            bgcolor: (theme) => theme.palette.background.chat,
            borderRadius: "50px 50px 50px 0px", // Rounded edges with flat edge on the left
            border: "2px solid #EAEAEA", // Border with white color
            display: "flex",
            alignItems: "center",
            padding: 2,
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            mr: "auto", // Align bubble to the left
          }}
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
              sx={{
                textAlign: "center",
                fontSize: "14px",
                color: "#EAEAEA", // Black text color
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
