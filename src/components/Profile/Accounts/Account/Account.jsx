import React from 'react';
import style from './Account.module.css';
import PropTypes from 'prop-types';
import {setDate} from '../../../../utils/dateTransform';
import {Link} from 'react-router-dom';

export const Account = ({account}) => {
  const {account: userAccount, balance, date: openDate,
    transactions} = account;
  const dateLast = transactions.length ? transactions[0].date : '';

  return (
    <Link to={`/profile/${userAccount}`} className={style.link}>
      <div className={style.account}>
        <div className={style.account_content}>
          <div className={style.id}>{userAccount}</div>
          <div className={style.balance}>{balance.toFixed(2)} ₽</div>
          <div className={style.acc_info}>
            <div className={style.info}>
              <div className={style.title}>открыт</div>
              <div className={style.date}>{setDate(openDate)}</div>
            </div>
            <div className={style.info}>
              <div className={style.title}>последняя операция</div>
              <div className={style.date}>{setDate(dateLast)}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Account.propTypes = {
  account: PropTypes.object,
  id: PropTypes.number,
  balance: PropTypes.number,
  open: PropTypes.string,
  lastOp: PropTypes.string,
};

