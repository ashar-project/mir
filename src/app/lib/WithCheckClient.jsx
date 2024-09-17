import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

export const WithCheckClient = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'));

  console.log(isMobile);

  return children;
};
