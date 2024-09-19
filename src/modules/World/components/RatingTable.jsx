import { Grid2 as Grid, Box } from '@mui/material';
import { useTheme } from '@emotion/react';

import { data } from '../helpers/mock-data';

import { RatingCard } from './RatingCard';
import { CustomGrid } from '@/components';

export const RatingTable = () => {
  const theme = useTheme();

  return (
    <CustomGrid>
      {data.map(({ id, from, to }) => (
        <Grid item="true" key={id}>
          <RatingCard key={id} rating={id} minAmount={from} maxAmount={to} />
        </Grid>
      ))}
    </CustomGrid>
  );
};
