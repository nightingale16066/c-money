import {createSlice} from '@reduxjs/toolkit';
import {accountInfoRequest, transferFunds} from './accountAction';

const getLastTransaction = (state) => {
  const transactionsAmount = state.accountInfo.transactions.length;
  if (transactionsAmount < 9) {
    state.lastOperations = state.accountInfo.transactions;
  } else {
    state.lastOperations = state.accountInfo.transactions
      .slice(transactionsAmount - 9, transactionsAmount);
  }
};

const initialState = {
  accountInfo: [],
  loading: true,
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
      getLastTransaction(state);
    },
    [transferFunds.fulfilled.type]: (state, action) => {
      if (!action.payload.payload) state.error = action.payload.error;
      else {
        state.accountInfo = action.payload.payload;
        getLastTransaction(state);
        state.error = '';
      }
    }
  }
});

export default accountSlice.reducer;
