import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Contacts from "./Components/Contacts";

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
        <section className="contacts">
          <Contacts />
        </section>
      </main>
    </>
  );
}

export default App;
