import React, { useEffect } from 'react';
import {
  Box,
  styled,
  TextField,
  Button,
  useTheme,
  Typography,
} from '@mui/material';
import { Cards } from '@/components';
import { cardsData } from '@/modules/GaveUp/components';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAdminReceived,
  getReceivedUser,
  searchesReceived,
} from '@/store/admin/adminReceived/adminReceivedThunk';
import { Spinner } from '@/components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

export const AdminReceivedPage = () => {
  const dispatch = useDispatch();
  const { isLoading, searchesAll, all } = useSelector(
    state => state.adminReceived
  );
  const navigate = useNavigate();
  const query = '';
  useEffect(() => {
    dispatch(getAdminReceived());
    dispatch(searchesReceived(query));
  }, []);

  const handlerClick = id => {
    dispatch(getReceivedUser({ id, navigate }));
  };

  return (
    <Wrapper>
      {isLoading && <Spinner />}
      <ContentWrapper>
        <StyledDiv />
        <StyledBox>
          {all?.map(card => (
            <StyledContainerCart
              key={card.id}
              onClick={() => handlerClick(card.id)}
            >
              <Cards
                name={card.userName}
                percentage={card.totalSum}
                imageSrc={card.photoUrl}
              />
            </StyledContainerCart>
          ))}
          {!all?.length && <Typography>Пока что нет данных</Typography>}
        </StyledBox>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0 7px',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '16px',
  padding: '20px 0',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2px',
    padding: '0',
  },
}));

const StyledContainerCart = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: '15px',
});

const StyledDiv = styled('div')(({ theme }) => ({
  marginLeft: '10px',
  backgroundColor: '#D9D9D9',
  width: '100%',
  height: '1px',
  position: 'absolute',
  top: '82px',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    top: '67px',
  },
}));
