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
        resetInput();
    }

    const resetInput = () => {
        setContactData(contact);
    }

    const defineLabelStle = (field) => {
        return contactData[field].length > 0 && contactData[field] !== '' ? 'filled' : '';
    }

    return (
        <form className='col' onSubmit={add}>
            <h3>Add a new contact!</h3>
            {Object.keys(contactData).map((field, key) => (
                <div key={key} className='form-control col'>
                    <input
                        value={contactData[field]}
                        type={field === 'email' ? 'email' : 'text'}
                        onChange={(e) => setContactData({ ...contactData, [field]: e.target.value })}
                    />
                    <label htmlFor={field}
                        className={defineLabelStle(field)}
                    >{field}</label>
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
