import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './routes/Login/Login.jsx';
import Atendimento from './routes/Atendimento/Atendimento.jsx';
import History from './First_page/History.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/account",
    element: <Login />
  },
  {
    path: "/atendimento",
    element: <Atendimento />
  },
  {
    path: "history", //para apagar depois 
    element: <History />
  }
]);

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);