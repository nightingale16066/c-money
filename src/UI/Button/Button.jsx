import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({text, type, onClick}) => {
  const classes = classNames(
    style.button,
    style[type]
  );

  return (
    <button onClick={onClick} className={classes}>{text}</button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
};
