import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.module.css';

const RadioButton = ({
  name,
  valueList,
  isDisabled,
  value,
  onSelectionChange
}) => {
  let [inputValue, setInputValue] = useState(value);
  return (
  <div className={styles.RadioButton}>
    {
      valueList.map(v => (
        <>
          <input type="radio"
            disabled={isDisabled}
            value={v.toString()}
            name={name}
            key={v.toString()}
            onChange ={(e) => {
              setInputValue(e.target.value.toString());
              onSelectionChange(e.target.value.toString());
              
            }}
            checked={v === inputValue.toString()}
             /><span>{v.toString().toUpperCase()}</span>
        </>
      ))
    }
  </div>
)};


RadioButton.propTypes = {};

RadioButton.defaultProps = {};

export default RadioButton;
