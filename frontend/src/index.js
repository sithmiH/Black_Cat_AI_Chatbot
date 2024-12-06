import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import App from "./App";
import { ThemeContextProvider } from "./contexts/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      {/* <RouterProvider router={privateRouter} /> */}
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
