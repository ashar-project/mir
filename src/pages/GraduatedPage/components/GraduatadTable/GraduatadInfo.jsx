import { Grid2 as Grid } from '@mui/material';
import { CustomGrid } from '@/components';
import { GraduatadCards } from '../..';

export const GraduatedInfo = ({ data, goInnerPage }) => {
  const upId = id => {
    if (typeof goInnerPage === 'function') {
      goInnerPage(id);
    } else {
      console.error('goInnerPage is not a function');
    }
  };

  return (
    <CustomGrid>
      {data.map(({ userName, photoUrl, id, totalSum }, index) => (
        <Grid item={'true'} xs={12} key={id || index} onClick={() => upId(id)}>
          <GraduatadCards name={userName} imageSrc={photoUrl} totalSum={totalSum} />
        </Grid>
      ))}
    </CustomGrid>
  );
};
