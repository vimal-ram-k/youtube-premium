import Mainside from "./mainside";
import data from "./sidebar-data.json";
import "./sidebar.css";

function Sidebars() {
  return (
    <div className="custom-side-width d-none d-md-inline mt-3 border-bottom py-2 ">
      <ul className=" p-0 list-group-flush ">
        {data.sidebarpages.map((items) => {
          return <Mainside img={items.img} name={items.name} />;
        })}
      </ul>
    </div>
  );
}
export default Sidebars;
