import { Link } from "react-router-dom";
import "./sidebar.css";

type item = {
  img: string;
  name: string;
  channel_logo?: boolean;
};

function Mainside(props: item) {
  return (
    <div>
      <li className="">
        <Link
          to="/"
          className=" text-decoration-none text-black btn  py-2 d-flex align-items-center justify-content-lg-start justify-content-center column-gap-lg-4 rounded-3  "
        >
          {!props.channel_logo ? (
            <i
              className={`bi  ${props.img}`}
              style={{ fontSize: "1.2rem" }}
            ></i>
          ) : (
            <img
              src={props.img}
              width={30}
              className=" rounded-circle"
              alt=""
            />
          )}
          <h1
            className=" fw-light m-0 d-none d-lg-block"
            style={{ fontSize: "0.8rem" }}
          >
            {props.name}
          </h1>
        </Link>
      </li>
    </div>
  );
}

export default Mainside;
