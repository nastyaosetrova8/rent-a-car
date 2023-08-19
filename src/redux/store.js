import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/advertsSlice';
import { modalReducer } from './modal/modalSlice';
import { favoriteReducer } from './favorites/favoriteSlice';


export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    modal: modalReducer,
    favorite: favoriteReducer,
  },
});
