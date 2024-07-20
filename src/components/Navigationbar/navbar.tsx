import { useState } from "react";
import data from "./navbar-data.json";
import "./navbar.css";
import Searchbar from "../Searchbar/searchbar";

function Navbar() {
  return (
    <div className="navigationbar">
      <section className="outer  d-flex align-items-center p-1">
        <div
          className=" container-fluid  d-flex align-items-center column-gap-1"
          tabIndex={1}
        >
          <img src={data.logo} width={40} alt="" tabIndex={1} />
          <h1 className="main-header m-0" tabIndex={1}>
            YouTube
          </h1>
        </div>
        <div className="d-flex align-items-center column-gap-4 ">
          <button
            className=" btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <img src={data["search-logo"]} width={30} alt="" className="" />
          </button>
          <div className="user-logo"></div>
        </div>
      </section>
      <Searchbar />
    </div>
  );
}

export default Navbar;
