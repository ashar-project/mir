import { CssBaseline } from "@mui/material";
import { StrictModeProvider } from "./StrictModeProvider";
import { ReduxToolkitProvider } from "./ReduxToolkitProvider";
import { MaterialProvider } from "./MaterialProvider";

export const CombinedProviders = ({ children }) => {
  return (
    <StrictModeProvider>
      <CssBaseline>
        <MaterialProvider>
          <ReduxToolkitProvider>{children}</ReduxToolkitProvider>
        </MaterialProvider>
      </CssBaseline>
    </StrictModeProvider>
  );
};
