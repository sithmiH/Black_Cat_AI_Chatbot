import React from "react";
import { Outlet } from "react-router-dom";
import LoginSignupHeader from "../LoginSignupHeader";
import Footer from "../Footer";
const LoginSignupLayout = () => (
  <>
    <LoginSignupHeader />
    <Outlet />
    <Footer />
  </>
);

export default LoginSignupLayout;
