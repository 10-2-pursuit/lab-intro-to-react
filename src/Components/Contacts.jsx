import React from 'react';
import ContactUserCard from './ContactUserCard';


const Contacts = () => {
    return (
        <div className="contacts">
        <h1>Contacts</h1>
        <div className="contact">
           <ContactUserCard />
           <ContactUserCard />
           <ContactUserCard />
           <ContactUserCard />
        </div>
        </div>
    )
}

export default Contacts;