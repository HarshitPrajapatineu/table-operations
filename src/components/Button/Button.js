import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  id,
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  text,
  textColor,
  isDisabled
}) => {
  return (
    <div className={styles.Button}>
      <button id={'button-' + id}
        onClick={onClick}
        disabled={isDisabled}
        className={styles.cp}
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
  )
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
