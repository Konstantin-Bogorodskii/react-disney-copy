import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './reducers/userSlice';

const rootReducer = combineReducers({ userReducer });
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
