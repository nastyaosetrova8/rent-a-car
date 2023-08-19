import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64c0e93bfa35860bae9f9ed2.mockapi.io/contacts';

export const getAllAdvertsThunk = createAsyncThunk(
  'adverts/getAdverts',
  async (count, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/adverts', {
        params: {
          page: count,
          limit: 8,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
