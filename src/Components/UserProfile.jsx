import React from 'react';
import ProfilePicture from "../profile.png"

const UserProfile = () => {
    return (
        <div>
            <img src={ ProfilePicture }></img>
            <div> 
                <h1>name</h1>
                <h2> job title</h2>
                <p>lorem ipsum</p>
            </div>
        </div>
        
    );
}

export default UserProfile;
