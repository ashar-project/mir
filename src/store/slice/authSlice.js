import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp } from './authThunk';

const initialState = {
  isAuth: false,
  isLoading: false,
  error: null,
  token: '',
  role: 'GUEST',
};
console.log(initialState.token,'token');
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isAuth = true;
        state.isLoading = false;
        state.role = payload.role;
        state.token = payload.token;
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
  },
});
