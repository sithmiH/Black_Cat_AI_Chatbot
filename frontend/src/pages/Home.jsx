import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Paper,
  IconButton,
} from "@mui/material";
import { AttachCircle, Microphone2, Keyboard, Magicpen } from "iconsax-react";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          // minHeight: "100vh",
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          paddingY: 4,
        }}
      >
        {/* Header Section */}

        {/* Main Content */}
        <Box>
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
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
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 160,
            top: 145,
            width: "180px",
            height: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(circle at center, rgba(0, 195, 255, 0.2) 0%, rgba(0, 195, 255, 0.1) 30%, transparent 70%)",
              filter: "blur(30px)",
              transform: "scale(1.4)",
              zIndex: 0,
              animation: "pulse 2s infinite",
            },
            "@keyframes pulse": {
              "0%": {
                opacity: 0.8,
                transform: "scale(1.4)",
              },
              "50%": {
                opacity: 0.6,
                transform: "scale(1.5)",
              },
              "100%": {
                opacity: 0.8,
                transform: "scale(1.4)",
              },
            },
          }}
        >
          <Box
            component="img"
            src="/assets/download__4_-removebg-preview.png"
            alt="Black Cat AI"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              position: "relative",
              zIndex: 1,
              filter: "drop-shadow(0 0 15px rgba(0, 195, 255, 0.3))",
            }}
          />
        </Box>
        {/* Suggestion Buttons Section */}
        <Box
          sx={{
            bgcolor: "rgba(49, 49, 50, 0.06)", // #313132 with 6% opacity
            borderRadius: 4,
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
            <Magicpen color="#000" variant="Bold" />
          </IconButton>
          <IconButton>
            <Keyboard color="#000" />
          </IconButton>
          <IconButton>
            <AttachCircle color="#000" />
          </IconButton>
          <IconButton>
            <Microphone2 color="#000" />
          </IconButton>
        </Box>

        {/* Solve a Problem Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{
              bgcolor: "#313132", // Primary black color
              color: "white", // White text color
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
              width: "auto", // Makes the button width adjust to its content
              maxWidth: "200px", // Set a maximum width for the button
              textTransform: "none",
            }}
            onClick={() => navigate("/chat")} // Navigate to ChatScreen
          >
            Solve a Problem
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
