/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import style from './Chart.module.css';
import {Chart as ChartJS, LineElement, LinearScale, PointElement, Tooltip, Legend, CategoryScale} from 'chart.js';
import {Line} from 'react-chartjs-2';
ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  LinearScale,
  Legend,
  CategoryScale
);


export const Chart = props => {
  const {id} = useParams();
  const account = useSelector(state => state.account.accountInfo);
  const [chartData, setChartData] = useState({});
  const [options, setOptions] = useState({});


  useEffect(() => {
    const transactions = account.transactions;
    if (!transactions) return;

    const groupByMonth = transactions.reduce((acc, obj) => {
      const property = new Date(obj['date']).getMonth();
      acc[property] = acc[property] || 0;
      if (obj.from !== id) {
        acc[property] += obj.amount;
      }
      return acc;
    }, {});

    const month = Object.keys(groupByMonth)
      .map(item => new Date(2022, item, 1)
        .toLocaleDateString('en-EN', {month: 'long'}));
    const data = Object.values(groupByMonth);
    // setMonth(month);
    // setData(data);

    const chartData = {
      labels: month,
      datasets: [{
        label: 'Динамика 2022',
        data,
        borderColor: '#b865d6',
        backgroundColor: '#b865d6',
        color: '#C6B6D7',
      }],
    };
    setChartData(chartData);

    const options = {
      plugins: {

      }
    };
    setOptions(options);
  }, [account]);

  return (
    <div className={style.chart_wrapper}>
      {
        Object.keys(chartData).length &&
          <Line data={chartData} options={options}/>
      }
    </div>
  );
};
