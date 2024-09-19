import { configureStore } from '@reduxjs/toolkit';

export const setupStore = ({ persistedReducer, middlewareOptions }) => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(middlewareOptions),
  });
};
