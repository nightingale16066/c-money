import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Layout from '../Layout';
import Profile from '../Profile';
import LoginForm from '../LoginForm';
import style from './Main.module.css';
import {useDispatch} from 'react-redux';
import {authSlice} from '../../store/auth/authSlice';
import {getToken} from '../../hooks/useAuth';
import AccountInfo from '../AccountInfo';
import Exchange from '../Exchange';

export const Main = props => {
  const dispatch = useDispatch();
  dispatch(authSlice.actions.updateToken(getToken()));

  return (
    <main className={style.main}>
      <Layout>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/profile/:id' element={<AccountInfo/>}/>
          <Route path='/exchange' element={<Exchange/>}/>
        </Routes>
      </Layout>
    </main>
  );
};
