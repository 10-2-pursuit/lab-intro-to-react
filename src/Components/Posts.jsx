import React from "react";
import Post from "./Post";

const Posts = () => {
    return (
        <div className="posts">
            <h1>Posts</h1>
            <ul>
                <Post/>
                <Post/>
                <Post/>
            </ul>
        </div>
    )
}

export default Posts;