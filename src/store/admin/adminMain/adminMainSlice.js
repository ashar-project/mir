import { createSlice } from '@reduxjs/toolkit';
import { getMainData, getMainDataProcent } from './adminMainThunk';

export const adminMainSlice = createSlice({
  name: 'adminMain',
  initialState: {
    isLoading: false,
    main: {},
    procent: {},
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
      })
      .addCase(getMainDataProcent.fulfilled, (state, { payload }) => {
        state.procent = payload;
      });
  },
});
