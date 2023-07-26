import React from "react";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import NavBar from "./Components/NavBar";
import "./index.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NavBar />
          </div>
        </div>

        <UserProfile />
        <Posts />
      </div>
    </>
  );
}

export default App;
