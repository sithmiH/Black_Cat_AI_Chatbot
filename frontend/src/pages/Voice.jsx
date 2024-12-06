import React, { useState } from "react";
import { Box, Typography, IconButton, CircularProgress } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SendIcon from "@mui/icons-material/SendRounded";
import StopIcon from "@mui/icons-material/StopCircleOutlined";
import { Magicpen, Keyboard, AttachCircle, Microphone2 } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const Voice = () => {
  const navigate = useNavigate();
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      console.log(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <>
      {/* Chat Screen */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #EAEAEA",
          borderRadius: "16px",
          padding: 2,
          overflowY: "auto",
          height: "calc(100vh - 120px)", // Adjust height for the prompt section
          marginBottom: 2,
        }}
      >
        {/* User's Voice Message */}
        <Box
          sx={{
            width: 252, // Chat bubble width
            bgcolor: "#EAEAEA",
            borderRadius: "50px 50px 0px 50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1,
            ml: "auto",
            padding: "10px 16px",
          }}
        >
          <PlayCircleIcon sx={{ fontSize: 24, color: "#000" }} />
          <Box
            sx={{
              display: "flex",
              flex: 1,
              marginX: 2,
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {[...Array(12)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 2,
                  height: Math.random() * 15 + 5,
                  bgcolor: "#000",
                  borderRadius: 1,
                }}
              />
            ))}
          </Box>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{
              textAlign: "right",
              fontSize: 12,
              alignSelf: "flex-end",
            }}
          >
            00:12
          </Typography>
        </Box>

        {/* Chatbot's Voice Message */}
        <Box
          sx={{
            width: 252, // Chat bubble width
            bgcolor: (theme) => theme.palette.background.paper,
            borderRadius: "50px 50px 50px 0px", // Rounded edges
            border: "2px solid #EAEAEA", // Border with white color
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1, // Margin on top for spacing
            mr: "auto", // Align bubble to the left
            padding: "10px 16px",
          }}
        >
          <PlayCircleIcon sx={{ fontSize: 24, color: "#000" }} />
          <Box
            sx={{
              display: "flex",
              flex: 1,
              marginX: 2,
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {[...Array(12)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 2,
                  height: Math.random() * 15 + 5,
                  bgcolor: "#000",
                  borderRadius: 1,
                }}
              />
            ))}
          </Box>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{
              textAlign: "right",
              fontSize: 12,
              alignSelf: "flex-end",
            }}
          >
            00:20
          </Typography>
        </Box>

        {/* Chatbot's Text Message */}
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="body2"
            sx={{
              borderRadius: "16px",
              padding: "10px 16px",
              lineHeight: 1.6,
              textAlign: "left",
            }}
          >
            A Pythagorean triangle refers to a right triangle that follows the
            Pythagorean theorem. This theorem states that in a right triangle,
            the square of the length of the hypotenuse (the side opposite the
            right angle) is equal to the sum of the squares of the lengths of
            the other two sides.
          </Typography>
        </Box>

        {/* Listening Indicator */}
        <Box
          sx={{
            width: 171,
            height: 56,
            bgcolor: "rgba(49, 49, 50, 0.06)",
            borderRadius: "50px 50px 50px 0px",
            border: "2px solid #EAEAEA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 1,
            mr: "auto",
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
            Listening
          </Typography>
          <CircularProgress
            size={20}
            sx={{ marginLeft: 1, color: "#BABABA" }}
          />
        </Box>
      </Box>

      {/* Prompt Section with Extended Voice Wave */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F6F6F6",
          borderRadius: "24px",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <IconButton>
          <StopIcon sx={{ fontSize: 42, color: "#000" }} />
        </IconButton>

        {/* Extended Voice Wave */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[...Array(20)].map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 4,
                height: Math.random() * 30 + 5, // Increased height range for more variation
                bgcolor: "#000",
                borderRadius: 1,
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton onClick={() => navigate("/chat/magicPen")}>
            <Magicpen color="#D4D4D4" />
          </IconButton>
          <IconButton onClick={() => navigate("/chat/keyboard")}>
            <Keyboard color="#D4D4D4" />
          </IconButton>
          <IconButton onClick={() => navigate("/chat/upload")}>
            <AttachCircle color="#D4D4D4" />
          </IconButton>

          {/* Updated Microphone Icon with Black Color */}
          <IconButton sx={{ color: "#000" }}>
            <Microphone2 color="#000" />
          </IconButton>

          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Voice;
