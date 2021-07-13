import { configureStore } from '@reduxjs/toolkit';
import jobReducer from '../features/dataJob/jobSlice';

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});
