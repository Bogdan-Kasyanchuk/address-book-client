import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const getContact = createAsyncThunk(
  'contact/get',
  async (favorite, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/contacts?favorite=${favorite ?? ''}`);
      if (data.payload.contacts.length) {
        toast.success(data.payload.message);
      }
      return data.payload.contacts;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contact/add',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success(data.payload.message);
      return data.payload.contact;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      toast.success(data.payload.message);
      return id;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);

export const updateContact = createAsyncThunk(
  'contact/update',
  async (
    { id, name, phone, email, address, other, fileAvatar },
    { rejectWithValue },
  ) => {
    try {
      const formData = new FormData();
      if (fileAvatar) {
        formData.append('avatar', fileAvatar);
      }
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('address', address);
      formData.append('other', other);
      const { data } = await axios.put(`/contacts/${id}`, formData);
      toast.success(data.payload.message);
      return data.payload.contact;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);

export const editFavoriteContact = createAsyncThunk(
  'contact/editFavorite',
  async ({ id, favorite }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}/favorite`, {
        favorite,
      });
      toast.success(data.payload.message);
      return data.payload.contact;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);

export const deleteAvatarContact = createAsyncThunk(
  'contact/deleteAvatar',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}/avatars`);
      toast.success(data.payload.message);
      return data.payload.contact;
    } catch (error) {
      toast.error(rejectWithValue(error).payload.response.data.payload.message);
      return rejectWithValue(error);
    }
  },
);
