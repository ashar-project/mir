import { createSlice } from '@reduxjs/toolkit';
import { getAdminReceived, getReceivedUser } from './adminReceivedThunk';

export const adminReceivedSlice = createSlice({
  name: 'adminReceived',
  initialState: {
    isLoading: false,
    adminReceived: [],
    receivedUser: null,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAdminReceived.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdminReceived.fulfilled, (state, { payload }) => {
        state.adminReceived = payload;
        state.isLoading = false;
      })
      .addCase(getAdminReceived.rejected, state => {
        state.isLoading = false;
      })
      .addCase(getReceivedUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getReceivedUser.fulfilled, (state, { paylaod }) => {
        console.log(paylaod)
        state.isLoading = false;
        state.receivedUser = paylaod;
      })
      .addCase(getReceivedUser.rejected, state => {
        state.isLoading = false;
      });
  },
});
