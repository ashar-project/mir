import { Provider } from 'react-redux';
import { storeConfig } from '@/store';

export const ReduxToolkitProvider = ({ children }) => {
  return <Provider store={storeConfig}>{children}</Provider>;
};
