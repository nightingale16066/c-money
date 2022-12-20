import React from 'react';
import {useSelector} from 'react-redux';
import CurrencyFeed from './CurrencyFeed';
import style from './Exchange.module.css';
import FormExchange from './FormExchange';

export const Exchange = props => {
  const myCurrencies = useSelector(state => state.currencies.myCurrencies);
  const rowData = Object.entries(myCurrencies);

  return (
    <div className={style.exchange_wrapper}>
      <div className={style.title}>Обмен валюты</div>
      <div className={style.tables}>
        <CurrencyFeed/>
        <FormExchange/>
      </div>
      <div className={style.myCur}>
        <div className={style.cur_title}>Мои валюты</div>
        <div className={style.list}>
          {
            rowData.map((item, idx) => (
              <div className={style.list_item} key={idx}>
                <span className={style.item_code}>{item[1].code}</span>
                <span className={style.item_amount}>
                  {item[1].amount.toFixed(2)}
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
