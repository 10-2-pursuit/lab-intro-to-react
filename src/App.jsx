import React from "react";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import "./index.css";


function App() {
  return (
    <>
      <h1>Hello, world!</h1>
      <NavBar />
      <UserProfile />
      <Posts />
    </>
  );
}

export default App;
