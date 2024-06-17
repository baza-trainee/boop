import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import modalSlice from './slices/modalSlice';
import { pokemonApi } from './api/pokemonApi';

const rootReducer = combineReducers({
  counter: counterSlice,
  modals: modalSlice,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export const makeStore = () => {
  return rootStore;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
