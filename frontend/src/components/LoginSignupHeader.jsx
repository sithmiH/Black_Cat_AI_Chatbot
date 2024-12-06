import { Box, Typography } from "@mui/material";
import { Moon } from "iconsax-react";
import { useThemeContext } from "../contexts/themeContext";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
const LoginSignupHeader = () => {
  const { mode, toggleColorMode } = useThemeContext();
  const navigate = useNavigate();
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
            component="div"
            color="primary"
            variant="h6" // Adjust the variant as needed
            sx={{
              fontWeight: "bold", // Bold text
              mt: 1, // Margin top for spacing between image and text
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            Black Cat
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <IconButton
            color="inherit"
            onClick={toggleColorMode}
            sx={{
              verticalAlign: "middle",
              fontSize: "1.2rem",
              color: "black",
            }}
          >
            <Moon color={mode === "light" ? "#000" : "#511956"} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default LoginSignupHeader;
