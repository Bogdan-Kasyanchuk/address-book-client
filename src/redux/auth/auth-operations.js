import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import toast from 'react-hot-toast';
import token from 'service/axiosBase';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      token.set(data.payload.token);
      return data.payload;
    } catch (error) {
      // toast.error(
      //   'The email you entered is already registered, please try another email!',
      // );
      return rejectWithValue(error);
    }
  },
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      token.set(data.payload.token);
      return data.payload;
    } catch (error) {
      // toast.error('Email or password entered incorrectly!');
      return rejectWithValue(error);
    }
  },
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('/auth/logout');
      token.unset();
    } catch (error) {
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
    token.set(currentToken);
    try {
      const { data } = await axios.get('users/current');
      return data.payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateUser = createAsyncThunk(
  'users/update',
  async ({ file, name }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      if (file) {
        formData.append('avatar', file);
      }
      formData.append('name', name);
      const { data } = await axios.put(`/users`, formData);
      // toast.success('Avatar update successfully!');
      return data.payload;
    } catch (error) {
      // toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);

export const deleteAvatarUser = createAsyncThunk(
  'users/deleteAvatar',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/users/avatars`);
      // toast.success('Avatar deleted successfully!');
      return data.payload;
    } catch (error) {
      // toast.error(`${error}`);
      return rejectWithValue(error);
    }
  },
);
