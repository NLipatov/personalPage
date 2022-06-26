import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from './ThemeSlice';

export const store = configureStore({
  reducer: {
    counter: ThemeReducer,
  },
});
