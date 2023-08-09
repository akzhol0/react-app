import React from "react";
import styles from './MySelect.module.css';

const MySelect = ({options, defaultValue, value, onChangeInput}) => {
  return (
    <div>
      <select value={value} onChange={e => onChangeInput(e.target.value)}>
        <option disabled={true} value=''>{defaultValue}</option>
        {options.map(option => (
          <option key={option.id} value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
