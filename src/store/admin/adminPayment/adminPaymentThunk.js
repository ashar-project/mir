import { toastifyMessage } from '@/components/Toastify/Toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const postPayment = createAsyncThunk(
  'pay/postPayment',
  async ({ value, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/api/payments/addSum', value);
      navigate('/admin/worlds-page');

      toast(data.message || 'Успешно добавлен!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
      return data;
    } catch (error) {
      toast(
        error?.response?.data?.exceptionMessage ||
          'Упс что то пошло не так попробуйте еще раз',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          type: 'error',
        }
      );
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

      toast(data.message || 'Успешно !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
      navigate('/admin/worlds-page');
      return data;
    } catch (error) {
      toast('Упс что то пошло не так попробуйте еще раз', {
        position: 'top-right',
        autoClose: 5000,
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
