import "./SinglePage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";

export default function SinglePage() {
  return (
    <div className="singlePage">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
