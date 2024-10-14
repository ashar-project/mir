import { createSlice } from '@reduxjs/toolkit';
import {
  addDebtUser,
  getAdminWorld,
  getByIdWorldInfo,
  seaarchUsers,
} from './adminWorldThunk';

export const userAdminSlice = createSlice({
  name: 'userAdmin',
  initialState: {
    isLoading: false,
    user: [],
    error: null,
    userInfo: {},
    searches: [],
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
        state.searches = payload;
      })
      .addCase(getAdminWorld.rejected, state => {
        state.isLoading = false;
      })
      .addCase(getByIdWorldInfo.pending, state => {
        state.isLoading = true;
      })
      .addCase(getByIdWorldInfo.fulfilled, (state, { payload }) => {
        state.userInfo = payload;
        state.isLoading = false;
      })
      .addCase(getByIdWorldInfo.rejected, state => {
        state.isLoading = false;
      })
      .addCase(seaarchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(seaarchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.searches = payload;
      })
      .addCase(seaarchUsers.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addDebtUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(addDebtUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(addDebtUser.rejected, state => {
        state.isLoading = false;
      });
  },
});
