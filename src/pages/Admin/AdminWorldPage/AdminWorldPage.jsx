import { Box, Button, styled, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '@/components/Spinner/Spinner';
import { AdminRatingTable } from './components/AdminRaitingTable/AdminRaitingTable';


export const AdminWorldPage = () => {
  const { isLoading } = useSelector(state => state.userAdmin);
  const dispatch = useDispatch();

  return (
    <Box width="100%" height="100vh">
      {isLoading && <Spinner />}
      <AdminRatingTable />
    </Box>
  );
};
