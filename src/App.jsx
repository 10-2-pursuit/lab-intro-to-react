import React from "react";
import Contacts from "./Components/Contacts";
import UserCard from "./Components/ContactUserCard";
import NavBar from "./Components/NavBar";
import Post from "./Components/Post";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import "./index.css";

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
    <div class="container">
      <div class="box" id="one" >
        <UserProfile/>
      </div>
      <div class="box">
        <Contacts/>
      </div>
      <div class="box">
        <Posts/>
      </div>
     
    </div>
    </div>
  )
}

export default App;
