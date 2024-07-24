import { Link } from "react-router-dom";

export const ProfileHeader = () => {
  return (
    <div className=" toast-header">
      <div className="d-flex flex-column ps-5">
        <h1 className=" fs-5 text-black">VIMAL RAM K</h1>
        <h3 className=" fs-6">@vimalramk907</h3>
        <Link to="/" className=" fs-6">
          View Your Channel
        </Link>
      </div>
    </div>
  );
};
