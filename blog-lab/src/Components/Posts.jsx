import React from "react";
import Post from "./Post"
import "./Posts.css"

function Posts() {
    return (
        <div className="posts">
            <p className="posts-title">Posts</p>
            <Post />
            <Post />
            <Post />
        </div>
    )
}


export default Posts