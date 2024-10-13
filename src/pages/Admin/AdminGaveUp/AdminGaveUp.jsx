import React, { useEffect } from 'react';
import { Box, styled, TextField, Button, Typography } from '@mui/material';
import { Cards } from '@/components';
import { cardsData } from '@/modules/GaveUp/components';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminGaveUp } from '@/store/admin/adminGaveUp/adminGaveUpTjunk';
import { Spinner } from '@/components/Spinner/Spinner';

export const AdminGaveUpPage = () => {
  const dispatch = useDispatch();
  const { adminGaveUp, isLoading } = useSelector(state => state.adminGaveUp);
  useEffect(() => {
    dispatch(getAdminGaveUp());
  }, []);


  return (
    <Wrapper>
      {isLoading && <Spinner />}
      <ContentWrapper>
        <StyledDiv />
        <StyledBox>
          {adminGaveUp?.map(card => (
            <StyledContainerCart key={card.id}>
              <Cards
                name={card.userName}
                percentage={card.percentage}
                imageSrc={card.imageSrc}
              />
            </StyledContainerCart>
          ))}
          {!adminGaveUp.length && <Typography>Пока что нет данных</Typography>}
        </StyledBox>
      </ContentWrapper>
    </Wrapper>
  );
};
const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0 10px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
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
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '256px',
  height: '42px',
  marginLeft: '440px',
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
    marginLeft: '0px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      height: '35px',
      border: '1px solid #000000',
    },
    '& .MuiInputBase-input': {
      padding: '10px 14px',
    },
  },
}));

const ClearButton = styled(Button)(({ theme }) => ({
  height: '42px',
  width: '150px',
  backgroundColor: '#FF0000',
  marginLeft: '290px',
  marginTop: '20px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#D50000',
  },
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '36px',
    fontSize: '0.8rem',
    marginTop: '-2px',
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
    gridTemplateColumns: 'repeat(2, 2fr)',
    gap: '2px',
    padding: '0',
    margin: '0 auto',
  },
}));

const StyledContainerCart = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '5px',
  [theme.breakpoints.down('sm')]: {},
}));

const StyledDiv = styled('div')(({ theme }) => ({
  marginLeft: '10px',
  backgroundColor: '#D9D9D9',
  width: '100%',
  height: '1px',
  position: 'absolute',
  top: '82px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: '90%',
    top: '67px',
  },
}));
