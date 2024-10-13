import { createSlice } from '@reduxjs/toolkit';
import { getAdminWorld } from './adminWorldThunk';

export const userAdminSlice = createSlice({
  name: 'userAdmin',
  initialState: {
    isLoading: false,
    user: [],
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAdminWorld.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdminWorld.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(getAdminWorld.rejected, state => {
        state.isLoading = false;
      });
  },
});
