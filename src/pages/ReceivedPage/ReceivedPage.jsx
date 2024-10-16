import { NodFound } from '@/assets/image';
import { Spinner } from '@/components/Spinner/Spinner';
import { GraduatedTable } from '@/modules/Graduated';
import { getReceived } from '@/store/slice/receivedSlice/receivedThunk';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ReceivedPage = () => {
  const dispatch = useDispatch();
  const { isLoading, receivedBig } = useSelector(state => state.received);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getReceived());
  }, []);

  const navigateFn = data => {
    navigate(`${data}/received-profile`);
  };

  return (
    <Box height="100vh" width="100%">
      {isLoading && <Spinner />}
      {receivedBig.length ? (
        <GraduatedTable data={receivedBig} goInnerPage={navigateFn} />
      ) : (
        <div style={{ width: '100%', height: '100%' }}>
          <img style={{ width: '100%', height: '80%' }} src={NodFound} />
        </div>
      )}
    </Box>
  );
};
