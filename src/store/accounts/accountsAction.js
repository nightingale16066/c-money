import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API} from '../const';

export const accountsRequest = createAsyncThunk(
  'accounts/fetch',
  (args, {getState}) => {
    const token = getState().auth.token;

    return axios(`${API}/accounts`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    })
      .then(({data}) => data)
      .catch(({error}) => ({error}));
  }
);

export const createAccount = createAsyncThunk(
  'createAccount',
  (args, {getState}) => {
    const token = getState().auth.token;

    return axios.post(`${API}/create-account`, 'hi', {
      headers: {
        Authorization: `Basic ${token}`
      }
    })
      .then(({data}) => data)
      .catch(({error}) => ({error}));
  }
);
