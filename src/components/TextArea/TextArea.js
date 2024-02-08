import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextArea.module.css';

const TextArea = ({value, onChange }) => {
  let [inputValue, setInputValue] = useState(value);
  return (
  <div className={styles.TextArea}>
    <textarea value={inputValue} onChange={(e) => {
      setInputValue(e.target.value);
      onChange(e.target.value);
    }}/>
  </div>
)};

TextArea.propTypes = {};

TextArea.defaultProps = {};

export default TextArea;
