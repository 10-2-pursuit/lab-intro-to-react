import React from 'react';
import ContactUserCard from './ContactUserCard';

const Contacts = () => {
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
