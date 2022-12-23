import React from 'react';
import style from './Loader.module.css';
import PuffLoader from 'react-spinners/PuffLoader';

export const Loader = props => {
  console.log(style);
  return (
    <div className={style.wrapper}>
      <PuffLoader color="#36d7b7" size={80} />
    </div>
  );
};
