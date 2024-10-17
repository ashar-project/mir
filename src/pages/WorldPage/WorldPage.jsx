import { Box } from '@mui/material';
import { RatingTable } from '@/modules/World';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@/components/Spinner/Spinner';
import { useEffect } from 'react';
import { getProfileUser } from '@/store/slice/profileSlice/profileThunk';

export const WorldPage = () => {
  const { isLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileUser());
  }, []);
  
  return (
    <Box width="100%" height="100vh">
      {isLoading && <Spinner />}
      <RatingTable />
    </Box>
  );
};
