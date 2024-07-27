import Mainside from "./mainside";
import data from "./sidebar-data.json";

export const Configure = () => {
  return (
    <div className=" border-bottom">
      <ul className=" p-0 list-group-flush ">
        <li className=" btn btn-sm border-0 disabled"></li>
        {data.configure.map((items) => {
          return <Mainside img={items.img} name={items.name} />;
        })}
      </ul>
    </div>
  );
};
