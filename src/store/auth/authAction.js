import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API} from '../const';

export const authRequestAsync = createAsyncThunk(
  'auth/fetch',
  (userData, thunkAPI) => {
    console.log();
    return axios.post(`${API}/login`, userData)
      .then(({data}) => data)
      .catch(({error}) => ({error}));
  }
);
