import React from 'react';
import style from './Input.module.css';
import PropTypes from 'prop-types';

export const Input = ({title}) => (
  <div className={style.item}>
    <div className={style.title}>{title}</div>
    <input className={style.input} type="text"/>
  </div>
);

Input.propTypes = {
  title: PropTypes.string,
};
