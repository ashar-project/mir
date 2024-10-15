import { toastifyMessage } from '@/components/Toastify/Toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAdminGraduated = createAsyncThunk(
  'adminGraduated/getAdminGraduated',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        '/api/users/getAllGraduatedUsers'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteGraduatedUsers = createAsyncThunk(
  'adminGraduated/deleteGraduatedUsers',
  async (_, { rejectWithValue }) => {
    const RECEIVED = 'RECEIVED';
    try {
      const { data } = await axiosInstance.delete(
        `/api/users/clearUserByStatus`,
        {
          params: { status: RECEIVED },
        }
      );
      toastifyMessage({
        message: 'Успешно удалено все закончившие участники',
        status: 'success',
        duration: 2500,
      });
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
