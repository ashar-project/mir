import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAdminWorld = createAsyncThunk(
  'user/getAdminWorld',
  async ({ minAmount, maxAmount, id, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/users/getUsersFromWorldByRating?minAmount=${minAmount}&maxAmount=${maxAmount}`
      );
      if (data) {
        navigate(`/admin/worlds-page/${id}/worldRaiting`);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
