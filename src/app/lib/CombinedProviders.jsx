import { StrictModeProvider } from "./StrictModeProvider";

export const CombinedProviders = ({ children }) => {
  return <StrictModeProvider>{children}</StrictModeProvider>;
};
