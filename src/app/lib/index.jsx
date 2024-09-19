import { StrictMode } from 'react';

import { ReduxToolkitProvider } from './ReduxToolkitProvider';
import { MaterialProvider } from './MaterialProvider';
import { ErrorBoundaryProvider } from './ErrorBoundaryProvider';

export const CombinedProviders = ({ children }) => {
  return (
    <StrictMode>
      <MaterialProvider>
        <ReduxToolkitProvider>
          <ErrorBoundaryProvider>{children}</ErrorBoundaryProvider>
        </ReduxToolkitProvider>
      </MaterialProvider>
    </StrictMode>
  );
};
