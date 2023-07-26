import React from 'react';

const ContactUserCard = ({ contact }) => {
  return (
    <div>
      <img src={contact.profilePicture} alt={contact.name} />
      <p>{contact.name}</p>
    </div>
  );
};

export default ContactUserCard;
