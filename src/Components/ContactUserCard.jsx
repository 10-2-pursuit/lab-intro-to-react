import React from "react";

const UserCard = ({name, role, bio}) => {
    return (
        <div className="user-contact-card">
            <img src="./src/profile.png" alt="profile-photo" />
            <div>
            <h1>{name}</h1>
            <h2>{role}</h2>
            <p>{bio}</p>
            </div>
        </div>
    )
}
export default UserCard;