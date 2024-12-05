import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Container,
  IconButton,
} from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicNoneIcon from "@mui/icons-material/MicNone";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Section */}

      {/* Main Content */}
      <Container component="main" sx={{ flex: 1, py: 6, textAlign: "center" }}>
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          Master Math Instantly with Black Cat AI
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
        >
          Get accurate solutions to any math problem in seconds, powered by
          advanced AI. Simple, fast, and reliable.
        </Typography>

        {/* Suggestion Buttons Section */}
        <Box
          sx={{
            bgcolor: "rgba(49, 49, 50, 0.06)", // #313132 with 6% opacity
            borderRadius: 2,
            p: 3,
            mb: 8,
            width: "100%", // Set width here (increase as needed)
            mx: "auto", // Center the box horizontally
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            {/* Upper Row: Grouped 2 Questions on One Line */}
            {[
              [
                "If 3x+5=17, what is the value of x?",
                "How many milliseconds are there in 5.5 days?",
              ],
              [
                "Change 5 horsepower to watts (1 hp = 745.7 W)",
                "Convert 72 km/h to m/s",
              ],
            ].map((pair, rowIndex) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                key={rowIndex}
                container
                spacing={2}
                justifyContent="center"
              >
                {pair.map((question, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        borderRadius: 50,
                        cursor: "pointer",
                        px: 3, // Horizontal padding
                        py: 1, // Vertical padding
                        ":hover": { boxShadow: 4 },
                        border: "2px solid #EAEAEA",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: '"Outfit", sans-serif', // Apply Outfit font
                          fontWeight: "light", // Light font weight
                          fontSize: 14, // Font size set to 14px
                        }}
                      >
                        {question}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ))}

            {/* Lower Row: Remaining Questions */}
            {[
              "Find the derivative of sin(x)",
              "How many milligrams are in 1.2 grams?",
            ].map((question, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: 50,
                    cursor: "pointer",
                    px: 3, // Horizontal padding
                    py: 1, // Vertical padding
                    ":hover": { boxShadow: 4 },
                    border: "2px solid #EAEAEA",
                    maxWidth: "auto", // Make the width responsive to text
                    width: "auto", // Let the box width adjust to the text size
                    minWidth: 0, // Prevent any fixed min width
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 206.26, // Position the image 206.26px above the top edge of the parent
                      left: 1098,
                    }}
                  >
                    <img
                      src="/assets/download__4_-removebg-preview.png"
                      alt="Icon"
                      width={24}
                      height={24}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: '"Outfit", sans-serif', // Apply Outfit font
                      fontWeight: "light", // Light font weight
                      fontSize: 14, // Font size set to 14px
                    }}
                  >
                    {question}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Icons Section */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
          <IconButton>
            <AutoFixHighIcon sx={{ fontSize: 24, color: "#313132" }} />
          </IconButton>
          <IconButton>
            <KeyboardAltOutlinedIcon sx={{ fontSize: 24, color: "#313132" }} />
          </IconButton>
          <IconButton>
            <AttachFileIcon sx={{ fontSize: 24, color: "#313132" }} />
          </IconButton>
          <IconButton>
            <MicNoneIcon sx={{ fontSize: 24, color: "#313132" }} />
          </IconButton>
        </Box>

        {/* Solve a Problem Button */}
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{
            mt: 2,
            bgcolor: "#313132", // Primary black color
            color: "write", // White text color
            borderRadius: 30, // Rounded corners
            px: 4, // Horizontal padding
            py: 2, // Vertical padding
            ":hover": {
              bgcolor: "#313132", // Darker black on hover
            },
            fontWeight: "light", // Light font weight
            fontFamily: '"Outfit", sans-serif', // Apply Outfit font
            fontSize: 14, // Font size set to 14px
            boxShadow: 4, // Box shadow effect
          }}
          onClick={() => navigate("/chat")} // Navigate to ChatScreen
        >
          Solve a Problem
        </Button>
      </Container>
    </Box>
  );
};
