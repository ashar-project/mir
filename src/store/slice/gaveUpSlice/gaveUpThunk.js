import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getGaveUp = createAsyncThunk(
  'gave/getGaveUp',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/users/submitted');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchesGaveUp = createAsyncThunk(
  'gave/searchesGaveUp',
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/users/search/submittedUser?query=${query}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
