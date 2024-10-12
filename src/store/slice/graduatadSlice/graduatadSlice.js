import { createSlice } from '@reduxjs/toolkit';
import { graduatadThunk } from './graduatadThunk';

export const graduatadSlice = createSlice({
  name: 'graduatad',
  initialState: {
    isLoading: false,
    error: null,
    graduatad: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(graduatadThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(graduatadThunk.fulfilled, (state, { payload }) => {
        state.graduatad = payload;
        state.isLoading = false;
      })
      .addCase(graduatadThunk.rejected, state => {
        state.isLoading = false;
      });
  },
});
