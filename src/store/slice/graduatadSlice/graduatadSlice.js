import { createSlice } from '@reduxjs/toolkit';
import { graduatadThunk, searchesGraduated } from './graduatadThunk';

export const graduatadSlice = createSlice({
  name: 'graduatad',
  initialState: {
    isLoading: false,
    error: null,
    graduatad: [],
    searchesAll: [],
    all:[]
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(graduatadThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(graduatadThunk.fulfilled, (state, { payload }) => {
        state.all = payload;
        state.graduatad = payload;
        state.isLoading = false;
      })
      .addCase(graduatadThunk.rejected, state => {
        state.isLoading = false;
      })
      .addCase(searchesGraduated.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchesGraduated.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.all = payload;
        state.searchesAll = payload;
      })
      .addCase(searchesGraduated.rejected, state => {
        state.isLoading = false;
      });
  },
});
