import React from "react";
import "./index.css";
import UserProfile from './Components/UserProfile'
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";

function App() {
  return ( 
    <div>
      <UserProfile />
      <Contacts />
      <Posts />
    </div>
    )
}

export default App;
