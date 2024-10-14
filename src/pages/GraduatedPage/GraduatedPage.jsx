import { graduatadThunk } from '@/store/slice/graduatadSlice/graduatadThunk';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GraduatedInfo } from '.';
import { NodFound } from '@/assets/image';

export const GraduatedPage = () => {
  const { graduatad } = useSelector(state => state.graduatad);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(graduatadThunk());
  }, []);

  return (
    <Box height="100vh" width="100%">
      {!graduatad.lenght ? (
        <GraduatedInfo data={graduatad} />
      ) : (
        <div style={{ width: '100%', height: '100%' }}>
          <img style={{ width: '100%', height: '80%' }} src={NodFound} />
        </div>
      )}
    </Box>
  );
};
