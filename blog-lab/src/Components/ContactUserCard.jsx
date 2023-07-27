import React from "react";
import "./ContactUserCard.css"

function ContactUserCard() {
    return (
        <div className="contact-user-card">
            <img src="/src/assets/profile.png" />
            <div className="contact-user-info">
            <p className="contact-user-name">Jordan Walke</p>
            <p className="contact-title">React Creator</p>
            <p className="contact-description">Lorem ipsum</p>
            </div>
        </div>
    )
    }


export default ContactUserCard