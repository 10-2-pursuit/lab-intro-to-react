import React from 'react';
import ContactUserCard from './ContactUserCard';
const Contacts = () => {
    return (
        <div className='contactHolder'>
             <h5>Contacts</h5>
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
            <ContactUserCard />
        </div>
    );
}

export default Contacts;
