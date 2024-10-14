import { Box, Grid2 as Grid, styled } from '@mui/material';

import { CustomGrid } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAdminWorld } from '@/store/admin/adminWorld/adminWorldThunk';
import { data } from '@/modules/World/helpers/mock-data';
import { RatingCard } from '@/modules/World/components';
import { Spinner } from '@/components/Spinner/Spinner';

export const AdminRatingTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.userAdmin);

  const back = (from, to, id) => {
    dispatch(getAdminWorld({ minAmount: from, maxAmount: to }))
      .then(result => {
        if (result.meta.requestStatus === 'fulfilled') {
          navigate(`/admin/worlds-page/${id}/worldRaiting`);
        } else {
          console.error('Ошибка при получении данных:', result.error.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <CustomGrid>
      {isLoading && <Spinner />}
      {data.map(({ id, from, to }) => (
        <Grid item="true" key={id} onClick={() => back(from, to, id)}>
          <RatingCard key={id} rating={id} minAmount={from} maxAmount={to} />
        </Grid>
      ))}
    </CustomGrid>
  );
};
