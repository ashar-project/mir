import { Box } from '@mui/material';
import { RatingTable } from '@/modules/World';
import { useSelector } from 'react-redux';
import { Spinner } from '@/components/Spinner/Spinner';

export const WorldPage = () => {
  const { isLoading } = useSelector(state => state.user);
  return (
    <Box width="100%" height="100vh">
      {isLoading && <Spinner />}
      <RatingTable />
    </Box>
  );
};
