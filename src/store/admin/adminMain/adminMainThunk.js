import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMainData = createAsyncThunk(
  'adminMain/getMainData',
  async (_, { rejectWithValue }) => {
    console.log('render');

    try {
      const { data } = await axiosInstance.get('/api/users/adminProfile');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
