import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

const Dropdown = ({
  id,
  name,
  dropDownList,
  isDisabled
}) => {
  const [ddList, setDdList] = useState(dropDownList);

  return (
    <div className={styles.Dropdown}>
      {/* <select name={name} id={id}>
        {dropDownList.map((option, index) => {
          return (
            <option >
              {option}
            </option>
          );
        })}
      </select> */}
      <select name={name} id={id} disabled={isDisabled} >
        {
          ddList.map(item => (
            <option id={'option-' + id}>{item}</option>
          ))}
      </select>
    </div>
  )
};

Dropdown.propTypes = {};

Dropdown.defaultProps = {};

export default Dropdown;
