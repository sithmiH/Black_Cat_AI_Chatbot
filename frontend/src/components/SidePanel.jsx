import React, { useContext } from "react";
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
import { Moon } from "iconsax-react";
import { Element2 } from "iconsax-react";
import { useThemeContext } from "../contexts/themeContext";
import { Game } from "iconsax-react";
import { useSidePanel } from "./layout/ChatBoxLayout";

const SidePanel = () => {
  // State for managing the input field value
  const { mode, toggleColorMode } = useThemeContext();
  const { showPanel, setShowPanel } = useSidePanel();

  return (
    <Box
      sx={(theme) => ({
        padding: 3,
        border: `2px solid ${theme.palette.border.main}`, // Using the border color from theme
        borderRadius: 4,
        backgroundColor: theme.palette.background.box, // Using background.paper from theme
        boxShadow: 2,
        height: "100%", // Make the SidePanel fill the parent's height
        overflowY: "auto", // Enable scrolling for overflowing content
      })}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          History
        </Typography>
        <Box>
          <IconButton color="primary" onClick={toggleColorMode}>
            <Moon color={mode === "light" ? "#000" : "#511956"} />
          </IconButton>
          <IconButton onClick={() => setShowPanel(false)}>
            <Element2 color={mode === "light" ? "#000" : "#FFF"} />
          </IconButton>
        </Box>
      </Box>

      {/* List of Questions with Input Field for First Item */}
      <List>
        <ListItem
          button
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            padding: theme.spacing(0.5),
          })}
        >
          <Box
            sx={(theme) => ({
              borderRadius: 2,
              paddingX: 2,
              paddingY: 1.5, // Add padding for vertical spacing
              ":hover": {
                backgroundColor: theme.palette.background.input,
              },
              bgcolor: theme.palette.background.input, // Background color from theme
              color: theme.palette.text.secondary, // Text color from theme
              fontSize: "0.875rem", // Match TextField's typical font size
            })}
          >
            If 3x + 5 = 17, what is the value of x...
          </Box>
        </ListItem>
        <ListItem
          button
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            ":hover": {
              backgroundColor: "transparent",
            },
            padding: theme.spacing(0.5), // Adjust padding for reduced spacing
          })}
        >
          <ListItemText primary="Simultaneous Equation Solving" />
        </ListItem>
        <ListItem
          button
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            ":hover": {
              backgroundColor: "transparent",
            },
            padding: theme.spacing(0.5), // Adjust padding for reduced spacing
          })}
        >
          <ListItemText primary="Integer Help" />
        </ListItem>
        <ListItem
          button
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            ":hover": {
              backgroundColor: "transparent",
            },
            padding: theme.spacing(0.5), // Adjust padding for reduced spacing
          })}
        >
          <ListItemText primary="Square Roots and Multipliers" />
        </ListItem>
      </List>

      {/* Card with Image */}
      <Box sx={{ position: "relative" }}>
        <img
          src="/assets/Frame 47.png" // Replace with actual image URL
          alt="Math Master"
          style={{ width: "100%", height: "auto" }}
        />
        <Button
          variant="contained"
          sx={(theme) => ({
            position: "absolute",
            bottom: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: theme.palette.background.input,
            color: theme.palette.text.primary,
            fontWeight: "bold",
            opacity: 0.6,
            borderRadius: 10,
            paddingY: 2,
            paddingX: 2, // Optional padding for horizontal spacing
            whiteSpace: "nowrap", // Prevent text line break
            display: "flex", // Use flexbox for positioning
            alignItems: "center", // Vertically center the items
            justifyContent: "center", // Horizontally center the items
            textTransform: "none", // Ensure text is not uppercase
          })}
        >
          <Game color={mode === "light" ? "#000" : "#fff"} />
          <Typography variant="body1" component="div" sx={{ marginLeft: 1 }}>
            Play Math Master
          </Typography>
        </Button>
      </Box>

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
