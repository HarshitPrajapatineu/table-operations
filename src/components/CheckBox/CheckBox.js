import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckBox.module.css';

const CheckBox = ({id, onChange}) => (
  <div className={styles.CheckBox}>
    <input 
    id={id} 
    type='checkbox'
    onChange={(e) => {
      onChange(e.target.checked);
    }}
    ></input>
  </div>
);

CheckBox.propTypes = {};

CheckBox.defaultProps = {};

export default CheckBox;
