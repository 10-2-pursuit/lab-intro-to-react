import React from "react";
import Post from './Post.jsx';
import "/src/index.css";
function Posts(){
    return (
        <div className="Posts">
            <h2>Posts</h2>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;