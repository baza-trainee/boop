import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import modalSlice from './slices/modalSlice';
import { photoApi } from './api/photoApi';

const rootReducer = combineReducers({
  counter: counterSlice,
  modals: modalSlice,
  [photoApi.reducerPath]: photoApi.reducer,
});

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photoApi.middleware),
});

export const makeStore = () => {
  return rootStore;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
