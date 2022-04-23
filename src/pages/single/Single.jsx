import SideBar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <div className="leftSpace">

      </div>
      <div className="singlePostContainer">
        <SinglePost />
      </div>
      <div className="betweenSpace">

      </div>
      <div className="sidebarContainer">
        <SideBar />
      </div>
      <div className="rightSpace">

      </div>
    </div>
  );
}
