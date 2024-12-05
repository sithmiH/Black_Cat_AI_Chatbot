import React, { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/SendRounded";
import EditIcon from "@mui/icons-material/AutoFixHigh";
import KeyboardIcon from "@mui/icons-material/KeyboardAltOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFileOutlined";
import MicIcon from "@mui/icons-material/MicNone";
import StopIcon from "@mui/icons-material/StopCircleOutlined";

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
        marginTop: "40px",
        padding: "24px",
        width: "90%",
        maxWidth: "800px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F6F6F6",
          borderRadius: "16px",
          justifyContent: "space-between",
          paddingY: 2,
        }}
      >
        <IconButton>
          <StopIcon sx={{ fontSize: 42, color: "#171717" }} />
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
            <EditIcon sx={{ fontSize: 24, color: "#D1D1D1" }} />
          </IconButton>
          <IconButton>
            <KeyboardIcon sx={{ fontSize: 24, color: "#D1D1D1" }} />
          </IconButton>
          <IconButton>
            <AttachFileIcon sx={{ fontSize: 24, color: "#D1D1D1" }} />
          </IconButton>
          <IconButton>
            <MicIcon sx={{ fontSize: 24, color: "#D1D1D1" }} />
          </IconButton>
          <IconButton color="primary" onClick={handleSendMessage}>
            <SendIcon sx={{ fontSize: 24, color: "#D1D1D1" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Prompt;
