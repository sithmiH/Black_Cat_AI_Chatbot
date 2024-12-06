import { createTheme } from "@mui/material";
import { createContext, useContext } from "react";
import { useColorTheme } from "./useColorTheme";

const ThemeContext = createContext({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme({
    typography: {
      fontFamily: ["Outfit", "sans-serif"].join(","),
    },
  }),
});

const ThemeContextProvider = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeContextProvider, useThemeContext };
