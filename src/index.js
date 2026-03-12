import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import  Home from "./pages/home";
import  Html from "./pages/html";
import  Css from "./pages/css";
import  Js from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/js",
    element: <Js />,
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


