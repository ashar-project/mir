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
      .addCase(getReceivedUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.receivedUser = payload;
      })
      .addCase(getReceivedUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
