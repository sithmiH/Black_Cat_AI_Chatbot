import { amber, deepOrange } from "@mui/material/colors";

const theme = {
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: amber[500], // Use a valid MUI color object
    },
  },
};

export const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: ["Outfit", "sans-serif"].join(","),
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // Palette values for light mode
          primary: {
            main: "#000", // Main property for the primary color
          },
          divider: amber[200],
          background: {
            default: "#fff",
            paper: "#f5f5f5",
          },
          text: {
            primary: "#000",
            secondary: "#313132",
          },
        }
      : {
          // Palette values for dark mode
          primary: {
            main: "#fff", // Main property for the primary color
          },
          divider: deepOrange[700],
          border: "#2E2E2E",
          background: {
            default: "#141414",
            paper: "#1c1c1c",
          },
          text: {
            primary: "#fff",
            secondary: "#EAEAEA",
          },
        }),
  },
});

export default theme;
