import { graduatadThunk } from '@/store/slice/graduatadSlice/graduatadThunk';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GraduatedInfo } from '.';
import { NodFound } from '@/assets/image';
import { Spinner } from '@/components/Spinner/Spinner';

export const GraduatedPage = () => {
  const { isLoading, all } = useSelector(state => state.graduatad);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(graduatadThunk());
  }, []);

  return (
    <Box height="100vh" width="100%">
      {isLoading && <Spinner />}
      {all.length ? (
        <GraduatedInfo data={all} />
      ) : (
        <div style={{ width: '100%', height: '100%' }}>
          <img style={{ width: '100%', height: '80%' }} src={NodFound} />
        </div>
      )}
    </Box>
  );
};
