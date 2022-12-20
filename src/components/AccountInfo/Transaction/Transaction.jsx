import React from 'react';
import Button from '../../../UI/Button';
import style from './Transaction.module.css';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {
  accountInfoRequest,
  transferFunds
} from '../../../store/accountInfo/accountAction';

export const Transaction = props => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const balance = useSelector(state => state.account.accountInfo.balance);
  const account = useSelector(state => state.account.accountInfo.account);
  const error = useSelector(state => state.account.error);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const transfer = {...data, from: account};
    dispatch(transferFunds(transfer));
    dispatch(accountInfoRequest(account));
    reset();
  };

  return (
    <div className={style.transactions}>
      <div className={style.header}>
        <div className={style.title_main}>Перевод</div>
        {error && <div className={style.transfer_error}>Ошибка: {error}</div>}
      </div>
      <form className={style.content} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.item}>
          <div className={style.title}>Счет</div>
          <input className={style.input} type="number" min={1}
            {...register('to', {
              required: 'This field is required',
            })}
          />
          {errors.to &&
            <p className={style.errors}>{errors.to.message}</p>}
        </div>
        <div className={style.item}>
          <div className={style.title}>Сумма</div>
          <input className={style.input} type="number"
            {...register('amount', {
              required: 'This field is required',
              min: {
                value: 1,
                message: 'Можно перевести минимум 1 рубль'
              },
              max: {
                value: balance,
                message: `Нельзя перевести больше, чем ${balance}`
              },
            })}
          />
          {errors.amount &&
            <p className={style.errors}>{errors.amount.message}</p>}
        </div>
        <Button text='Перевести' type='default'/>
      </form>
    </div>
  );
};
