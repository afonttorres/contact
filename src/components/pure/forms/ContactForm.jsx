import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({ addContact }) => {

    const contact = {
        name: '', surname: '', email: ''
    }

    const [contactData, setContactData] = useState(contact);

    const add = (e) => {
        e.preventDefault();
        let { name, surname, email } = contactData;
        addContact(new Contact(name, surname, email));
    }

    const moveLabel = (field) => {
        return contactData[field].length > 0 && contactData[field] !== '' ? 'placehold' : 'above';
    }

    return (
        <form className='col' onSubmit={add}>
            {Object.keys(contactData).map((field, key) => (
                <div key={key} className='form-control col'>
                    <input
                        value={contactData[field]}
                        type={field === 'email' ? 'email' : 'text'}
                        onChange={(e) => setContactData({ ...contactData, [field]: e.target.value })}
                    />
                    <label htmlFor={field} >{field}</label>
                </div>
            ))}
            <button type='submit'>ADD</button>
        </form>
    );
};


ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
};


export default ContactForm;
