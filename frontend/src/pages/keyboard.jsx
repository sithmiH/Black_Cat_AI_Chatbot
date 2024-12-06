import React, { useState } from "react";
import { Box, Typography, IconButton, Button, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";

const Keyboard = () => {
  const [keyboardType, setKeyboardType] = useState("123"); // "123", "sin", "alpha"

  // Handle keyboard switch
  const handleKeyboardSwitch = (type) => {
    setKeyboardType(type);
  };

  // Render keyboard buttons dynamically based on type
  const renderKeyboard = () => {
    switch (keyboardType) {
      case "123":
        return (
          <Grid container spacing={1} justifyContent="center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((key) => (
              <Grid item xs={3} key={key}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: "12px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {key}
                </Button>
              </Grid>
            ))}
          </Grid>
        );
      case "sin":
        return (
          <Grid container spacing={1} justifyContent="center">
            {["sin", "cos", "tan", "log", "sqrt"].map((key) => (
              <Grid item xs={4} key={key}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {key}
                </Button>
              </Grid>
            ))}
          </Grid>
        );
      case "alpha":
        return (
          <Grid container spacing={1} justifyContent="center">
            {["α", "β", "γ", "π", "θ"].map((key) => (
              <Grid item xs={4} key={key}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {key}
                </Button>
              </Grid>
            ))}
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "#F8F8F8",
        borderRadius: "16px",
        // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        height: "80vh",
        padding: 2,
        maxWidth: "400px",
        backgroundColor:"red",
        margin: "0 auto", // Center the component on the page
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // bgcolor: "#FFFFFF",
          padding: 2,
          borderRadius: "12px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor:"blue",
        }}
      >
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: "flex", gap: 2 }}>
          {["123", "sin", "alpha"].map((key) => (
            <Typography
              key={key}
              onClick={() => handleKeyboardSwitch(key)}
              sx={{
                fontSize: 16,
                fontWeight: key === keyboardType ? "bold" : "normal",
                textDecoration: key === keyboardType ? "underline" : "none",
                cursor: "pointer",
                backgroundColor:"green",
              }}
            >
              {key}
            </Typography>
          ))}
        </Box>
        <IconButton>
          <SendIcon />
        </IconButton>
      </Box>

      {/* Keyboard Section */}
      <Box
        sx={{
          // bgcolor: "#FFFFFF",
          backgroundColor:"yellow",
          padding: 2,
          borderRadius: "12px",
          mt: 42,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {renderKeyboard()}
      </Box>
    </Box>
  );
};

export default Keyboard;
