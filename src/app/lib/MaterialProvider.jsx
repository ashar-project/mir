import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    // fontFamily: "Montserrat",
  },
});

export const MaterialProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
