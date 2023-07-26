import React from "react";
import "../index.css";
import ContactUserCard from "./ContactUserCard";

function  Contacts() {
    return (
        <div id="contacts">
            <h3>Contacts</h3>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
            <ContactUserCard/>
        </div>
    )
}

export default Contacts