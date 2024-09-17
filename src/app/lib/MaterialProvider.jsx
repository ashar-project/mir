import { createTheme, ThemeProvider } from '@mui/material';

export const displayValues = {
  mobile: 450,
  tablet: 640,
  laptop: 1024,
  desktop: 1200,
};

const theme = createTheme({
  breakpoints: {
    values: displayValues,
  },
});

export const MaterialProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
