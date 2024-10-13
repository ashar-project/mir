import { createSlice } from '@reduxjs/toolkit';
import { getAdminReceived } from './adminReceivedThunk';

export const adminReceivedSlice = createSlice({
  name: 'adminReceived',
  initialState: {
    isLoading: false,
    adminReceived: [],
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
      });
  },
});
