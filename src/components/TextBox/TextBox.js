import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextBox.module.css';

const TextBox = ({value, onChange }) => {

  let [inputValue, setInputValue] = useState(value);
  return(
  

  <div className={styles.TextBox}>
    <input value={inputValue} onChange={(e) => {
      setInputValue(e.target.value);
      onChange(e.target.value);
    }} type='text'/>
  </div>
)};




TextBox.propTypes = {};

TextBox.defaultProps = {};

export default TextBox;
