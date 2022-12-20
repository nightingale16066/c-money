import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from '../../UI/Logo';
import {useSelector} from 'react-redux';
import NavBar from './NavBar';

export const Header = props => {
  const auth = useSelector(state => state.auth.token);

  return (
    <header className={style.header}>
      <Layout>
        <div className={style.content}>
          <Logo/>
          {auth && <NavBar/>}
        </div>
      </Layout>
    </header>
  );
};
