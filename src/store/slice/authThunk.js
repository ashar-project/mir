import { toastifyMessage } from '@/components/Toastify/Toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (value, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/auth/signUp', value);
      toastifyMessage({
        message: 'Вы успешно зарегистрериловас',
        status: 'success',
        duration: 1500,
      });

      return response.data;
    } catch (error) {
      toastifyMessage({
        message: 'Упс что то пощло не так	',
        status: 'error',
        duration: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/api/auth/signIn', value);
      toastifyMessage({
        message: 'Вы успешно вошли',
        status: 'success',
        duration: 1500,
      });
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Упс что то пощло не так	',
        status: 'error',
        duration: 1500,
      });
      return rejectWithValue(error);
    }
  }
);
