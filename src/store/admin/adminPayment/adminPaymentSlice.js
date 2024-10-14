import { createSlice } from '@reduxjs/toolkit';
import { postPayment, returnPayUser } from './adminPaymentThunk';

export const adminPaymentSlice = createSlice({
  name: 'pay',
  initialState: {
    isLoading: false,
    pay: [],
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(postPayment.pending, state => {
        state.isLoading = true;
      })
      .addCase(postPayment.fulfilled, (state, { payload }) => {
        state.pay = payload;
        state.isLoading = false;
      })
      .addCase(postPayment.rejected, state => {
        state.isLoading = false;
      })
      .addCase(returnPayUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(returnPayUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(returnPayUser.rejected, state => {
        state.isLoading = false;
      });
  },
});
