import { toast } from 'react-toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (value, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/api/auth/signUp', value);

      toast(response.data.message || 'Регистрация прошла успешно!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });

      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.exceptionMessage ||
        'Произошла ошибка при регистрации';

      toast(errorMessage, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        type: 'error',
      });

      return rejectWithValue(error.response?.data || errorMessage);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/api/auth/signIn', value);

      toast(data.message || 'Авторизация успешна!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        type: 'success',
      });

      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.exceptionMessage || 'Ошибка при авторизации';

      toast(errorMessage, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        type: 'error',
      });

      return rejectWithValue(errorMessage);
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

      toast(
        'Проверьте электронную почту для получения инструкций по сбросу пароля.',
        {
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          type: 'success',
        }
      );
    } catch (error) {
      toast('Упс, что-то пошло не так', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        type: 'error',
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

      toast('Пароль успешно изменен', {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        type: 'success',
      });

      reset();

      setTimeout(() => {
        window.location.pathname = '/sign-in';
      }, 500);
    } catch (error) {
      toast('Упс, что-то пошло не так', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        type: 'error',
      });
      return rejectWithValue(error);
    }
  }
);
