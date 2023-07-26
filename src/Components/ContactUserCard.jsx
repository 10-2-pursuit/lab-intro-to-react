import React from "react";
import "/src/index.css";
function ContactUserCard(){
    return (
        <div className="ContactUserCard">
            <img src={"/src/profile.png"} />
            <div className="text_fields">
                <h1>John Doe</h1>
                <h2>Title</h2>
                <p>Lorem Ipsem</p>
            </div>
        </div>
    );
}

export default ContactUserCard;