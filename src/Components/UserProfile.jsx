import React from "react";
import Pic from "../profile.png"

const UserProfile = () => {
    return (
        <li>
            <img src={Pic} alt="picture" />
            <h2>Jordan Walker</h2>
            <h3>React Creator</h3>
            <p>Lorem Ipsem</p>
        </li>
    )
}

export default UserProfile;