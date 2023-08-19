import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialStateFavorite = {
  favoriteItems: localStorage.getItem('favoriteItems')
    ? JSON.parse(localStorage.getItem('favoriteItems'))
    : [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialStateFavorite,
  reducers: {
    
    toggleFavorite(state, action) {
      const itemIndex = state.favoriteItems.findIndex(
        item => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        const removedItem = state.favoriteItems.splice(itemIndex, 1)[0];
        localStorage.setItem(
          'favoriteItems',
          JSON.stringify(state.favoriteItems)
        );
        toast.error(`${removedItem.make} removed`);
      } else {
        const tempAdverts = { ...action.payload, favoriteQuantity: 1 };
        state.favoriteItems.push(tempAdverts);
        localStorage.setItem(
          'favoriteItems',
          JSON.stringify(state.favoriteItems)
        );
        toast.success(`${action.payload.make} added to favorite`);
      }
    },

    removeAllFavoritesCars(state) {
      state.favoriteItems = [];
      localStorage.setItem(
        'favoriteItems',
        JSON.stringify(state.favoriteItems)
      );
      toast.error('All favorites removed');
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const {
  addToFavorite,
  removeFavoriteCar,
  removeAllFavoritesCars,
  toggleFavorite,
} = favoriteSlice.actions;
