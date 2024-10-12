import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const graduatadThunk = createAsyncThunk(
  'graduatad',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        '/api/users/getAllGraduatedUsers'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
