import React from 'react';
import style from './Logo.module.css';
import {ReactComponent as LogoIcon} from './img/Logo.svg';


export const Logo = props => (
  <div className={style.logo}>
    <LogoIcon className={style.logo_icon}/>
    <div className={style.title}>C-Money</div>
  </div>
);
