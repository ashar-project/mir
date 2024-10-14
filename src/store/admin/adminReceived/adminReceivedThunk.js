import { toastifyMessage } from '@/components/Toastify/Toastify';
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
      const { data } = await axiosInstance.get(`/api/users/receivedUser/${id}`);
      navigate(`${id}/received-inner-page`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postReceivedUserPayment = createAsyncThunk(
  'adminReceived/postReceivedUserPayment',
  async ({ userId, value }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        `/api/payments/${userId}/addPayment`,
        value
      );
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
