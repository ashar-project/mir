import { Box, Grid2 as Grid, styled } from '@mui/material';

import { CustomGrid } from '@/components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAdminWorld } from '@/store/admin/adminWorld/adminWorldThunk';
import { data } from '@/modules/World/helpers/mock-data';
import { RatingCard } from '@/modules/World/components';

export const AdminRatingTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const back = (from, to, id) => {
    dispatch(getAdminWorld({ minAmount: from, maxAmount: to, id, navigate }));
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
