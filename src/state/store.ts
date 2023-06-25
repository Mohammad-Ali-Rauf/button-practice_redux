import { configureStore } from '@reduxjs/toolkit';
import changeColorReducer from './slices/changeColor';

const store = configureStore({
  reducer: {
    color: changeColorReducer,
  },
});

export default store;
