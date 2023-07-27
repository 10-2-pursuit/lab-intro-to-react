import Post from "./Post";
const Posts = () => {
  return (
    <div className="container">
      <h2>Posts</h2>
      <ul>
        <Post />
        <Post />
        <Post />
      </ul>
    </div>
  );
};
export default Posts;
