import React from 'react';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
