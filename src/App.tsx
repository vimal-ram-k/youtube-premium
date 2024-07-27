import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navigationbar/navbar";
import { lazy, useEffect, useState } from "react";
const Sidebars = lazy(() => import("./components/Sidebars/sidebars"));

function App() {
  const [online, setOnline] = useState<boolean>(true);

  useEffect(() => {
    function setOfflineStatus() {
      setOnline(false);
    }
    function setOnlineStatus() {
      setOnline(true);
    }
    window.addEventListener("online", setOnlineStatus);
    window.addEventListener("offline", setOfflineStatus);

    return () => {
      window.removeEventListener("offline", setOfflineStatus);
      window.removeEventListener("online", setOnlineStatus);
    };
  });

  if (!online)
    return (
      <div style={{ height: "100dvh" }}>
        <div
          className=" d-flex flex-column border border-3 justify-content-center align-items-center "
          style={{ height: "100dvh" }}
        >
          <i className=" bi spinner-border"></i>
          <h1>Please check your network</h1>
        </div>
      </div>
    );
  return (
    <div className="main-app">
      <Navbar />
      <div className=" row">
        <Sidebars />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
