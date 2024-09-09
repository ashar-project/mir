import { StrictMode } from "react";

export const StrictModeProvider = ({ children }) => {
  return <StrictMode>{children}</StrictMode>;
};
