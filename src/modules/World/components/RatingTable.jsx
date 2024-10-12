import { Grid2 as Grid } from '@mui/material';

import { data } from '../helpers/mock-data';

import { RatingCard } from './RatingCard';
import { CustomGrid } from '@/components';
import { useDispatch } from 'react-redux';
import { getWorld } from '@/store/slice/userSlice/userThunk';
import { useNavigate } from 'react-router-dom';

export const RatingTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const back = (from, to, id) => {
    dispatch(getWorld({ minAmount: from, maxAmount: to, id, navigate }));
  };

  return (
    <CustomGrid>
      {data.map(({ id, from, to }) => (
        <Grid item="true" key={id} onClick={() => back(from, to, id)}>
          <RatingCard key={id} rating={id} minAmount={from} maxAmount={to} />
        </Grid>
      ))}
    </CustomGrid>
  );
};
