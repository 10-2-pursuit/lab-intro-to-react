import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <UserProfile />
          <Posts />
        </section>
      </main>
    </>
  );
}

export default App;
