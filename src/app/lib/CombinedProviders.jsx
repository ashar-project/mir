import { CssBaseline } from '@mui/material';
import { StrictModeProvider } from './StrictModeProvider';
import { ReduxToolkitProvider } from './ReduxToolkitProvider';
import { MaterialProvider } from './MaterialProvider';
import { PersistProvider } from './PersistProvider';
import { WithCheckClient } from './WithCheckClient';

export const CombinedProviders = ({ children }) => {
  return (
    <StrictModeProvider>
      <CssBaseline>
        <MaterialProvider>
          <ReduxToolkitProvider>
            <PersistProvider>{children}</PersistProvider>
          </ReduxToolkitProvider>
        </MaterialProvider>
      </CssBaseline>
    </StrictModeProvider>
  );
};
