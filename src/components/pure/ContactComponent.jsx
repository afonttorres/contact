import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactStatus from './ContactStatus';


const ContactComponent = ({ contact, toggleStatus, removeContact }) => {

    return (
        <article className='contact'>
            <ContactStatus contact={contact} toggleStatus={toggleStatus} />
            <p>{contact.name}</p>
            <p>{contact.surname}</p>
            <p>{contact.email}</p>
            <i onClick={() => removeContact(contact)} id='delete-icon' className="bi bi-trash3-fill"></i>
        </article>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    toggleStatus: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired
};


export default ContactComponent;
