import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API} from '../const';

export const currenciesRequest = createAsyncThunk(
  'currencies/fetch',
  (args, {getState}) => {
    const token = getState().auth.token;

    return axios(`${API}/all-currencies`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    })
      .then(({data}) => data);
  }
);

export const myCurrenciesRequest = createAsyncThunk(
  'myCurrencies/fetch',
  (args, {getState}) => {
    const token = getState().auth.token;

    return axios(`${API}/currencies`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    })
      .then(({data}) => data);
  }
);

export const buyCurrency = createAsyncThunk(
  'buyCurrency',
  (body, {getState}) => {
    const token = getState().auth.token;

    return axios.post(`${API}/currency-buy`, body, {
      headers: {
        Authorization: `Basic ${token}`
      }
    })
      .then(({data}) => data);
  }
);
