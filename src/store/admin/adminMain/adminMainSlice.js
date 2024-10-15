import { createSlice } from '@reduxjs/toolkit';
import { getMainData } from './adminMainThunk';

export const adminMainSlice = createSlice({
  name: 'adminMain',
  initialState: {
    isLoading: false,
    main: {},
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMainData.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMainData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.main = payload;
      })
      .addCase(getMainData.rejected, state => {
        state.isLoading = false;
      });
  },
});
