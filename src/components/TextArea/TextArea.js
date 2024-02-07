import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextArea.module.css';

const TextArea = () => (
  <div className={styles.TextArea}>
    <textarea/>
  </div>
);

TextArea.propTypes = {};

TextArea.defaultProps = {};

export default TextArea;
