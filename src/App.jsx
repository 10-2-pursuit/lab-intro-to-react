import React from "react";
import "./index.css";
import UserProfile from './Components/UserProfile'
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";

function App() {
  return ( 
    <>
      <NavBar />
      <UserProfile />
      <Contacts />
      <Posts />
    </>
    )
}

export default App;
