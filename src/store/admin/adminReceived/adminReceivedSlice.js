import { createSlice } from '@reduxjs/toolkit';
import {
  getAdminReceived,
  getReceivedUser,
  postReceivedUserPayment,
  searchesReceived,
} from './adminReceivedThunk';

export const adminReceivedSlice = createSlice({
  name: 'adminReceived',
  initialState: {
    isLoading: false,
    adminReceived: [],
    receivedUser: null,
    error: null,
    searchesAll: [],
    all: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAdminReceived.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdminReceived.fulfilled, (state, { payload }) => {
        state.all = payload;
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
      })
      .addCase(postReceivedUserPayment.pending, state => {
        state.isLoading = true;
      })
      .addCase(postReceivedUserPayment.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(postReceivedUserPayment.rejected, state => {
        state.isLoading = false;
      })
      .addCase(searchesReceived.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchesReceived.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.all = payload;
        state.searchesAll = payload;
      })
      .addCase(searchesReceived.rejected, state => {
        state.isLoading = false;
      });
  },
});
