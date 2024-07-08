import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import modalSlice from './slices/modalSlice';
import alertSlice from './slices/alertSlice';
import { photoApi } from './api/photoApi';
import { teamApi } from './api/teamApi';
import { documentsApi } from './api/documentsApi';
import { contactsApi } from './api/contactsApi';
import { counterApi } from './api/counterApi';
import { testimonialsApi } from './api/testimonialsApi';
import { applicationsApi } from './api/applicationsApi';
import paymentFormSlice from './slices/paymentFormSlice';

const rootReducer = combineReducers({
  modals: modalSlice,
  alerts: alertSlice,
  paymentForm: paymentFormSlice,
  [photoApi.reducerPath]: photoApi.reducer,
  [teamApi.reducerPath]: teamApi.reducer,
  [documentsApi.reducerPath]: documentsApi.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  [counterApi.reducerPath]: counterApi.reducer,
  [testimonialsApi.reducerPath]: testimonialsApi.reducer,
  [applicationsApi.reducerPath]: applicationsApi.reducer,
});

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      photoApi.middleware,
      documentsApi.middleware,
      contactsApi.middleware,
      documentsApi.middleware,
      teamApi.middleware,
      counterApi.middleware,
      testimonialsApi.middleware,
      applicationsApi.middleware
    ),
});

export const makeStore = () => {
  return rootStore;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

setupListeners(rootStore.dispatch);
