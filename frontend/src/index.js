import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import privateRouter from "./Routes";
import { RouterProvider } from "react-router-dom";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={privateRouter} />
    </ThemeProvider>
  </React.StrictMode>
);
