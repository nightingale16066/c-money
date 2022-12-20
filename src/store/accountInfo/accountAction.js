import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API} from '../const';

export const accountInfoRequest = createAsyncThunk(
  'accountInfo/fetch',
  (id, {getState}) => {
    const token = getState().auth.token;

    return axios(`${API}/account/${id}`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    })
      .then(({data}) => data)
      .catch(({error}) => ({error}));
  }
);

export const transferFunds = createAsyncThunk(
  'transferFunds',
  (data, {getState}) => {
    const token = getState().auth.token;

    return axios.post(`${API}/transfer-funds`, data, {
      headers: {
        Authorization: `Basic ${token}`
      }
    })
      .then(({data}) => data)
      .catch(({error}) => ({error}));
  }
);

