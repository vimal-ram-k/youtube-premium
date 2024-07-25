import Mainside from "./mainside";
import data from "./sidebar-data.json";

function Sidebars() {
  return (
    <div className=" d-none d-md-inline col-2 mt-3 border-bottom py-2 col-lg-3 col-xl-2">
      <ul className=" p-0 list-group-flush ">
        {data.sidebarpages.map((items) => {
          return <Mainside img={items.img} name={items.name} />;
        })}
      </ul>
    </div>
  );
}
export default Sidebars;
