import { Link } from "react-router-dom";
import data from "./sidebar-data.json";
import Mainside from "./mainside";

export const SubcriptionList = () => {
  return (
    <div className=" border-bottom">
      <ul className=" p-0 list-group-flush ">
        <h1 className=" fs-5 fw-bold p-2">Subcription</h1>
        {data.subcriptionlist.map((items) => {
          return (
            <Mainside img={items.channel_logo} name={items.channel_name} />
          );
        })}
      </ul>
    </div>
  );
};
