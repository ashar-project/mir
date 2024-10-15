import { toastifyMessage } from '@/components/Toastify/Toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { axiosInstanceFile } from '@/config/axiosInstansFile';
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
    console.log(value);
    try {
      const { data } = await axiosInstance.put(
        `/api/users/updateProfile`,
        value
      );
      toastifyMessage({
        message: 'Профиль успешно изменен ',
        duration: 2500,
        status: 'success',
      });
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Упс, что-то пошло не так. Попробуйте еще раз.',
        duration: 2500,
        status: 'error',
      });
      return rejectWithValue(error);
    }
  }
);

export const addFileAWS3 = createAsyncThunk(
  'profile/addFileAWS3',
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      if (file && file instanceof File) {
        formData.append('file', file);
        console.log('FormData содержит файл:', formData.get('file'));
      } else {
        console.error('Передан некорректный файл:', file);
      }

      const { data } = await axiosInstanceFile.post(
        '/api/awsS3/upload',
        formData
      );
      toastifyMessage({
        message: 'Фото успешно загружен',
        duration: 2500,
        status: 'success',
      });
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        'Упс, что-то пошло не так. Попробуйте еще раз.';
      toastifyMessage({
        message: errorMessage,
        duration: 2500,
        status: 'error',
      });
      return rejectWithValue({ message: errorMessage }); // Возвращаем простое сообщение об ошибке
    }
  }
);
