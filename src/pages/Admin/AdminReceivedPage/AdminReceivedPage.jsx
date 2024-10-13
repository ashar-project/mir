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
} from '@/store/admin/adminReceived/adminReceivedThunk';
import { Spinner } from '@/components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

export const AdminReceivedPage = () => {
  const dispatch = useDispatch();
  const { adminReceived, isLoading } = useSelector(
    state => state.adminReceived
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAdminReceived());
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
          {adminReceived.map(card => (
            <StyledContainerCart
              key={card.id}
              onClick={() => handlerClick(card.id)}
            >
              <Cards
                name={card.userName}
                percentage={card.totalSum}
                imageSrc={card.imageSrc}
              />
            </StyledContainerCart>
          ))}
          {!adminReceived.length && (
            <Typography>Пока что нет данных</Typography>
          )}
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
  padding: '0 10px',
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginBottom: '10px',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  padding: '10px 0',
  backgroundColor: 'white',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    padding: '10px 0',
  },
}));

const HamburgerIcon = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    position: 'absolute',
    left: '5px',
    top: '14px',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '256px',
  height: '42px',
  marginTop: '20px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    height: '42px',
    border: '1px solid #000000',
  },
  '& .MuiInputBase-input': {
    padding: '10px 14px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '180px',
    marginTop: '5px',
    '& .MuiOutlinedInput-root': {
      height: '35px',
    },
  },
}));

const ClearButton = styled(Button)(({ theme }) => ({
  height: '42px',
  width: '150px',
  backgroundColor: '#FF0000',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#D50000',
  },
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '36px',
    fontSize: '0.8rem',
    marginLeft: '10px',
  },
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
  padding: '5px',
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
