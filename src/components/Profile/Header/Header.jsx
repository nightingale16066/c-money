import React from 'react';
import style from './Header.module.css';
import PropTypes from 'prop-types';
import Button from '../../../UI/Button';
import {useDispatch} from 'react-redux';
import {createAccount} from '../../../store/accounts/accountsAction';

export const Header = ({name}) => {
  const dispatch = useDispatch();

  const createNewAcc = () => {
    dispatch(createAccount());
  };

  return (
    <div className={style.header}>
      <div className={style.title}>Здравствуйте, {'Станислав'}!</div>
      <Button text='Открыть новый счет' type='medium' onClick={createNewAcc}/>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};
