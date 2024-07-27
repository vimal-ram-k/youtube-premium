import React from "react";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/home.tsx";
import { Shorts } from "./pages/shorts.tsx";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shorts",
        element: <Shorts />,
      },
      {
        path: "/subcriptions",
        element: <h1 className=" col-auto"></h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER}></RouterProvider>
  </React.StrictMode>
);
