import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckBox.module.css';

const CheckBox = () => (
  <div className={styles.CheckBox}>
    <input type='checkbox'></input>
  </div>
);

CheckBox.propTypes = {};

CheckBox.defaultProps = {};

export default CheckBox;
