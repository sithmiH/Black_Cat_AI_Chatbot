import { amber, deepOrange } from "@mui/material/colors";

// const theme = {
//   typography: {
//     fontFamily: ["Outfit", "sans-serif"].join(","),
//   },
//   palette: {
//     primary: {
//       main: amber[500], // Use a valid MUI color object
//     },
//   },
// };

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
          divider: "#BCBEC0",
          background: {
            default: "#fff",
            paper: "#f5f5f5",
            button: "#313132",
            box: "#fff",
            input: "#FFFFFF",
            chat: "#FFF",
            chatInput: "#F6F6F6",
            chatBubble: "#EAEAEA",
          },
          border: {
            main: "#EAEAEA",
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
          divider: "#212121",
          background: {
            default: "#141414",
            paper: "#1c1c1c",
            button: "#511956",
            box: "#0C0C0C",
            input: "#212121",
            chat: "#080808",
            chatInput: "#080808",
            chatBubble: "#212121",
          },
          border: {
            main: "#2E2E2E",
          },
          text: {
            primary: "#fff",
            secondary: "#EAEAEA",
          },
        }),
  },
});

// export default theme;
