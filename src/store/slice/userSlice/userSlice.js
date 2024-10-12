import { createSlice } from '@reduxjs/toolkit';
import { getWorld } from './userThunk';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    user: [],
    error: null,
    
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWorld.pending, state => {
        state.isLoading = true;
      })
      .addCase(getWorld.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(getWorld.rejected, state => {
        state.isLoading = false;
      });
  },
});
