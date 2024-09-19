import { Grid2 as Grid, Box } from '@mui/material';

import { data } from '../helpers/mock-data';

import { RatingCard } from './RatingCard';
import { CustomGrid } from '@/components';

export const RatingTable = () => {
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
