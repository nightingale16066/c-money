import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  buyCurrency,
  currenciesRequest,
  myCurrenciesRequest
} from '../../../store/currencies/currenciesActions';
import Button from '../../../UI/Button';
import style from './FormExchange.module.css';
import {useForm} from 'react-hook-form';

export const FormExchange = props => {
  const currencies = useSelector(state => state.currencies.currencies);
  const buyError = useSelector(state => state.currencies.error);
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  const onSubmit = (data) => {
    dispatch(buyCurrency(data));
    reset();
  };

  useEffect(() => {
    dispatch(currenciesRequest());
    dispatch(myCurrenciesRequest());
  }, [dispatch]);

  return (
    <>
      <div className={style.exchange}>
        <div className={style.sendInfo}>
          <div className={style.title_main}>Обмен валюты</div>
          {buyError && <p className={style.error}>{buyError}</p>}
        </div>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.exchange_fields}>
            <div className={style.item}>
              <div className={style.title}>Откуда</div>
              <select className={style.input} {...register('from', {
                required: 'Укажите счет списания'
              })}>
                <option value=""></option>
                {currencies.length && currencies.map(cur => (
                  <option value={cur} key={cur}>{cur}</option>
                )) }
              </select>
            </div>
            <div className={style.item}>
              <div className={style.title}>Куда</div>
              <select className={style.input} {...register('to', {
                required: 'Укажите счет зачисления'
              })}>
                <option value=""></option>
                {currencies.length && currencies.map(cur => (
                  <option value={cur} key={cur}>{cur}</option>
                )) }
              </select>
            </div>
            <div className={style.item}>
              <div className={style.title}>Сумма</div>
              <input className={style.input} type="number" step="any"
                {...register('amount', {
                  required: 'Не забудьте ввести сумму',
                  min: {
                    value: 1,
                    message: 'Только положительная сумма'
                  }
                })}
              />
            </div>
          </div>
          <div className={style.handler}>
            {errors.from &&
              <p className={style.error}>{errors.from.message}</p> ||
              errors.to &&
              <p className={style.error}>{errors.to.message}</p> ||
              errors.amount &&
              <p className={style.error}>{errors.amount.message}</p>
            }
            <Button text='Обменять' type='medium'/>
          </div>
        </form>
      </div>
    </>
  );
};
