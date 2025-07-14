import { configureStore } from '@reduxjs/toolkit';
import toyReducer from '../features/toys/toySlice';

export const store = configureStore({
  reducer: {
    toys: toyReducer,
  },
});
