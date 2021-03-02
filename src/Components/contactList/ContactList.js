import React from 'react';
import style from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={style.itemContact}>
        {name}: {number}
        <button
          className={style.itemContactBtn}
          type="button"
          onClick={() => deleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
