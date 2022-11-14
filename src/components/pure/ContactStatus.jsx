import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactStatus = ({ contact, toggleStatus }) => {

    const defineStyle = () => contact.isConnected ? "connected" : 'disconnected'

    return (
        <div id='status' onClick={() => toggleStatus(contact)} className={defineStyle()}></div>
    );
};


ContactStatus.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    toggleStatus: PropTypes.func.isRequired
};


export default ContactStatus;
