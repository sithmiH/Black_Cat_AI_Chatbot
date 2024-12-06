import React, { createContext, useState, useContext } from "react";
import { Box, Container, IconButton } from "@mui/material";
import { Element2, Moon } from "iconsax-react";
import { Outlet } from "react-router-dom";
import SidePanel from "../SidePanel";
import { useThemeContext } from "../../contexts/themeContext";

// Create context
export const SidePanelContext = createContext();

export const SidePanelProvider = ({ children }) => {
  const [showPanel, setShowPanel] = useState(false);
  return (
    <SidePanelContext.Provider value={{ showPanel, setShowPanel }}>
      {children}
    </SidePanelContext.Provider>
  );
};

export const useSidePanel = () => {
  const context = useContext(SidePanelContext);
  if (!context) {
    throw new Error("useSidePanel must be used within a SidePanelProvider");
  }

  return context;
};

const ChatBoxLayout = () => {
  const { mode, toggleColorMode } = useThemeContext();
  const { showPanel, setShowPanel } = useContext(SidePanelContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100%",
          position: "absolute",
          left: 0,
          zIndex: 2,
        }}
      >
        {!showPanel && (
          <>
            <IconButton onClick={() => setShowPanel(true)}>
              <Element2 color={mode === "light" ? "#000" : "#FFF"} />
            </IconButton>
            <IconButton color="primary" onClick={toggleColorMode}>
              <Moon color={mode === "light" ? "#000" : "#511956"} />
            </IconButton>
          </>
        )}
      </Box>

      <Box
        sx={{
          position: "relative",
          left: 0,
          transform: showPanel ? "translateX(0)" : "translateX(-100%)",
          opacity: showPanel ? 1 : 0,
          transition: "all 0.3s ease-in-out",
          zIndex: 1,
        }}
      >
        <SidePanel />
      </Box>

      <Container
        sx={{
          flex: 1,
          textAlign: "center",
          transform: showPanel ? "translateX(0px)" : "translateX(-150px)",
          transition: "transform 0.3s ease-in-out",
        }}
        maxWidth="md"
      >
        <Outlet />
      </Container>
    </Box>
  );
};

// Wrap your app with SidePanelProvider
const App = () => {
  return (
    <SidePanelProvider>
      <ChatBoxLayout />
    </SidePanelProvider>
  );
};

export default App;
