import React from "react";
import "./App.css";
import privateRouter from "./Routes";
import { BrowserRouter, Router, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./contexts/themeContext";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const MainContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, #13111C 0%, #241D3B 100%)" // Dark mode gradient
      : "linear-gradient(135deg, #F8F9FE 0%, #FFFFFF 100%)", // Light mode gradient
  transition: "background 0.3s ease",
}));

function App() {
  const { theme } = useThemeContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainContainer>
          <RouterProvider router={privateRouter} />
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
