import { createSlice } from '@reduxjs/toolkit';
import { getProfileUser } from './profileThunk';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoading: false,
    profile: {},
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProfileUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProfileUser.fulfilled, (state, { payload }) => {
        state.profile = payload;
        state.isLoading = false;
      })
      .addCase(getProfileUser.rejected, state => {
        state.isLoading = false;
      });
  },
});
