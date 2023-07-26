import React from 'react';
import ContactUserCard from './ContactUserCard';

const Contacts = () => {
    return (
        <>
            <h2>Contacts</h2>
            <ul>
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
                <ContactUserCard />
            </ul>
        </>
    );
}

export default Contacts;
