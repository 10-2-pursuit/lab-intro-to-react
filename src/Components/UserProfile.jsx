import React from "react";

const UserProfile = () => {
    return (
        <div className="user-profile">
            <img src="./src/profile.png" alt="profile-photo" />
            <div>
            <h1>Full Name</h1>
            <h2>Job title</h2>
            <p>Bio info</p>
            </div>
        </div>
    )
}

export default UserProfile;