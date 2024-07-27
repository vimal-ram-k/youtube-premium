function Mainsearchbar() {
  return (
    <div className=" d-flex col-7 justify-content-center align-items-center column-gap-4">
      <div className=" border d-none d-md-flex justify-content-between col-8 align-items-center rounded-5  ps-3 py-0">
        <div className=" d-flex align-items-center column-gap-2" id="searchbar">
          <input
            type="text"
            name=""
            id="searchbar"
            placeholder="Search "
            className=" border-0 h-100"
          />
        </div>
        <button className=" btn bg-secondary-subtle rounded-end-5 px-4 border border-1">
          <i className="  bi  bi-search"></i>
        </button>
      </div>
      <button className=" btn rounded-5 bg-secondary-subtle">
        <i className=" bi  bi-mic-fill"></i>
      </button>
    </div>
  );
}

export default Mainsearchbar;
