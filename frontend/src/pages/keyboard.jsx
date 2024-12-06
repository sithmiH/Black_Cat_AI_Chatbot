import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import ArticleIcon from "@mui/icons-material/Article";

const Keyboard = () => {
  const [keyboardType, setKeyboardType] = useState("123"); // "123", "sin", "alpha"
  const [input, setInput] = React.useState("");
  const numbers = [
    ["1", "2", "3", "4"],
    ["5", "6", "7", "8"],
    [null, "9", "0", null],
  ];

  const trigonometrics = [
    ["sin", "cos", "tan", "sec"],
    ["csc", "sinh", "cosh", "tanh"],
    [null, "cot", "coth", null],
  ];

  const alpha = [
    ["sin", "cos", "tan", "sec"],
    ["csc", "sinh", "cosh", "tanh"],
    [null, "cot", "coth", null],
  ];

  const handleButtonClick = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const hadletrigonometrics = (trigonometric) => {
    setInput((prevInput) => prevInput + trigonometric);
  };

  // Handle keyboard switch
  const handleKeyboardSwitch = (type) => {
    if (type === "graph") {
      navigate("/chat/GraphCreate"); // Navigate to /graphCreate page
    } else {
      setKeyboardType(type);
    }
  };
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Render keyboard buttons dynamically based on type
  const renderKeyboard = () => {
    switch (keyboardType) {
      case "123":
        return (
          <Grid container spacing={0.5}>
            {numbers.map((row, rowIndex) => (
              <Grid
                container
                item
                spacing={0.5}
                key={rowIndex}
                justifyContent="center"
              >
                {row.map((number, colIndex) => (
                  <Grid item key={colIndex}>
                    {number ? (
                      <Button
                        color="black"
                        variant="outlined"
                        onClick={() => handleButtonClick(number)}
                        sx={{
                          minWidth: 30,
                          minHeight: 30,
                          maxWidth: 30,
                          maxHeight: 30,
                          fontSize: "1.1rem",
                          borderRadius: "20%",
                          borderColor: "#BABABA",
                        }}
                      >
                        {number}
                      </Button>
                    ) : (
                      <Box sx={{ width: 20, height: 20 }} />
                    )}
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        );
      case "sin":
        return (
          <Grid container spacing={0.5}>
            {trigonometrics.map((row, rowIndex) => (
              <Grid
                container
                item
                spacing={0.5}
                key={rowIndex}
                justifyContent="center"
              >
                {row.map((trigonometric, colIndex) => (
                  <Grid item key={colIndex}>
                    {trigonometric ? (
                      <Button
                        color="black"
                        variant="outlined"
                        onClick={() => hadletrigonometrics(trigonometric)}
                        sx={{
                          minWidth: 30,
                          minHeight: 30,
                          maxWidth: 30,
                          maxHeight: 30,
                          fontSize: "0.65rem",
                          borderRadius: "20%",
                          borderColor: "#BABABA",
                        }}
                      >
                        {trigonometric.toLowerCase()}
                      </Button>
                    ) : (
                      <Box sx={{ width: 20, height: 20 }} />
                    )}
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        );
      case "alpha":
        return (
          <Grid container spacing={0.5}>
            {alpha.map((row, rowIndex) => (
              <Grid
                container
                item
                spacing={0.5}
                key={rowIndex}
                justifyContent="center"
              >
                {row.map((number, colIndex) => (
                  <Grid item key={colIndex}>
                    {number ? (
                      <Button
                        color="black"
                        variant="outlined"
                        onClick={() => handleButtonClick(number)}
                        sx={{
                          minWidth: 30,
                          minHeight: 30,
                          maxWidth: 30,
                          maxHeight: 30,
                          fontSize: "0.65rem",
                          borderRadius: "20%",
                          borderColor: "#BABABA",
                        }}
                      >
                        {number}
                      </Button>
                    ) : (
                      <Box sx={{ width: 20, height: 20 }} />
                    )}
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Box
        sx={(theme) => ({
          bgcolor: theme.palette.background.chat,
          borderRadius: "16px",
          boxShadow: 0,
          border: `2px solid ${theme.palette.border.main}`,
          padding: 3,
          marginBottom: 3,
          display: "flex",
          height: "50vh",
          flexDirection: "column",
          overflowY: "auto", // Ensure content inside can scroll
          // backgroundColor:"yellow"
        })}
      >
        <Box
          sx={(theme) => ({
            bgcolor: theme.palette.background.chatBubble,
            borderRadius: "50px 50px 0px 50px", // Rounded edges
            border: "2px solid #FFFFFF", // Border with white color
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            ml: "auto", // Align bubble to the right
            width: "70%",
          })}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              fontSize: "14px",
              paddingX: 5, // Add padding inside bubble
              margin: 2,
            }}
          >
            A person standing on top of a lighthouse of height 20 meters
            observes a boat in the sea at an angle of depression of 30. Using
            tan(60) calculate the distance of the boat from the base of the
            lighthouse.
          </Typography>
        </Box>
        <Box
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
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#BABABA",
              paddingX: 2,
            }}
          >
            Almost there
          </Typography>
          <CircularProgress size={20} color="#EAEAEA" />
        </Box>
      </Box>
      {/* Header Section */}
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
          borderRadius: "12px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          bgcolor: theme.palette.background.chat,
        })}
      >
        {/* Icons Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%", // Full width for spacing adjustment
            marginBottom: 2,
          }}
        >
          <IconButton>
            <ArticleIcon />
          </IconButton>
          <TextField
            fullWidth
            id="standard-basic"
            value={input}
            variant="standard"
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
            onChange={(e) => setInput(e.target.value)}
            sx={(theme) => ({
              "& .MuiInput-underline:before": {
                borderBottomColor: "gray", // Default border color
              },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottomColor: "lightgray", // Border color on hover
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "lightgray", // Border color when focused
              },
              "& .MuiInputBase-input": {
                color: theme.palette.text.primary, // Text color
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: "lightgray", // Default background color
                "&:hover fieldset": {
                  borderColor: "lightgray", // Border on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "lightgray", // Border color when focused
                },
              },
            })}
          />
          <IconButton>
            <SendIcon />
          </IconButton>
        </Box>

        <Box
          sx={(theme) => ({
            bgcolor: theme.palette.background.default,
            width: "100%",
            // padding: 2,
            // marginX:5,
            borderRadius: "12px",
          })}
        >
          {/* Keyboard Switch Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              padding: 2,
              width: "fit-content",
              margin: "auto",
            }}
          >
            {["123", "sin", "alpha", "graph"].map((key) => (
              <Typography
                key={key}
                onClick={() => handleKeyboardSwitch(key)}
                sx={{
                  fontSize: 16,
                  fontWeight: key === keyboardType ? "bold" : "normal",
                  // textDecoration: key === keyboardType ? "underline" : "none",
                  cursor: "pointer",
                  // backgroundColor: "green",
                }}
              >
                {key}
              </Typography>
            ))}
          </Box>

          <Divider
            sx={{
              width: "auto",
              marginY: 1,
              marginX: 2,
              backgroundColor: "lightgray",
              borderColor: "lightgray",
            }}
          />
          <Box
            sx={{
              width: "fit-content",
              margin: "auto",
              padding: 2,
            }}
          >
            {renderKeyboard()}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Keyboard;
