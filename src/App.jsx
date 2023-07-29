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
      <div className="box"  >
        <UserProfile/>
        <Posts/>
      </div>
      <div className="box" >
        <Contacts/>
     
      </div>
     
    </div>
    </div>
  )
}

export default App;
