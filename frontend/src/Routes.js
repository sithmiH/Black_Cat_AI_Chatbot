import React,{useEffect} from "react";
import { Navigate, createBrowserRouter,RouterProvider, Router} from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";

const privateRouter = createBrowserRouter([

    {
        path:"/",
        element: <Home/> 
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<SignUp/>
    }
    
])

export default privateRouter;