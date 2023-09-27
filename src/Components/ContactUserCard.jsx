import React from 'react'

const ContactUserCard = () => {
    return (
        <div className="contact-user-card">
            <img src="../../build/assets/profile.png" alt="profile image" />
            <div className="contact-user-info">
            <h5 className='contact-user-name'>Jordan Walke</h5>
            <h6 className='contact-user-title'>React Creator</h6>
            <p className='contact-user-message'>Lorem ipsum dolor</p>
            </div>
        </div>
    )
}

export default ContactUserCard