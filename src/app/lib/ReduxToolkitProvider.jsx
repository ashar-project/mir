import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { storeConfig } from '@/store';
import { persistor } from '@/store/persist';

export const ReduxToolkitProvider = ({ children }) => {
  return (
    <Provider store={storeConfig}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
