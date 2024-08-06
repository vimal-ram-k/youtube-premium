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
    <div
      className="custom-scrollbar d-none d-md-inline col-1 py-2 px-3 col-lg-3 col-xxl-2 flex flex-column"
      style={{ maxWidth: "250px", minWidth: "100px" }}
    >
      <ul className=" p-0 list-group-flush border-bottom   ">
        {data.sidebarpages.map((items) => {
          return <Mainside img={items.img} name={items.name} />;
        })}
      </ul>
      <UserRelatedSideBars />
      <div className=" d-none d-lg-block">
        <SubcriptionList />
        <Explore />
        <Mfyoutube />
        <Configure />
        <SidebarFooter />
      </div>
    </div>
  );
}
export default Sidebars;
