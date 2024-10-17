import { Grid2 as Grid } from '@mui/material';
import { Cards, CustomGrid } from '@/components';

export const GraduatedTable = ({ data, goInnerPage }) => {
  const upId = id => {
    if (typeof goInnerPage === 'function') {
      goInnerPage(id);
    } else {
      console.error('goInnerPage is not a function');
    }
  };
  return (
    <CustomGrid>
      {data.map(({ userName, photoUrl, id }, index) => (
        <Grid item={'true'} xs={12} key={id || index} onClick={() => upId(id)}>
          <Cards name={userName} imageSrc={photoUrl} />
        </Grid>
      ))}
    </CustomGrid>
  );
};
