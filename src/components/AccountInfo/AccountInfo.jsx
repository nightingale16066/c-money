import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {accountInfoRequest} from '../../store/accountInfo/accountAction';
import Button from '../../UI/Button';
import style from './AccountInfo.module.css';
import Chart from './Chart';
import Transaction from './Transaction';
import TransferTable from './TransferTable';

export const AccountInfo = props => {
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getBack = () => {
    navigate('/profile');
  };

  useEffect(() => {
    dispatch(accountInfoRequest(id));
  }, [id]);

  return (
    <>
      <div className={style.header}>
        <div className={style.account}>
          Счет №<span>{id}</span>
        </div>
        <Button text='Вернуться' type='medium' onClick={getBack}/>
      </div>
      <div className={style.statisticks}>
        <Chart/>
        <TransferTable/>
      </div>
      <Transaction/>
    </>
  );
};
