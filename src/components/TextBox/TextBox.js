import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextBox.module.css';

const TextBox = () => (
  <div className={styles.TextBox}>
    <input type='text'/>
  </div>
);

TextBox.propTypes = {};

TextBox.defaultProps = {};

export default TextBox;
