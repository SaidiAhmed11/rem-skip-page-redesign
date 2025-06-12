import { configureStore } from '@reduxjs/toolkit';
import allReducers from './reducers'; // assuming it's ./reducers/index.js

const store = configureStore({
  reducer: allReducers,
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
