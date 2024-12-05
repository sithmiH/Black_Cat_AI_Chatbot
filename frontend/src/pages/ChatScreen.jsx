import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon, Brightness4 as DarkModeIcon } from "@mui/icons-material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Prompt from "../components/Prompt";

const ChatScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "#f9f9f9",
      }}
    >
      {/* Header */}
      < Header />

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          padding: 2,
          overflowY: "auto",
        }}
      >
        {/* Question */}
        <Box>
          <Paper
            elevation={1}
            sx={{
              padding: 2,
              borderRadius: 2,
              marginBottom: 1,
              bgcolor: "#fff",
              maxWidth: "70%",
              wordWrap: "break-word",
            }}
          >
            <Typography variant="body1">
              If 3x+5=17, what is the value of x?
            </Typography>
          </Paper>
        </Box>

        {/* Response */}
        <Box>
          <Paper
            elevation={1}
            sx={{
              padding: 2,
              borderRadius: 2,
              marginBottom: 1,
              bgcolor: "#e8f5e9",
              maxWidth: "80%",
              wordWrap: "break-word",
              ml: "auto",
            }}
          >
            <Typography variant="body1">
              To solve the equation 3x+5=17, follow these steps:
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              1. Subtract 5 from both sides:
            </Typography>
            <Typography variant="body2" sx={{ ml: 2 }}>
              3x = 17 - 5 <br />
              3x = 12
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              2. Divide both sides by 3:
            </Typography>
            <Typography variant="body2" sx={{ ml: 2 }}>
              x = 12/3 <br />
              x = 4
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
              So, the value of x is 4.
            </Typography>
          </Paper>
        </Box>

        {/* Expand Button */}
        <Button
          variant="outlined"
          sx={{
            display: "block",
            ml: "auto",
            mt: 1,
          }}
        >
          Expand each step with examples
        </Button>
      </Box>

      <Prompt />

      <Footer />
      
        
        
      </Box>
    
  );
};

export default ChatScreen;
