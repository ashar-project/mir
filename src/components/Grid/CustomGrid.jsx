import { Box, Grid2 as Grid } from '@mui/material';
import { useTheme } from '@emotion/react';

export const CustomGrid = ({ children }) => {
  const theme = useTheme();

  return (
    <Box flexGrow={1}>
      <Grid
        container
        sx={{
          rowGap: '75px',
          columnGap: '35px',
          padding: '30px 15px',

          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            gap: '25px',
            justifyContent: 'center',
          },
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};
