import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 450,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export const MaterialProvider = ({ children }) => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </CssBaseline>
  );
};
