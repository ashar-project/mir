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

export const searchesReceived = createAsyncThunk(
  'adminReceived/searchesReceived',
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/users/search/receivedUser?query=${query}`
      );
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
      navigate(`/admin/received-page/${id}/received-inner-page`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postReceivedUserPayment = createAsyncThunk(
  'adminReceived/postReceivedUserPayment',
  async ({ userId, value, navigate }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.post(
        `/api/payments/${userId}/addPayment`,
        {
          sum: value.sum,
          status: value.status,
        }
      );

      toastifyMessage({
        message: 'Успешно',
        status: 'success',
        duration: 1500,
      });

      let id = userId;
      dispatch(getReceivedUser({ id, navigate }));
      dispatch(getAdminReceived());

      return data;
    } catch (error) {
      const simplifiedError = {
        message: error.response?.data?.message || 'Что-то пошло не так',
        statusCode: error.response?.status || 500,
      };
      toastifyMessage({
        message: 'Упс что-то пошло не так, попробуйте еще раз',
        status: 'error',
        duration: 1500,
      });
      return rejectWithValue(simplifiedError);
    }
  }
);
