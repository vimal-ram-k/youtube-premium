import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navigationbar/navbar";

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
