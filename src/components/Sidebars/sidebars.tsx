import Mainside from "./mainside";
import data from "./sidebar-data.json";

function Sidebars() {
  return (
    <div className=" col-lg-2 mt-3 border-bottom py-2">
      <ul className=" p-0 list-group-flush ">
        {data.sidebarpages.map((items) => {
          return <Mainside img={items.img} name={items.name} />;
        })}
      </ul>
    </div>
  );
}
export default Sidebars;
