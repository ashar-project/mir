import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
      toastifyMessage({
        message: 'Успешно удалено все сдавшиеся участники',
        status: 'success',
        duration: 2500,
      });
      dispatch(getAdminGaveUp());

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
