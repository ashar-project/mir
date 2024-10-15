import { createSlice } from '@reduxjs/toolkit';
import { forgotPassword, resetPassword, signIn, signUp } from './authThunk';

const initialState = {
  isAuth: false,
  isLoading: false,
  error: null,
  token: '',
  role: 'GUEST',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.role = 'GUEST';
      state.token = '';
    },
  },

  extraReducers(builder) {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(signUp.rejected, state => {
        state.isLoading = false;
      });

    builder
      .addCase(signIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.isLoading = false;
        state.role = payload.role;
        state.token = payload.token;
      })
      .addCase(signIn.rejected, state => {
        state.isLoading = false;
      });

    builder
      .addCase(forgotPassword.pending, state => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, state => {
        state.isLoading = false;
      });

    builder
      .addCase(resetPassword.pending, state => {
        state.isLoading = true;
      })
      .addCase(resetPassword.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const { logout } = authSlice.actions;
