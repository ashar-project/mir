import { RouterProvider } from "./RouterProvider";
import { StrictModeProvider } from "./StrictModeProvider";
import { ReduxToolkitProvider } from "./ReduxToolkitProvider";

export const CombinedProviders = ({ children }) => {
  return (
    <StrictModeProvider>
      <RouterProvider>
        <ReduxToolkitProvider>{children}</ReduxToolkitProvider>
      </RouterProvider>
    </StrictModeProvider>
  );
};
