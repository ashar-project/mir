import { Grid2 as Grid } from '@mui/material';
import { Cards, CustomGrid } from '@/components';

const data = [
  { name: 'John Smith', percent: 23 },
  { name: 'Emily Johnson', percent: 45 },
  { name: 'Michael Williams', percent: 67 },
  { name: 'Sophia Brown', percent: 12 },
  { name: 'David Jones', percent: 89 },
  { name: 'Olivia Garcia', percent: 34 },
  { name: 'James Miller', percent: 78 },
  { name: 'Emma Davis', percent: 56 },
  { name: 'Daniel Martinez', percent: 44 },
  { name: 'Ava Rodriguez', percent: 91 },
  { name: 'William Hernandez', percent: 37 },
  { name: 'Isabella Wilson', percent: 63 },
  { name: 'Alexander Moore', percent: 28 },
  { name: 'Mia Taylor', percent: 50 },
  { name: 'Benjamin Anderson', percent: 100 },
];

export const GraduatedTable = () => {
  return (
    <CustomGrid>
      {data.map(({ name, percent }) => (
        <Grid item="true" key={name}>
          <Cards name={name} percentage={percent} />
        </Grid>
      ))}
    </CustomGrid>
  );
};
