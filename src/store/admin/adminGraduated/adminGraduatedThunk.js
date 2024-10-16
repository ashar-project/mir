import { toastifyMessage } from '@/components/Toastify/Toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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

      toast(data.message || 'Успешно удалено все закончившие участники', {
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
