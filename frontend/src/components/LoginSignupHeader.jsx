import { Box, Typography } from "@mui/material";
import { Moon } from "iconsax-react";
const LoginSignupHeader = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          zIndex: 2,
          paddingX: 10,
          paddingTop: 2,
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
