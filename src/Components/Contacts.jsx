import React from "react";
import UserCard from "./ContactUserCard";

const Contacts = () => {
    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                <UserCard/>
            </ul>
        </div>
    )
}

export default Contacts;