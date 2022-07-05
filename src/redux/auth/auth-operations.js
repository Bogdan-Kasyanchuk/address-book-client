import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import tokenService from 'service/tokenService';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      tokenService.set(data.payload.token);
      toast.success(data.payload.message);
      return data.payload;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      tokenService.set(data.payload.token);
      toast.success(data.payload.message);
      return data.payload;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('/auth/logout');
      tokenService.unset();
      toast.success('User logout successful');
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);

export const currentUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const currentToken = thunkAPI.getState().auth.token;
    if (!currentToken) {
      return thunkAPI.rejectWithValue();
    }
    tokenService.set(currentToken);
    try {
      const { data } = await axios.get('users/current');
      // toast.success(data.payload.message);
      return data.payload;
    } catch (error) {
      toast.error(
        thunkAPI.rejectWithValue(error).payload.response.data.payload.message,
      );
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateUser = createAsyncThunk(
  'users/update',
  async ({ fileAvatar, name }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      if (fileAvatar) {
        formData.append('avatar', fileAvatar);
      }
      formData.append('name', name);
      const { data } = await axios.put(`/users`, formData);
      toast.success(data.payload.message);
      return data.payload;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);

export const deleteAvatarUser = createAsyncThunk(
  'users/deleteAvatar',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/users/avatars`);
      toast.success(data.payload.message);
      return data.payload;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);
