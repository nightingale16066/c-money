import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import accountsReducer from './accounts/accountsSlice';
import accountInfoReducer from './accountInfo/accountSlice';
import currenciesReducer from './currencies/currenciesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accounts: accountsReducer,
    account: accountInfoReducer,
    currencies: currenciesReducer,
  }
});
