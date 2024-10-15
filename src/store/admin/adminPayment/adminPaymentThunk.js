import { toastifyMessage } from '@/components/Toastify/Toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postPayment = createAsyncThunk(
  'pay/postPayment',
  async ({ value, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/api/payments/addSum', value);
      navigate('/admin/worlds-page');
      toastifyMessage({
        message: 'Успешно',
        status: 'success',
        duration: 1500,
      });
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Упс что то пошло не так попробуйте еще раз',
        status: 'error',
        duration: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const returnPayUser = createAsyncThunk(
  'pay/returnPayUser',
  async ({ value, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        '/api/payments/refundSum',
        value
      );

      toastifyMessage({
        message: 'Успешно',
        status: 'success',
        duration: 1500,
      });
      navigate('/admin/worlds-page');
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Упс что то пошло не так попробуйте еще раз',
        status: 'error',
        duration: 1500,
      });
      return rejectWithValue(error);
    }
  }
);
