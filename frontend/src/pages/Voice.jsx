import React, { useState } from "react";
import { Box, Typography, IconButton, CircularProgress } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SendIcon from "@mui/icons-material/SendRounded";
import StopIcon from "@mui/icons-material/StopCircleOutlined";
import { Magicpen, Keyboard, AttachCircle, Microphone2 } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../contexts/themeContext";

const Voice = () => {
  const navigate = useNavigate();
  const { mode } = useThemeContext();
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
        sx={(theme) => ({
          bgcolor: theme.palette.background.chat,
          border: `2px solid ${theme.palette.border.main}`,
          borderRadius: "16px",
          padding: 2,
          overflowY: "auto",
          height: "calc(100vh - 120px)", // Adjust height for the prompt section
          marginBottom: 2,
        })}
      >
        {/* User's Voice Message */}
        <Box
          sx={{
            width: 252, // Chat bubble width
            bgcolor: (theme) => theme.palette.background.chatBubble,
            borderRadius: "50px 50px 0px 50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1,
            ml: "auto",
            padding: "10px 16px",
          }}
        >
          <PlayCircleIcon
            sx={{ fontSize: 24, color: mode === "light" ? "#000" : "#FFF" }}
          />
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
                  bgcolor: (theme) => theme.palette.primary.main,
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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 1, // Margin on top for spacing
            mr: "auto", // Align bubble to the left
            padding: "10px 16px",
          }}
        >
          <PlayCircleIcon
            sx={{ fontSize: 24, color: mode === "light" ? "#000" : "#FFF" }}
          />
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
                  bgcolor: (theme) => theme.palette.primary.main,
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
            bgcolor: (theme) => theme.palette.background.chat,
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
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          bgcolor: theme.palette.background.chatInput,
          borderRadius: "24px",
          justifyContent: "space-between",
          padding: 2,
        })}
      >
        <IconButton>
          <StopIcon
            sx={{ fontSize: 42, color: mode === "light" ? "#000" : "#FFF" }}
          />
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
                bgcolor: (theme) => theme.palette.primary.main,
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
          <IconButton sx={{ color: mode === "light" ? "#000" : "#D4D4D4" }}>
            <Microphone2 color={mode === "light" ? "#000" : "#D4D4D4"} />
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
