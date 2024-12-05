import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Card,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/ViewSidebarRounded";
import NightsStayIcon from "@mui/icons-material/NightsStay";

const SidePanel = () => {
  // State for managing the input field value
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: 320 }, // Adjust width on different screen sizes
        margin: "auto",
        padding: 3,
        border: "1px solid #e0e0e0",
        borderRadius: 4,
        backgroundColor: "#fff",
        boxShadow: 2,
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          History
        </Typography>
        <Box>
          <IconButton color="primary">
            <NightsStayIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon sx={{ fontSize: 30, color: "#171717" }} />
          </IconButton>
        </Box>
      </Box>

      {/* List of Questions with Input Field for First Item */}
      <List>
        <ListItem button divider>
          <TextField
            value={inputValue}
            onChange={handleInputChange}
            label="If 3x + 5 = 17, what is the value of x..."
            variant="outlined"
            fullWidth
            size="small"
            sx={{ backgroundColor: "#f9f9f9", borderRadius: 1 }}
          />
        </ListItem>
        <ListItem button divider>
          <ListItemText primary="Simultaneous Equation Solving" />
        </ListItem>
        <ListItem button divider>
          <ListItemText primary="Integer Help" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Square Roots and Multipliers" />
        </ListItem>
      </List>

      {/* Card with Image */}
      <Card
        sx={{
          position: "relative",
          borderRadius: 4,
          overflow: "hidden",
          mt: 2,
        }}
      >
        <img
          src="/assets/Frame 47.png" // Replace with actual image URL
          alt="Math Master"
          style={{ width: "100%", height: "auto" }}
        />
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#fff",
            color: "#000",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          Play Math Master
        </Button>
      </Card>

      {/* Settings Section */}
      <Divider sx={{ my: 2 }} />
      <Box display="flex" alignItems="center">
        <Avatar sx={{ bgcolor: "#ff5722", marginRight: 2 }}>D</Avatar>
        <Typography variant="body1" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Dewni J
        </Typography>
      </Box>
      <List>
        <ListItem button>
          <LogoutIcon sx={{ marginRight: 1 }} />
          <ListItemText primary="Logout" />
        </ListItem>
        <ListItem button>
          <SettingsIcon sx={{ marginRight: 1 }} />
          <ListItemText primary="Settings" />
        </ListItem>
      </List>

      {/* Footer */}
      <Box
        display="flex"
        justifyContent="space-between"
        mt={1}
        sx={{
          fontSize: { xs: "0.7rem", sm: "0.8rem" },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#757575", textAlign: { xs: "center", sm: "left" } }}
        >
          Terms & Conditions
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#757575", textAlign: { xs: "center", sm: "right" } }}
        >
          Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default SidePanel;
