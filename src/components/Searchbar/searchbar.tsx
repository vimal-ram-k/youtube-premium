import "./searchbar.css";
import data from "./search-data.json";
import data1 from "../Navigationbar/navbar-data.json";
import Mainsearchbar from "./mainsearchbar";
import { useEffect } from "react";
import  { Modal } from "bootstrap";

function Searchbar() {
  useEffect(() => {
    function AutoHideModal() {
      if (window.innerWidth > 768) {
        const searchbarModalElement = document.getElementById("staticBackdrop");

        if (searchbarModalElement) {
          const searchbar =
            Modal.getInstance(searchbarModalElement) ||
            new Modal(searchbarModalElement);
          searchbar.hide();
        }
      }
    }
    window.addEventListener("resize", AutoHideModal);

    return () => {
      window.removeEventListener("resize", AutoHideModal);
    };
  }, []);

  return (
    <>
      <Mainsearchbar />
      <div
        className="modal modal-fullscreen d-lg-none"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  p-0 m-0">
          <div className="modal-content">
            <div className="modal-header p-2 m-0 row d-flex justify-content-between  ">
              <button className="btn btn-sm col-1" data-bs-dismiss="modal">
                <img src={data.arrow} width={30} alt="" />
              </button>
              <div className=" d-flex align-items-center justify-content-between col-8 row-1 bg-secondary-subtle  rounded-5  ">
                <button className=" btn btn-sm  btn-outline-dark border-0   bg-transparent">
                  <input
                    type="text"
                    placeholder="Search YouTube"
                    className=" border-0 inp-btn bg-transparent"
                  />
                </button>
                <button className=" btn btn-sm bg-transparent ">
                  <img src={data1["search-logo"]} width={30} alt="" />
                </button>
              </div>
              <button className="btn btn-sm d-flex justify-content-center  col-1 bg-secondary-subtle rounded-5">
                <img src={data.mic} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
