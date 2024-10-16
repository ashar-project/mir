import { toastifyMessage } from '@/components/Toastify/Toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (value, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/auth/signUp', value);

      toastifyMessage({
        message: response.data.message,
        status: 'success',
        duration: 1500,
      });

      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.exceptionMessage;

      toastifyMessage({
        message: errorMessage,
        status: 'error',
        duration: 2500,
      });

      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/api/auth/signIn', value);
      toastifyMessage({
        message: data.message,
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

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (value, { rejectWithValue }) => {
    try {
      await axiosInstance.post(
        `/api/auth/forgot-password?email=${value.email}&link=${value.link}`
      );
      toastifyMessage({
        message:
          'Проверьте электронную почту для получения инструкций по сбросу пароля.',
        status: 'success',
        duration: 2500,
      });
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
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, newPassword, reset }, { rejectWithValue }) => {
    try {
      await axiosInstance.post(`/api/auth/reset_password`, {
        newPassword,
        token,
      });
      toastifyMessage({
        message: 'Пароль успешно изменен',
        status: 'success',
        duration: 2500,
      });
      reset();

      setTimeout(() => {
        window.location.pathname = '/sign-in';
      }, 500);
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
