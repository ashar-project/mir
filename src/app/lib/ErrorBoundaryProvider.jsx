import { ErrorBoundary as ErrorCoreBoundary } from 'react-error-boundary';

export const ErrorBoundaryProvider = ({ children }) => (
  <ErrorCoreBoundary fallback={<>Случилась какая-то ошибка</>}>
    {children}
  </ErrorCoreBoundary>
);
