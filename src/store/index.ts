import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import modalSlice from './slices/modalSlice';
import alertSlice from './slices/alertSlice';
import { photoApi } from './api/photoApi';
import { teamApi } from './api/teamApi';
import { documentsApi } from './api/documentsApi';

const rootReducer = combineReducers({
  modals: modalSlice,
  alerts: alertSlice,
  [photoApi.reducerPath]: photoApi.reducer,
  [teamApi.reducerPath]: teamApi.reducer,
  [documentsApi.reducerPath]: documentsApi.reducer,
});

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      photoApi.middleware,
      documentsApi.middleware,
      teamApi.middleware
    ),
});

export const makeStore = () => {
  return rootStore;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

setupListeners(rootStore.dispatch);
