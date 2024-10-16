import { createSlice } from '@reduxjs/toolkit';
import { getGaveUp, searchesGaveUp } from './gaveUpThunk';

export const gaveUpSlice = createSlice({
  name: 'gave',
  initialState: {
    isLoading: false,
    gaveUp: [],
    error: null,
    searchesAll: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getGaveUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(getGaveUp.fulfilled, (state, { payload }) => {
        state.gaveUp = payload;
        state.isLoading = false;
      })
      .addCase(getGaveUp.rejected, state => {
        state.isLoading = false;
      })
      .addCase(searchesGaveUp.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchesGaveUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.searchesAll = payload;
      })
      .addCase(searchesGaveUp.rejected, state => {
        state.isLoading = false;
      });
  },
});
