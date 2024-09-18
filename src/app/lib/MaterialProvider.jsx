import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const MaterialProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
