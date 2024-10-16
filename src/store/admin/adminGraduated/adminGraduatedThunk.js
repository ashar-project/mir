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

export const searchesGraduated = createAsyncThunk(
  'adminGraduated/searchesGraduated',
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/users/search/finishedUser?query=${query}`
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
    const FINISHED = 'FINISHED';
    try {
      const { data } = await axiosInstance.delete(
        `/api/users/clearUserByStatus`,
        {
          params: { status: FINISHED },
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
