import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getWorld = createAsyncThunk(
  'user/getWorld',
  async ({ minAmount, maxAmount, id, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/users/getUsersFromWorldByRating?minAmount=${minAmount}&maxAmount=${maxAmount}`
      );
      navigate(`${id}/worldInfo`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


