import { Box, Grid2 as Grid } from '@mui/material';
import { useTheme } from '@emotion/react';

export const CustomGrid = ({ children }) => {
  const theme = useTheme();

  return (
    <Box flexGrow={1}>
      <Grid
        container
        sx={{
          rowGap: '10px',
          columnGap: '10px',
          padding: '5px 5px',

          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};
