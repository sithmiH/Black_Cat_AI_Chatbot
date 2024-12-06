import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  CircularProgress,
  TextField,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/SendRounded";
import StopIcon from "@mui/icons-material/StopCircleOutlined";
import { Magicpen, Keyboard, AttachCircle, Microphone2 } from "iconsax-react";
import { useThemeContext } from "../contexts/themeContext";

const ChatScreen = () => {
  const navigate = useNavigate();
  const { mode } = useThemeContext();
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "user", text: "If 3x+5=17, what is the value of x?" },
    {
      type: "assistant",
      text: {
        title: "To solve the equation 3x+5=17, follow these steps:",
        steps: [
          {
            step: "1. Subtract 5 from both sides:",
            detail: ["3x = 17 - 5", "3x = 12"],
          },
          {
            step: "2. Divide both sides by 3:",
            detail: ["x = 12/3", "x = 4"],
          },
        ],
        conclusion: "So, the value of x is 4.",
      },
    },
    { type: "user", text: "Expand each step with examples" },
  ]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([
        ...messages,
        { type: "user", text: inputMessage },
        { type: "loading", text: "Almost there" },
      ]);
      setInputMessage("");

      setTimeout(() => {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];

          if (inputMessage.toLowerCase().includes("12")) {
            const loadingIndex = updatedMessages.findIndex(
              (msg) => msg.type === "loading"
            );
            if (loadingIndex !== -1) {
              updatedMessages.splice(loadingIndex, 1);
            }
            updatedMessages.push({
              type: "assistant",
              text: {
                title: "The answer is 144",
              },
            });
          }

          return updatedMessages;
        });
      }, 3000);
    }
  };
  return (
    <>
      <Box
        id="chatBox"
        sx={(theme) => ({
          bgcolor: theme.palette.background.chat,
          borderRadius: "16px",
          border: `2px solid ${theme.palette.border.main}`,
          height: "calc(100vh - 100px)",
          maxHeight: "calc(100vh - 100px)",
          minHeight: "calc(100vh - 100px)",
          display: "flex",
          flexDirection: "column",
        })}
      >
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            padding: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {messages?.map((message, index) =>
            message.type === "user" ? (
              <Box
                key={index}
                sx={(theme) => ({
                  width: 252,
                  minHeight: 50,
                  bgcolor: theme.palette.background.chatBubble,
                  borderRadius: "50px 50px 0px 50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 1,
                  ml: "auto",
                })}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    fontSize: "14px",
                    paddingX: 2,
                    paddingY: 1,
                  }}
                  onClick={() =>
                    message.text === "If 3x+5=17, what is the value of x?" &&
                    navigate("/chat/edit")
                  }
                >
                  {message.text}
                </Typography>
              </Box>
            ) : message.type === "assistant" ? (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  padding: 2,
                  marginBottom: 1,
                  textAlign: "left",
                  marginLeft: 0,
                  marginRight: "auto",
                  width: 300,
                  bgcolor: "transparent",
                  borderRadius: "50px 50px 50px 0px",
                  wordWrap: "break-word",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ mt: 2, fontWeight: "Bold", fontSize: "16px" }}
                >
                  {message.text.title}
                </Typography>
                {message?.text?.steps?.map((step, stepIndex) => (
                  <React.Fragment key={stepIndex}>
                    <Typography
                      variant="body1"
                      sx={{ mt: 1, fontWeight: "light", fontSize: "16px" }}
                    >
                      {step.step}
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
                      {step?.detail?.map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </Typography>
                  </React.Fragment>
                ))}
                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: 1.8,
                  }}
                >
                  {message.text.conclusion}
                </Typography>
              </Paper>
            ) : (
              <Box
                key={index}
                sx={(theme) => ({
                  bgcolor: theme.palette.background.chat,
                  borderRadius: "50px 50px 50px 0px",
                  border: "2px solid #EAEAEA",
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  justifyContent: "center",
                  mt: 1,
                  mr: "auto",
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
                    sx={{ textAlign: "center", fontSize: "14px", paddingX: 2 }}
                  >
                    {message.text}
                  </Typography>
                  <CircularProgress size={20} color="#EAEAEA" />
                </Box>
              </Box>
            )
          )}
        </Box>
      </Box>

      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          bgcolor: theme.palette.background.chatInput,
          borderRadius: "24px",
          justifyContent: "space-between",
          padding: 2,
          marginY: 6,
        })}
      >
        <IconButton>
          <StopIcon
            sx={{ fontSize: 42, color: mode === "light" ? "#000" : "#FFF" }}
          />
        </IconButton>

        <TextField
          fullWidth
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message"
          variant="standard"
          sx={{ marginRight: 1 }}
          slotProps={{ input: { disableUnderline: true } }}
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton>
            <Magicpen color="#D4D4D4" />
          </IconButton>
          <IconButton>
            <Keyboard color="#D4D4D4" />
          </IconButton>
          <IconButton>
            <AttachCircle color="#D4D4D4" />
          </IconButton>
          <IconButton>
            <Microphone2 color="#D4D4D4" />
          </IconButton>
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon sx={{ fontSize: 24, color: "#D4D4D4" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default ChatScreen;
