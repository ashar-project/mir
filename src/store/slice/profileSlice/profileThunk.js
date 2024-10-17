import { toastifyMessage } from '@/components/Toastify/Toastify';
import { axiosInstance } from '@/config/axiosInstans';
import { axiosInstanceFile } from '@/config/axiosInstansFile';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGaveUp } from '../gaveUpSlice/gaveUpThunk';
import { toast } from 'react-toastify';

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
  async (navigate, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.patch('/api/users/status/submitted');

      toast(data.message || 'Успешно!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });
      navigate('/gave-up');
      dispatch(getGaveUp());
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

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async ({ value, navigate }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.put(
        `/api/users/updateProfile`,
        value
      );

      toast(data.message || 'Профиль успешно изменен!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
      });

      dispatch(getProfileUser());
      navigate(-1);
      return data;
    } catch (error) {
      toast('Упс, что-то пошло не так. Попробуйте еще раз.', {
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

export const addFileAWS3 = createAsyncThunk(
  'profile/addFileAWS3',
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      if (file && file instanceof File) {
        formData.append('file', file);
        console.log('FormData содержит файл:', formData.get('file'));
      } else {
        alert('Передан некорректный файл:', file);
      }

      const { data } = await axiosInstanceFile.post(
        '/api/awsS3/upload',
        formData
      );

      toast(data.message || 'Фото успешно загружен!', {
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
      const errorMessage =
        error.response?.data?.message ||
        'Упс, что-то пошло не так. Попробуйте еще раз.';

      toast(errorMessage, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        type: 'error',
      });
      return rejectWithValue({ message: errorMessage });
    }
  }
);
