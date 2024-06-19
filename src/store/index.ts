import { configureStore, combineReducers } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';
import alertSlice from './slices/alertSlice';
import { photoApi } from './api/photoApi';

const rootReducer = combineReducers({
  modals: modalSlice,
  alerts: alertSlice,
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
