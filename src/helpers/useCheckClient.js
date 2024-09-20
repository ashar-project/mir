import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

export const useCheckClient = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobile'));

  return { isMobile };
};
