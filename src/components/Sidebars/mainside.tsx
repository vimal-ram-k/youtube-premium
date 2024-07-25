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
          className=" text-decoration-none text-black btn  py-2 d-flex align-items-center justify-content-lg-start justify-content-center column-gap-lg-4 rounded-3  "
        >
          <i className={`bi  ${props.img}`} style={{ fontSize: "1.2rem" }}></i>
          <h1 className=" fw-light fs-6 m-0 d-none d-lg-block">{props.name}</h1>
        </Link>
      </li>
    </div>
  );
}

export default Mainside;
