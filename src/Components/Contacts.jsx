import React from 'react';
import ContactUserCard from './ContactUserCard';

const Contacts = () => {
    console.log(`this is ${import.meta.env.VITE_KEY}`)
    return (
        <div className='contactList'> 
            <ul>
                <h2>Contacts</h2>
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </ul>
        </div>
    );
}

export default Contacts;
