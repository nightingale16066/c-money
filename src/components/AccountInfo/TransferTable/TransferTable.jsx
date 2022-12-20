import React from 'react';
import {useSelector} from 'react-redux';
import {setDate} from '../../../utils/dateTransform';
import style from './TransferTable.module.css';

export const TransferTable = props => {
  const lastTransactions = useSelector(state => state.account.lastOperations);
  const account = useSelector(state => state.account.accountInfo.account);

  const tColumns = ['Счет', 'Сумма', 'Дата'];

  return (
    <div className={style.history}>
      <div className={style.title}>История переводов</div>
      <div className={style.table_wrapper}>
        {lastTransactions.length && <table className={style.table}>
          <thead className={style.thead}>
            <tr>
              {
                tColumns.map((header, idx) =>
                  (<th className={style.thead_row} key={idx}>{header}</th>))
              }
            </tr>
          </thead>
          <tbody>
            {
              lastTransactions.map((transaction, unique) => (
                <tr key={unique} className={style.tbody_row}>
                  <td>{transaction.from}</td>
                  {
                    transaction.from === account ?
                      <td className={style.send_money}>
                        -{transaction.amount}
                      </td> :
                      <td className={style.recieve_money}>
                        +{transaction.amount}
                      </td>
                  }
                  <td>{setDate(transaction.date)}</td>
                </tr>
              ))
            }
          </tbody>
        </table>}
      </div>
    </div>
  );
};
