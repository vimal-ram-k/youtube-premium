import { Link } from "react-router-dom";
import data from "./sidebar-data.json";
import Mainside from "./mainside";

export const UserRelatedSideBars = () => {
  return (
    <div className=" border-bottom">
      <ul className=" p-0 list-group-flush ">
        <li className="">
          <Link
            to="/"
            className=" text-decoration-none text-black btn  py-2 d-flex align-items-center justify-content-lg-start justify-content-center column-gap-lg-2 rounded-3  "
          >
            <h1 className=" fw-light fs-6 m-0 d-none d-lg-block">You</h1>
            <i className="bi bi-chevron-right" style={{ fontSize: "1rem" }}></i>
          </Link>
        </li>
        {data.sidebaryou.map((items) => {
          return <Mainside img={items.img} name={items.name} />;
        })}
      </ul>
    </div>
  );
};
