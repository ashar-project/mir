import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  // breakpoints: {
  //   values: {
  //     null: 0,
  //     mobile: 450,
  //     tablet: 640,
  //     laptop: 1024,
  //     desktop: 1200,
  //   },
  // },
});

export const MaterialProvider = ({ children }) => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    </CssBaseline>
  );
};
