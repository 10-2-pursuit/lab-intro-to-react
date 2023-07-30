import React from "react";
import Post from "./Post";
// import "./posts.css";

const Posts = () => {
  return (
    <footer className="post">
      <div>
        <h1>Posts</h1>
        <div className="titled">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </footer>
  );
};

export default Posts;
