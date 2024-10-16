import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const graduatadThunk = createAsyncThunk(
  'graduatad/graduatadThunk',
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
export const searchesGraduated = createAsyncThunk(
  'graduatad/searchesGaveUp',
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/users/search/finishedUser?query=${query}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
