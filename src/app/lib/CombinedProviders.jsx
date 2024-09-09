import { RouterProvider } from "./RouterProvider";
import { StrictModeProvider } from "./StrictModeProvider";

export const CombinedProviders = ({ children }) => {
  return (
    <StrictModeProvider>
      <RouterProvider>{children}</RouterProvider>
    </StrictModeProvider>
  );
};
