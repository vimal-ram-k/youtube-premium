import React from "react";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navigationbar/navbar.tsx";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navbar />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER}></RouterProvider>
  </React.StrictMode>
);
