import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.module.css';

const RadioButton = ({
  name,
  valueList,
  isDisabled,
  value,
  checked,
  onSelectionChange
}) => {
  console.log("v:  ----" + value);
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
              console.log(v, value, v === inputValue);
              setInputValue(e.target.value.toString());
              onSelectionChange(e.target.value.toString());
              // console.log(e.target.value.toString());
              // console.log(inputValue);
              
            }}
            checked={v === inputValue.toString()}
             />{v.toString()}
        </>
      ))
    }
  </div>
)};


RadioButton.propTypes = {};

RadioButton.defaultProps = {};

export default RadioButton;
