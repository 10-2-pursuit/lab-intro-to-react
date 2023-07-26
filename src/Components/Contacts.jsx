import React from "react";
import ContactUserCard from "./ContactUserCard.jsx";
import "/src/index.css";
function Contacts(){
    return (
        <div className="Contacts">
            <h2>Contacts</h2>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    );
}

export default Contacts;