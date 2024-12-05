import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "@mui/material";

const MainLayout = () => (
  <>
    <Header />
    <Container component="main" sx={{ flex: 1, py: 3, textAlign: "center" }}>
      <Outlet />
    </Container>
    <Footer />
  </>
);

export default MainLayout;
