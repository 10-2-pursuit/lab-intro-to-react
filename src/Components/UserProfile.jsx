import React from 'react';
import ProfilePicture from "../profile.png"

const UserProfile = () => {
    return (
        <div className = "profileId">
            <img src={ ProfilePicture }></img>
            <div> 
                <h1>Tonesha Rose </h1>
                <h2> Engineer</h2>
                <p>lorem ipsum</p>
            </div>
        </div>
        
    );
}

export default UserProfile;
