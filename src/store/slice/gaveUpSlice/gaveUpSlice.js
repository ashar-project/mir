import { createSlice } from '@reduxjs/toolkit';
import { getGaveUp } from './gaveUpThunk';

export const gaveUpSlice = createSlice({
  name: 'gave',
  initialState: {
    isLoading: false,
    gaveUp: [],
    error: null,
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
      });
  },
});
