import { toastifyMessage } from '@/components/Toastify/Toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProfileUser = createAsyncThunk(
  'profile/getProfileUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/users/userProfile');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const gaveUser = createAsyncThunk(
  'profile/gaveUser',
  async (navigate, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.patch('/api/users/status/submitted');
      toastifyMessage({
        message: 'Успешно',
        duration: 1500,
        status: 'success',
      });
      navigate('/gave-up');
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Упс что то пошло не так попробуйте еще раз',
        duration: 1500,
        status: 'error',
      });
      return rejectWithValue(error);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(
        `/api/users/updateProfile`,
        value
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const addFileAWS3 = createAsyncThunk(
//   'profile/addFileAWS3',
//   async()=>{
//     try {
      
//     } catch (error) {
      
//     }
//   }
// )