import { Link } from "react-router-dom";
import Mainside from "./mainside";
import data from "./sidebar-data.json";
import { UserRelatedSideBars } from "./userrelatedsidebars";
import { SubcriptionList } from "./subcriptionlist";
import { Explore } from "./explore";
import { Mfyoutube } from "./morefromyoutube";
import { Configure } from "./confidure";
import { SidebarFooter } from "./sidebarfooter";

function Sidebars() {
  return (
    <div className="custom-scrollbar d-none d-md-inline col-2 mt-3 border-bottom py-2 col-lg-3 col-xl-2 d-flex flex-column overflow-scroll navbar-nav-scroll">
      <ul className=" p-0 list-group-flush border-bottom   ">
        {data.sidebarpages.map((items) => {
          return <Mainside img={items.img} name={items.name} />;
        })}
      </ul>
      <UserRelatedSideBars />
      <SubcriptionList />
      <Explore />
      <Mfyoutube />
      <Configure />
      <SidebarFooter />
    </div>
  );
}
export default Sidebars;
