import "./Posts.css";
import React from "react";
import Post from "../Post/Post";

function Posts({ posts }) {
  // console.log(">>>>>>>>>", posts);
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}

export default Posts;
