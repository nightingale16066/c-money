import {createSlice} from '@reduxjs/toolkit';
import {
  buyCurrency,
  currenciesRequest,
  myCurrenciesRequest
} from './currenciesActions';

const initialState = {
  currencies: [],
  myCurrencies: [],
  error: ''
};

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  extraReducers: {
    [currenciesRequest.pending.type]: (state) => {
      state.error = '';
    },
    [currenciesRequest.fulfilled.type]: (state, action) => {
      state.currencies = action.payload.payload;
    },
    [myCurrenciesRequest.fulfilled.type]: (state, action) => {
      state.myCurrencies = action.payload.payload;
    },
    [buyCurrency.fulfilled.type]: (state, action) => {
      if (action.payload.payload) {
        state.myCurrencies = action.payload.payload;
        state.error = '';
      }
      if (action.payload.error) {
        state.error = action.payload.error;
      }
    }
  }
});

export default currenciesSlice.reducer;
