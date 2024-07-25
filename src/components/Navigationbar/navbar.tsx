import data from "./navbar-data.json";
import "./navbar.css";
import Searchbar from "../Searchbar/searchbar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className=" outer  navbar d-flex justify-content-between p-0 px-3">
        <ul className=" list-group-horizontal m-0 p-0 d-flex align-items-center  column-gap-2">
          <li className=" list-group-item nav-item d-none d-md-inline-block">
            <i className=" bi bi-list" style={{ fontSize: "2rem" }}></i>
          </li>
          <li className=" ist-group-item nav-item ">
            <Link
              to={"/"}
              className=" d-flex align-items-center column-gap-2 text-decoration-none text-black"
            >
              <img src={data.logo} width={30} alt="" />
              <h1 className=" m-0 main-header fs-6 fw-light">Youtube</h1>
            </Link>
          </li>
        </ul>
        <Searchbar />
        <div className="">
          <ul className=" list-group-horizontal  p-0 m-0 d-flex align-items-center column-gap-4">
            <li className="ist-group-item nav-item d-none d-md-block">
              <i
                className=" bi bi-camera-video"
                style={{ fontSize: "1.5rem" }}
              ></i>
            </li>
            <li className="ist-group-item nav-item d-none d-md-block">
              <i className=" bi bi-bell" style={{ fontSize: "1.5rem" }}></i>
            </li>
            <li className="ist-group-item nav-item d-md-none">
              <button
                className=" btn p-0  bg-transparent"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <img src={data["search-logo"]} width={25} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
