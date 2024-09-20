import React from 'react';
import { Box, styled } from '@mui/material';

import { Cards } from '@/components';
import { cardsData } from '@/modules/GaveUp/components';

export const GaveUpPage = () => {
  return (
    <Wrapper>
      <StyledBox>
        {cardsData.map(card => (
          <StyledContainerCart key={card.id}>
            <Cards
              name={card.name}
              percentage={card.percentage}
              imageSrc={card.imageSrc}
            />
          </StyledContainerCart>
        ))}
      </StyledBox>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: 'red',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    border: '2px solid blue',
    backgroundColor: 'red',
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '14px',
  width: '100%',
  margin: '0 auto',
  backgroundColor: 'red',
  [theme.breakpoints.down('sm')]: {
    padding: '0',
    maxWidth: '100%',
    border: '2px solid blue',
    backgroundColor: 'lightgreen',
  },
}));

// Контейнер для каждой карточки
const StyledContainerCart = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px',
  boxSizing: 'border-box',
  backgroundColor: 'red',
  // Корректировка для маленьких экранов
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
    width: '60%',
    border: '2px solid blue',
    backgroundColor: 'lightcoral', // Добавляем для отладки
  },
}));
