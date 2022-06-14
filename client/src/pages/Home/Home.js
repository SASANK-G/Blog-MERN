import "./Home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router";

function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
