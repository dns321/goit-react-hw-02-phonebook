import React from 'react';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      className={style.inputFilter}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

export default Filter;
