import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import SignUp from "./pages/SignUp";
import Prompt from "./components/Prompt";
import Login from "./pages/Login";
import MainLayout from "./components/layout/MainLayout";
import ChatScreen from "./pages/ChatScreen";
import ChatBoxLayout from "./components/layout/ChatBoxLayout";
import LoginSignupLayout from "./components/layout/LoginSignupLayout";
import Keyboard from "./pages/keyboard";
import Voice from "./pages/Voice";
import GraphCreate from "./pages/GraphCreate";
import { MagicPen } from "./pages/MagicPen";
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
      {
        path: "/",
        element: <ChatBoxLayout />,
        children: [{ path: "/keyboard", element: <Keyboard /> }],
      },
      {
        path: "/",
        element: <ChatBoxLayout />,
        children: [{ path: "/voice", element: <Voice /> }],
      },
      {
        path: "/",
        element: <ChatBoxLayout />,
        children: [{ path: "/graphCreate", element: <GraphCreate /> }],
      },
      {
        path: "/",
        element: <ChatBoxLayout />,
        children: [{ path: "/magicPen", element: <MagicPen /> }],
      },
    ],
  },
  {
    path: "/",
    element: <LoginSignupLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

export default privateRouter;