import { createSlice } from '@reduxjs/toolkit';

const initialStateModal = {
  isShowModal: false,
  advertId: null, 
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialStateModal,
  reducers: {
    toggleShowModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },
    saveIdAdvert: (state, { payload }) => {
      state.advertId = payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { toggleShowModal, saveIdAdvert } = modalSlice.actions;
  
