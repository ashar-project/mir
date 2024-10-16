import { createSlice } from '@reduxjs/toolkit';
import {
  deleteGaveUpdUsers,
  getAdminGaveUp,
  searchGaveUp,
} from './adminGaveUpTjunk';

export const adminGaveUpSlice = createSlice({
  name: 'adminGaveUp',
  initialState: {
    isLoading: false,
    adminGaveUp: [],
    error: null,
    searchesAll: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAdminGaveUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdminGaveUp.fulfilled, (state, { payload }) => {
        state.adminGaveUp = payload;
        state.isLoading = false;
      })
      .addCase(getAdminGaveUp.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteGaveUpdUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteGaveUpdUsers.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deleteGaveUpdUsers.rejected, state => {
        state.isLoading = false;
      })
      .addCase(searchGaveUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchGaveUp.fulfilled, (state, { payload }) => {
        state.searchesAll = payload;
        state.isLoading = false;
      })
      .addCase(searchGaveUp.rejected, state => {
        state.isLoading = false;
      });
  },
});
