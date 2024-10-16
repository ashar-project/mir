import { toastifyMessage } from '@/components/Toastify/Toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdminReceived } from '../adminReceived/adminReceivedThunk';

export const getAdminWorld = createAsyncThunk(
  'user/getAdminWorld',
  async ({ minAmount, maxAmount }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/users/getUsersFromWorldByRating?minAmount=${minAmount}&maxAmount=${maxAmount}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getByIdWorldInfo = createAsyncThunk(
  'user/getByIdWorldUser',
  async ({ userId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/payments/userWorld/${userId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addDebtUser = createAsyncThunk(
  'user/addDebtUser',
  async ({ userId, debtSum, navigate }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.post(
        `/api/payments/${userId}/giveDebt`,
        {
          debtSum: debtSum,
        }
      );
      toastifyMessage({
        message: data.message,
        status: 'success',
        duration: 2500,
      });
      navigate('/admin/received-page');
      dispatch(getAdminReceived());
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Упс что то пошло не так попробуйте еще раз',
        status: 'error',
        duration: 2500,
      });
      return rejectWithValue(error);
    }
  }
);

export const seaarchUsers = createAsyncThunk(
  'user/searchUser',
  async (search, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/users/search?query=${search}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
