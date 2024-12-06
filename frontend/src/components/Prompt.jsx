import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/SendRounded";
import StopIcon from "@mui/icons-material/StopCircleOutlined";
import { useThemeContext } from "../contexts/themeContext";
import { Magicpen, Keyboard, AttachCircle, Microphone2 } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const Prompt = ({ inputMessage, setInputMessage, handleSendMessage }) => {
  const { mode } = useThemeContext();
  const navigate = useNavigate();

  return (
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
        sx={{
          marginRight: 1,
        }}
        slotProps={{
          input: {
            disableUnderline: true,
          },
        }}
      />

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
        <IconButton onClick={() => navigate("/chat/voice")}>
          <Microphone2 color="#D4D4D4" />
        </IconButton>
        <IconButton color="primary" onClick={handleSendMessage}>
          <SendIcon sx={{ fontSize: 24, color: "#D4D4D4" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Prompt;
