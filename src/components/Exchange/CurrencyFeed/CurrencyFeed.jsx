/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import style from './CurrencyFeed.module.css';
import {ReactComponent as IncreaseIcon} from './img/increase.svg';
import {ReactComponent as DecreaseIcon} from './img/decrease.svg';

export const CurrencyFeed = props => {
  const client = new WebSocket(`ws://localhost:3000/currency-feed`);
  const [curr, setCurr] = useState([]);

  useEffect(() => {
    client.onmessage = (message) => {
      curr.push(JSON.parse(message.data));

      if (curr.length > 9) {
        setCurr(curr.slice(1));
      } else {
        setCurr([...curr]);
      }
    };

    return () => {
      client.close();
    };
  });
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        Изменение курса в режиме реального времени
      </div>
      <div className={style.content}>
        {
          curr.map((item, id) => (
            <div className={style.list_item} key={id}>
              <div className={style.currency}>{item.from}/{item.to}</div>
              <div className={style.space}></div>
              <div className={style.rate}>
                <div className={style.amount}>
                  {
                    item.change >= 0 ? <p>+{item.rate}</p> :
                      <p>-{item.rate}</p>
                  }
                </div>
                <div className={style.arrow}>
                  {item.change >= 0 ? <IncreaseIcon/> : <DecreaseIcon/>}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
