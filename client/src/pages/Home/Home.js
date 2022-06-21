import "./Home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import API from "../../api";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // console.log("home>>>>>>>>>", search);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await API.get("/posts" + search);
      // console.log("result", res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
