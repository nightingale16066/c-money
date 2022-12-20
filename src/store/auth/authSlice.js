import {createSlice} from '@reduxjs/toolkit';
import {deleteToken, setToken} from '../../hooks/useAuth';
import {authRequestAsync} from './authAction';

const initialState = {
  token: '',
  error: '',
  loading: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      deleteToken();
      state.token = '';
    }
  },
  extraReducers: {
    [authRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [authRequestAsync.fulfilled.type]: (state, action) => {
      if (action.payload.payload) {
        const token = action.payload.payload.token;
        setToken(token);
        state.loading = false;
        state.error = '';
        state.token = token;
      }
      if (action.payload.error === 'Invalid password') {
        state.loading = false;
        state.error = 'Invalid password';
      }
      if (action.payload.error === 'No such user') {
        state.loading = false;
        state.error = 'No such user';
      }
    },
    [authRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    }
  }
});

export default authSlice.reducer;
