import { createSlice } from '@reduxjs/toolkit';
import { getAllAdvertsThunk } from './advertsThunks';

export const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
  filter: '',
};

function handlePending(state) {
  state.isLoading = true;
  state.error = null;
}

function handleRejected(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

function handleFulfilled(state, { payload }) {
  state.isLoading = false;
  state.adverts = [...state.adverts, ...payload];
}

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    filterAdverts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllAdvertsThunk.fulfilled, handleFulfilled)

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { filterAdverts } = advertsSlice.actions;