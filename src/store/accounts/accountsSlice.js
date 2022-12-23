import {createSlice} from '@reduxjs/toolkit';
import {accountsRequest, createAccount} from './accountsAction';

const initialState = {
  accounts: [],
  error: '',
  loading: true,
  account: {}
};

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    sortAccounts: (state, action) => {
      const selectField = action.payload.selectField;
      if (selectField === 'account' || selectField === 'balance') {
        state.accounts.sort((a, b) => a[selectField] - b[selectField]);
      }
      if (selectField === 'openDate') {
        state.accounts.sort((a, b) =>
          new Date(a.date).getTime() - new Date(b.date).getTime());
      }
      if (selectField === 'dateLast') {
        state.accounts.sort((a, b) => {
          const aTime = a.transactions.length ? a.transactions[0].date : 0;
          const bTime = b.transactions.length ? b.transactions[0].date : 0;
          return new Date(aTime).getTime() - new Date(bTime).getTime();
        });
      }
    }
  },
  extraReducers: {
    [accountsRequest.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [accountsRequest.fulfilled.type]: (state, action) => {
      state.accounts = action.payload.payload;
      state.loading = false;
      state.error = '';
    },
    [accountsRequest.rejected.type]: (state, action) => {
      state.accounts = [];
      state.loading = false;
      state.error = action.payload;
    },
    [createAccount.fulfilled.type]: (state, action) => {
      const account = action.payload.payload;
      state.accounts.push(account);
    }
  }
});

export default accountsSlice.reducer;
