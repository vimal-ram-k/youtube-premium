import data from "./navbar-data.json";
import "./navbar.css";
import Searchbar from "../Searchbar/searchbar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className=" outer  navbar d-flex justify-content-between p-0 px-3">
        <ul className=" list-group-horizontal m-0 p-0 d-flex align-items-center  column-gap-2">
          <li className=" list-group-item nav-item d-md-none">
            <i className=" bi bi-list" style={{ fontSize: "1.5rem" }}></i>
          </li>
          <li className="list-group-item nav-item ">
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
          <ul className=" list-group-horizontal  p-0 m-0 d-flex align-items-center column-gap-1">
            <li className="list-group-item nav-item d-none d-md-block">
              <button className=" btn">
                <i
                  className=" bi bi-camera-video"
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </button>
            </li>
            <li className="list-group-item nav-item d-none d-md-block">
              <button className=" btn">
                <i
                  className=" bi bi-bell   position-relative"
                  style={{ fontSize: "1.2rem" }}
                >
                  <span
                    className=" position-absolute translate-middle top-0 start-100 badge  rounded-5 bg-danger"
                    style={{ fontSize: ".7rem" }}
                  >
                    4
                  </span>
                </i>
              </button>
            </li>
            <li className="list-group-item nav-item d-md-none">
              <button
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="bi bi-search" style={{ fontSize: "1.2rem" }}></i>
              </button>
            </li>
            <li className=" list-group-item nav-item">
              <button className=" btn">
                <i
                  className=" bi bi-person-fill"
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
