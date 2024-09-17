import { Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '@/store/persist';

export const PersistProvider = ({ children }) => {
  return (
    <Suspense>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Suspense>
  );
};
