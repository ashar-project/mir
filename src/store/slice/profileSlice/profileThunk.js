import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProfileUser = createAsyncThunk(
  'profile/getProfileUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/users/userProfile');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
