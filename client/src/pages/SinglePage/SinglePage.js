import "./SinglePage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";
import React from "react";

export default function SinglePage() {
  return (
    <div className="singlePage">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
