import { Link } from "react-router-dom";
import Mainside from "./mainside";
import data from "./sidebar-data.json";
import "./sidebar.css";
import { UserRelatedSideBars } from "./userrelatedsidebars";
import { SubcriptionList } from "./subcriptionlist";

function Sidebars() {
  return (
    <div className="custom-side-width d-none d-md-inline mt-3 py-2 ">
      <div>
        <ul className=" p-0  border-bottom  list-group-flush ">
          {data.sidebarpages.map((items) => {
            return <Mainside img={items.img} name={items.name} />;
          })}
        </ul>
        <UserRelatedSideBars />
        <SubcriptionList />
      </div>
    </div>
  );
}
export default Sidebars;
