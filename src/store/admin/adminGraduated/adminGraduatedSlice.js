import { createSlice } from '@reduxjs/toolkit';
import {
  deleteGraduatedUsers,
  getAdminGraduated,
  searchesGraduated,
} from './adminGraduatedThunk';

export const adminGraduatedSlice = createSlice({
  name: 'adminGraduated',
  initialState: {
    isLoading: false,
    adminGraudated: [],
    error: null,
    searchAll: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAdminGraduated.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdminGraduated.fulfilled, (state, { payload }) => {
        state.adminGraudated = payload;
        state.isLoading = false;
      })
      .addCase(getAdminGraduated.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteGraduatedUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteGraduatedUsers.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deleteGraduatedUsers.rejected, state => {
        state.isLoading = false;
      })
      .addCase(searchesGraduated.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchesGraduated.fulfilled, (state, { payload }) => {
        state.searchAll = payload;
        state.isLoading = false;
      })
      .addCase(searchesGraduated.rejected, state => {
        state.isLoading = false;
      });
  },
});
