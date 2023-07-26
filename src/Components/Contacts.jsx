import React from 'react';
import ContactUserCard from './ContactUserCard';

const Contacts = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactUserCard key={index} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
