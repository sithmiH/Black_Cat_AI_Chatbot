import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { Moon } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../contexts/themeContext";

// Assuming your image is in the 'assets' folder and named 'Group.png'
const drawerWidth = 240;
const navItems = [
  { name: "Home", href: "/" },
  { name: "Docs", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/signup" },
];

const Header = () => {
  const navigate = useNavigate();
  const { mode, toggleColorMode } = useThemeContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Add state for dark mode

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMoonIconClick = () => {
    toggleColorMode();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Black Cat
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{
          color: "black",
          boxShadow: "none",
        }}
        color="transparent"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Centered logo image */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)", // Centers the image
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/assets/Group.png" // Update with the correct path to your logo image
              alt="Logo"
              style={{ width: "50px", height: "50px" }} // Adjust size as needed
            />
          </Box>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "primary",
              fontWeight: 1000, // Increased boldness for "Black Cat"
              fontFamily: "Outfit",
              display: { xs: "none", sm: "block" },
            }}
          >
            Black Cat
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Make the moon icon clickable */}
            <IconButton
              color="inherit"
              onClick={handleMoonIconClick} // Handle the click event
              sx={{
                verticalAlign: "middle",
                fontSize: "1.2rem",
                color: "black",
              }}
            >
              <Moon color="#000" />
            </IconButton>
            {navItems.slice(0, -1).map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: "primary",
                  fontFamily: "Outfit", // Outfit font for navigation items
                  fontWeight: 400,
                  textTransform: "none",
                  fontSize: 16,
                }}
                onClick={() => navigate(item.href)}
              >
                {item.name}
              </Button>
            ))}
            <Button
              variant="outlined"
              sx={{
                borderColor: "primary",
                color: "primary",
                borderRadius: "60px", // Rounded edges
                borderWidth: "2px",
                padding: "12px 18px", // Adjusted padding
                fontFamily: "Outfit", // Outfit font for Sign Up
                fontWeight: 400,
                fontSize: 14,
                textTransform: "none",
              }}
              onClick={() => navigate(navItems[navItems.length - 1].href)}
            >
              {navItems[navItems.length - 1].name}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right" // Moves the drawer to the right side
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
