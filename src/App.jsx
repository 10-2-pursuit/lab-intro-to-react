import React from "react";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import "./index.css";

function App() {
  return (
    <div> 
      <UserProfile />
      <Contacts /> 
      <NavBar />
      <Posts />
    </div>
  )
  }

export default App;
