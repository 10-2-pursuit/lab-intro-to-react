import React from "react";
import UserCard from "./ContactUserCard";
import UserProfile from "./UserProfile";

const Contacts = () => {
    const Contacts = [
        {
            id:1,
            name:"Jordan Walke",
            role: "React Creator",
            bio:"Bio",
        },
        {
            id: 2,
            name: "Jordan Walke",
            role: "React Creator",
            bio: "Bio",
        },
        {
            id: 3,
            name: "Jordan Walke",
            role: "React Creator",
            bio: "Bio",
        },
        {
            id: 4,
            name: "Jordan Walke",
            role: "React Creator",
            bio: "Bio",
        },
    ]
    return (
        <div className="contacts">
            <h1>Contacts</h1>
            {/* <ul>
                <UserCard/>
            </ul> */}
            {Contacts.map(contact => {
                return <UserCard name={contact.name} role={contact.role} bio={contact.bio}/>;
            })
        }
        </div>
    )
}

export default Contacts;