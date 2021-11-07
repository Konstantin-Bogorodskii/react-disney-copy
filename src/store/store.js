import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './reducers/userSlice';
import movieReducer from './reducers/movieSlice';

const rootReducer = combineReducers({ userReducer, movieReducer });
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
