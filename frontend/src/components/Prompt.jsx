import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/SendRounded";
import StopIcon from "@mui/icons-material/StopCircleOutlined";
import { Magicpen, Keyboard, AttachCircle, Microphone2 } from "iconsax-react";

const Prompt = () => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      console.log(inputMessage);
      setInputMessage("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        borderRadius: "24px",
        justifyContent: "space-between",
        padding: 2,
        marginY: 6,
      }}
    >
      <IconButton>
        <StopIcon sx={{ fontSize: 42, color: "#000" }} />
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
  );
};

export default Prompt;
