import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { rootReducer } from './reducers';
import { setupStore } from './store';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sidebar'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareOptions = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

const store = setupStore({ persistedReducer, middlewareOptions });
export const persistor = persistStore(store);
export const storeConfig = store;
