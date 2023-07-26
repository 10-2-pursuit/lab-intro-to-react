import React from "react";
import Pic from "../profile.png"

const UserProfile = () => {
    return (
        <div class="user">
            <img src={Pic} alt="picture" />
            <h3>Jordan Walker</h3>
            <h4>React Creator</h4>
            <p>Lorem Ipsem</p>
        </div>
    )
}

export default UserProfile;