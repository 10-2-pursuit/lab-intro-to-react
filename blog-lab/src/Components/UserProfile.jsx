import React from "react";
import "./UserProfile.css";

function UserProfile() {
    return (
        <div className="user-profile">
            <img src="/src/assets/profile.png" />
            <div className="user-info">
            <p className="user">Jordan Walke</p>
            <p className="title">React Creator</p>
            <p className="description">Lorem ipsum</p>
            </div>
        </div>
    )
}


export default UserProfile