import { Link } from "react-router-dom";
import data from "./sidebar-data.json";
import Mainside from "./mainside";
export const Mfyoutube = () => {
  return (
    <div className=" border-bottom">
      <ul className=" p-0 list-group-flush ">
        <li className=" btn btn-sm border-0 disabled">
          <Link
            to="/"
            className=" text-decoration-none text-black btn  py-2 d-flex align-items-center justify-content-lg-start justify-content-center column-gap-lg-2 rounded-3  "
          >
            <h1 className=" fw-bold fs-6 m-0 d-none d-lg-block ">
              More from YouTube
            </h1>
          </Link>
        </li>
        {data.MFyoutube.map((items) => {
          return (
            <Mainside img={items.img} name={items.name} channel_logo={true} />
          );
        })}
      </ul>
    </div>
  );
};
