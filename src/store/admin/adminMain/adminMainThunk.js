import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMainData = createAsyncThunk(
  'adminMain/getMainData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/users/adminProfile');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getMainDataProcent = createAsyncThunk(
  'adminMain/getMainDataProcent',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/users/percent');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
