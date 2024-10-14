import { createSlice } from '@reduxjs/toolkit';
import { gaveUser, getProfileUser, updateProfile } from './profileThunk';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoading: false,
    profile: {},
    error: null,
    file: '',
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
      })
      .addCase(gaveUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(gaveUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(gaveUser.rejected, state => {
        state.isLoading = false;
      })
      .addCase(updateProfile.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(updateProfile.rejected, state => {
        state.isLoading = false;
      });
  },
});
