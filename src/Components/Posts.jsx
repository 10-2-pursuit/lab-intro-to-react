import React from 'react';
import Post from './Post';

const Posts = () => {
    return (
        <div className='postHolder'>
            <h4>Posts</h4>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;
