import { Box, Grid2 as Grid } from '@mui/material';
import { useTheme } from '@emotion/react';

export const CustomGrid = ({ children }) => {
  const theme = useTheme();

  return (
    <Box flexGrow={1}>
      <Grid
        container
        sx={{
          rowGap: '20px',
          columnGap: '20px',
          padding: '10px 10px',

          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            gap: '25px',
            justifyContent: 'center',
            // padding: '15px 15px',
          },
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};
