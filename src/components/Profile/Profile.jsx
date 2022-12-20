import React from 'react';
import Header from './Header';
import Accounts from './Accounts';
// import style from './Profile.module.css';
import {useSelector} from 'react-redux';

export const Profile = props => {
  const auth = useSelector(state => state.auth.token);
  console.log('auth: ', auth);
  console.log();
  return (
    <>
      <Header/>
      <Accounts/>
    </>
  );
};
