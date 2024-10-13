import { createSlice } from '@reduxjs/toolkit';
import { getAdminGraduated } from './adminGraduatedThunk';

export const adminGraduatedSlice = createSlice({
  name: 'adminGraduated',
  initialState: {
    isLoading:false,
    adminGraudated:[],
    error:null,
  },
  reducers: {},
  extraReducers: builder => {
    builder 
    .addCase(getAdminGraduated.pending,state=>{
      state.isLoading = true;
    })
    .addCase(getAdminGraduated.fulfilled,(state,{payload})=>{
      state.adminGraudated =payload;
      state.isLoading = false;
    })
    .addCase(getAdminGraduated.rejected,state=>{
      state.isLoading = false
    })
  },
});
