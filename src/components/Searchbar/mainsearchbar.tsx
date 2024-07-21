function Mainsearchbar() {
  return (
    <>
      <div className=" border d-none d-md-flex justify-content-between align-items-center col-7 rounded-5  ps-3 py-0">
        <div className=" d-flex align-items-center column-gap-2" id="searchbar">
          <input
            type="text"
            name=""
            id="searchbar"
            placeholder="Search "
            className=" border-0 h-100"
          />
        </div>
        <button className=" btn bg-body-secondary rounded-end-5 px-4 border border-1">
          <i className="  bi  bi-search"></i>
        </button>
      </div>
    </>
  );
}

export default Mainsearchbar;
