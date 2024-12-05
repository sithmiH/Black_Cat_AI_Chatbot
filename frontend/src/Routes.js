import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import Prompt from "./components/Prompt";
import { Login } from "./pages/Login";
import MainLayout from "./components/layout/MainLayout";
import ChatScreen from "./pages/ChatScreen";
import ChatBoxLayout from "./components/layout/ChatBoxLayout";

const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/prompt", element: <Prompt /> },
      {
        path: "/chat",
        element: <ChatBoxLayout />,
        children: [{ path: "/chat", element: <ChatScreen /> }],
      },
    ],
  },
  {
    path: "/",
    // element: <LoginSignupLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

export default privateRouter;
