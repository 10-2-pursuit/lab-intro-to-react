import React from "react";
import ContactUserCard from "./ContactUserCard";
// import "./app.css"

const Contacts = () => {
  return (
    <footer className="contact">
      <div>
        <h1>Contacts</h1>
      </div>
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
    </footer>
  );
};

export default Contacts;
