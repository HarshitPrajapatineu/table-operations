import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button= ({ 
  border,
  color,
  children,
  height,
  onClick, 
  radius,
  width,
  text,
  textColor
}) => { 
return (
  <div className={styles.Button}>
    <button onClick={onClick} 
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
         fontWeight: "bold",
         color: textColor
      }}>{text}</button>
  </div>
)};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
