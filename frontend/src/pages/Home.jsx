import React from "react";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "@mui/material";

export const Home = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        {/* Main content goes here */}
        <h1>Welcome to Black Cat AI</h1>
      </Container>
      <Footer />
    </div>
  );
};
