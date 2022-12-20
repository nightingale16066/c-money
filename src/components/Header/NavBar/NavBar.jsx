import React from 'react';
import {Link} from 'react-router-dom';
import style from './NavBar.module.css';
import {ReactComponent as ExitIcon} from './img/Exit.svg';
import {authSlice} from '../../../store/auth/authSlice';
import {useDispatch} from 'react-redux';

export const NavBar = props => {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(authSlice.actions.removeToken());
  };

  return (
    <nav className={style.nav}>
      <Link to='/profile'>Счета</Link>
      <Link to='/exchange'>Обмен</Link>
      <Link to='/' onClick={handleExit}
        className={style.exit}
      >
        <div>Выйти</div>
        <ExitIcon/>
      </Link>
    </nav>
  );
};
