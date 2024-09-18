import { StrictMode } from 'react';

import { ReduxToolkitProvider } from './ReduxToolkitProvider';
import { MaterialProvider } from './MaterialProvider';
import { ErrorBoundaryProvider } from './ErrorBoundaryProvider';
import { WithCheckClient } from './WithCheckClient';

export const CombinedProviders = ({ children }) => {
  return (
    <StrictMode>
      <MaterialProvider>
        <ReduxToolkitProvider>
          <ErrorBoundaryProvider>
            <WithCheckClient>{children}</WithCheckClient>
          </ErrorBoundaryProvider>
        </ReduxToolkitProvider>
      </MaterialProvider>
    </StrictMode>
  );
};
