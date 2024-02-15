import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CheckBox.module.css';

const CheckBox = ({isChecked, id, onSelectChange}) => {
  
  let [inputValue, setInputValue] = useState(isChecked)
  return (
  <div className={styles.CheckBox}>
    <input 
    id={id} 
    type='checkbox'
    checked = {isChecked}
    onChange={(e) => {
      setInputValue(e.target.checked);
      onSelectChange(e.target.checked);
    }}
    ></input>
  </div>
)};

CheckBox.propTypes = {};

CheckBox.defaultProps = {};

export default CheckBox;
