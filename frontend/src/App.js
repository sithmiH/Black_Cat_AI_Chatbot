import React from "react";
import "./App.css";
import privateRouter from "./Routes";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { useThemeContext } from "./contexts/themeContext";

function App() {
  const { theme } = useThemeContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={privateRouter} />
      </ThemeProvider>
    </>
  );
}

export default App;
