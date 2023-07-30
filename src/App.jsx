import React from "react";
import "./Components/app.css";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import UserProfile from "./Components/UserProfile";
import ContactUserCard from "./Components/ContactUserCard";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div>
      <NavBar />
      <ContactUserCard />
      <Posts />
      <Contacts />
      <UserProfile />
    </div>
  );
}

export default App;
