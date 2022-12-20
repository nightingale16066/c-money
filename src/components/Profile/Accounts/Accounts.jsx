import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {accountsRequest} from '../../../store/accounts/accountsAction';
import {accountsSlice} from '../../../store/accounts/accountsSlice';
import Account from './Account';
import style from './Accounts.module.css';

export const Accounts = props => {
  const dispatch = useDispatch();
  const accounts = useSelector(state => state.accounts.accounts);
  const [selectField, setSelectField] = useState();

  const handleSelectChange = (event) => {
    setSelectField(event.target.value);
  };

  useEffect(() => {
    dispatch(accountsSlice.actions.sortAccounts({selectField}));
  }, [selectField]);

  useEffect(() => {
    dispatch(accountsRequest());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.title}>Мои счета</div>
        <div className={style.sortfield}>
          <label htmlFor="sortType">Сортировка по: </label>
          <select name="sortType" id="sortType" className={style.sortType}
            onChange={handleSelectChange}
          >
            <option value="">Выберите опцию</option>
            <option className={style.option} value="account">
              Номеру счета
            </option>
            <option className={style.option} value="balance">
              Балансу
            </option>
            <option className={style.option} value="openDate">
              Дате открытия
            </option>
            <option className={style.option} value="dateLast">
              Операции
            </option>
          </select>
        </div>
      </div>
      <div className={style.content}>
        {
          accounts.length && accounts.map((account, id) =>
            (<Account account={account} key={id}/>))
        }
      </div>
    </div>
  );
};
