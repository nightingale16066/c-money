import {createSlice} from '@reduxjs/toolkit';
import {accountInfoRequest, transferFunds} from './accountAction';

const initialState = {
  accountInfo: [],
  loading: false,
  error: '',
  lastOperations: [],
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  extraReducers: {
    [accountInfoRequest.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [accountInfoRequest.fulfilled.type]: (state, action) => {
      state.accountInfo = action.payload.payload;
      state.loading = false;
      state.error = '';

      const transactionsAmount = state.accountInfo.transactions.length;
      if (transactionsAmount < 9) {
        state.lastOperations = state.accountInfo.transactions;
      } else {
        state.lastOperations = state.accountInfo.transactions
          .slice(transactionsAmount - 9, transactionsAmount);
      }
    },
    [transferFunds.fulfilled.type]: (state, action) => {
      if (!action.payload.payload) state.error = action.payload.error;
      else {
        state.accountInfo = action.payload.payload;
        state.error = '';
      }
    }
  }
});

export default accountSlice.reducer;
