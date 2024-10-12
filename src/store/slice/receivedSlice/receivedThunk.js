import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getReceived = createAsyncThunk(
  'received/getReceived',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/users/allReceivedUsers');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserById = createAsyncThunk(
  'received/getUserById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/api/users/receivedUser/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
