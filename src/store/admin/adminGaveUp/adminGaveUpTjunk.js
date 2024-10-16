import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getAdminGaveUp = createAsyncThunk(
  'adminGaveUp/getAdminGaveUp',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/users/submitted');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchGaveUp = createAsyncThunk(
  'adminGaveUp/searchGaveUp',
  async (query, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/users/search/submittedUser?query=${query}`
      );
      dispatch(getAdminGaveUp());

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteGaveUpdUsers = createAsyncThunk(
  'adminGaveUp/deleteGaveUpdUsers',
  async (_, { rejectWithValue, dispatch }) => {
    const SUBMITTED = 'SUBMITTED';
    try {
      const { data } = await axiosInstance.delete(
        `/api/users/clearUserByStatus`,
        {
          params: { status: SUBMITTED },
        }
      );

      toast(
        data.message || 'Успешно удалено все сдавшиеся участники',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
          type: 'success',
        }
      );
      dispatch(getAdminGaveUp());

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
