import React from "react";

import { Box, Container, Typography, Paper } from "@mui/material";
import { Element2 } from "iconsax-react";
import { Outlet } from "react-router-dom";

const ChatBoxLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <Box sx={{}}>
        <Element2 color="#000" />
      </Box>
      <Container
        sx={{
          flex: 1,
          textAlign: "center",
        }}
        maxWidth="md"
      >
        <Outlet />
      </Container>
    </Box>
  );
};

export default ChatBoxLayout;
