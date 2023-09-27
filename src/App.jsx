import React from "react";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";
import "./index.css";

function App() {
  return(
    <div className="App">
    <div className="navbar">
      <NavBar />
    </div>
    <main className="container">
    <div className="userprofile">
      <UserProfile />
      <Posts />
    </div>
    <div className="contacts">
      <Contacts />
    </div>
    </main>
    </div>
  );
}

export default App;
