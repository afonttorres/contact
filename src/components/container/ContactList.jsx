import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/ContactComponent';
import ContactForm from '../pure/forms/ContactForm'


const ContactList = () => {

    const createDefaultContact = (i) => {
        return new Contact(
            `Name ${i}`, `Surname ${i}`, `email${i}@gmail.com`
        )
    }

    const defaultContacts = new Array(5).fill(null).map((e, i) => createDefaultContact(i + 1));
    const [contacts, setContacts] = useState(defaultContacts);

    //METHODS
    const toggleStatus = (contact) => {
        let tempContacts = [...contacts];
        tempContacts[contacts.indexOf(contact)].isConnected = !contact.isConnected;
        setContacts(tempContacts)
    }

    const removeContact = (contact) => {
        setContacts(contacts.filter((c, i) => i !== contacts.indexOf(contact)))
    }

    const addContact = (contact) => {
        let tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <main className='main-cont col'>
            <h1 className='title' >YOUR CONTACTS</h1>
            <section className='contact-list col'>
                {contacts.map((contact, key) => (
                    <ContactComponent
                        key={key}
                        contact={contact}
                        toggleStatus={toggleStatus}
                        removeContact={removeContact}
                    />
                ))}
            </section>
            <ContactForm addContact={addContact} />
        </main>
    );
};


export default ContactList;