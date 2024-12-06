import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import SignUp from "./pages/SignUp";
import Prompt from "./components/Prompt";
import Login from "./pages/Login";
import MainLayout from "./components/layout/MainLayout";
import ChatScreen from "./pages/ChatScreen";
import ChatBoxLayout from "./components/layout/ChatBoxLayout";
import UploadScreen from "./pages/UploadScreen";
import LoginSignupLayout from "./components/layout/LoginSignupLayout";
import GraphGenerate from "./pages/GraphGenerate";
import EditScreen from "./pages/EditScreen";

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
        children: [
          { path: "/chat", element: <ChatScreen /> },
          { path: "/chat/upload", element: <UploadScreen /> },
          { path: "/chat/GraphGenerate", element: <GraphGenerate /> },
          { path: "/chat/edit", element: <EditScreen /> },
        ],
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
