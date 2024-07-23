import { Link } from "react-router-dom";
import "./sidebar.css";

type item = {
  img: string;
  name: string;
};

function Mainside(props: item) {
  return (
    <div>
      <li className="">
        <Link
          to="/"
          className=" text-decoration-none text-black  btn  px-5 py-2 list-group-item d-flex align-items-center column-gap-4 rounded-3  "
        >
          <i className={`bi  ${props.img}`} style={{ fontSize: "1.2rem" }}></i>
          <h1 className=" fw-light fs-6 m-0">{props.name}</h1>
        </Link>
      </li>
    </div>
  );
}

export default Mainside;
