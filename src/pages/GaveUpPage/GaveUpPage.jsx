import { NodFound } from '@/assets/image';
import { GraduatedTable } from '@/modules/Graduated';
import { getGaveUp } from '@/store/slice/gaveUpSlice/gaveUpThunk';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const GaveUpPage = () => {
  const { gaveUp } = useSelector(state => state.gaveUp);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGaveUp());
  }, []);

  return (
    <Box height="100vh" width="100%">
      {gaveUp.lenght ? (
        <GraduatedTable data={gaveUp} />
      ) : (
        <div style={{ width: '100%', height: '100%' }}>
          <img style={{ width: '100%', height: '80%' }} src={NodFound} />
        </div>
      )}
    </Box>
  );
};
