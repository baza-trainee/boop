import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import modalSlice from './slices/modalSlice';
import alertSlice from './slices/alertSlice';
import { photoApi } from './api/photoApi';
import { teamApi } from './api/teamApi';
import { documentsApi } from './api/documentsApi';
import { contactsApi } from './api/contactsApi';
import { counterApi } from './api/counterApi';
import { pressApi } from './api/pressApi';
import { testimonialsApi } from './api/testimonialsApi';
import { applicationsApi } from './api/applicationsApi';
import paymentFormSlice from './slices/paymentFormSlice';
import { partnersFriendsApi } from './api/partnersFriendsApi';
import { blogApi } from './api/blogApi';

const rootReducer = combineReducers({
  modals: modalSlice,
  alerts: alertSlice,
  paymentForm: paymentFormSlice,
  [photoApi.reducerPath]: photoApi.reducer,
  [teamApi.reducerPath]: teamApi.reducer,
  [documentsApi.reducerPath]: documentsApi.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  [counterApi.reducerPath]: counterApi.reducer,
  [pressApi.reducerPath]: pressApi.reducer,
  [partnersFriendsApi.reducerPath]: partnersFriendsApi.reducer,
  [testimonialsApi.reducerPath]: testimonialsApi.reducer,
  [applicationsApi.reducerPath]: applicationsApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
});

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      photoApi.middleware,
      documentsApi.middleware,
      contactsApi.middleware,
      documentsApi.middleware,
      teamApi.middleware,
      counterApi.middleware,
      testimonialsApi.middleware,
      pressApi.middleware,

      partnersFriendsApi.middleware,
      testimonialsApi.middleware,
      applicationsApi.middleware,
      blogApi.middleware
    ),
});

export const makeStore = () => {
  return rootStore;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

setupListeners(rootStore.dispatch);
