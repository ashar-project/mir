import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAdminReceived = createAsyncThunk(
  'adminReceived/getAdminReceived',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/users/allReceivedUsers');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getReceivedUser = createAsyncThunk(
  'adminReceived/getReceivedUser',
  async ({ id, navigate }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/users/receivedUser/${id}`);
      navigate(`${id}/received-inner-page`);
      console.log(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
