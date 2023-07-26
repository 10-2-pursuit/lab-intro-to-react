import React from "react";
import "./index.css";

import NavBar from './Components/NavBar.jsx';
import UserProfile from './Components/UserProfile.jsx';
import Contacts from "./Components/Contacts.jsx";
import Posts from "./Components/Posts.jsx";

function App() {
  return(
  <>
    <NavBar />
    <UserProfile />
    <Posts />
    <Contacts />
  </>
      
    
  );
}

export default App;
