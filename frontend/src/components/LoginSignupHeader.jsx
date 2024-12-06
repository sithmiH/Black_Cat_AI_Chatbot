import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import { Moon } from "iconsax-react";
const LoginSignupHeader = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between", // Space between elements
          alignItems: "center", // Vertically align items
          flexDirection: "row", // To stack image and text vertically
          zIndex: 2, // Ensure it stays on top
          paddingX: 10,
          paddingTop: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <img
            src="/assets/Group.png" // Replace with your logo image path
            alt="Group"
            style={{
              maxWidth: "150px", // Adjust size as needed
              height: "auto", // Maintain aspect ratio
            }}
          />
          <Typography
            variant="h6" // Adjust the variant as needed
            sx={{
              fontWeight: "bold", // Bold text
              color: "black", // Black color
              mt: 1, // Margin top for spacing between image and text
            }}
          >
            Black Cat
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Moon color="#000" />
        </Box>
      </Box>
    </>
  );
};

export default LoginSignupHeader;
