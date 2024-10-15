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

export const deleteGaveUpdUsers = createAsyncThunk(
  'adminGraduated/deleteGaveUpdUsers',
  async (_, { rejectWithValue }) => {
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
