import React from "react";
import "./index.css";
import Header from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div>
      <Header />
      <div class="content">
      <UserProfile />
      <Posts />
      <Contacts />
      </div>
    </div>
  )
}

export default App;
