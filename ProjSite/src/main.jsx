import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './routes/Login/Login.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App  />,
  },
  {
    path: "/account",
    element: <Login />
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
