import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {

    return (
        <div>
            <p>{contact.name}</p>
            <p>{contact.surname}</p>
            <p>{contact.email}</p>
            <p>Contacto {contact.isConnected ? "En línia" : "No conectado"}</p>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ContactComponent;
