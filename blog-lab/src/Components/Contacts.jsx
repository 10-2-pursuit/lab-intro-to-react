import React from "react";
import "./Contacts.css";
import ContactUserCard from "./ContactUserCard";

function Contacts() {
  return (
    <div className="contacts">
        <p className="contacts-title">Contacts</p>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </div>
  );
}

export default Contacts;
