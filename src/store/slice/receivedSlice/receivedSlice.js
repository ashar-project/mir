import { createSlice } from '@reduxjs/toolkit';
import { getReceived, getUserById, searchReceived } from './receivedThunk';

export const receivedSlice = createSlice({
  name: 'received',
  initialState: {
    isLoading: false,
    received: [],
    receivedBig: [],
    error: null,
    searches: [],
    receivedInfo: {},
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getReceived.pending, state => {
        state.isLoading = true;
      })
      .addCase(getReceived.fulfilled, (state, { payload }) => {
        state.received = payload;
        state.isLoading = false;
        state.searches = payload;
      })
      .addCase(getReceived.rejected, state => {
        state.isLoading = false;
      })
      .addCase(getUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.receivedInfo = payload;
        state.isLoading = false;
      })
      .addCase(getUserById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(searchReceived.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchReceived.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.searches = payload;
      });
  },
});
