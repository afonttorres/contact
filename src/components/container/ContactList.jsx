import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/ContactComponent';


const ContactList = () => {

    const defaultContact = new Contact("Agnes", "Font", "agnesft5@gmail.com");

    return (
        <section>
            <ContactComponent contact={defaultContact}/>
        </section>
    );
};


export default ContactList;