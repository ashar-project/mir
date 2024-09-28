import React from 'react';
import { Box, styled } from '@mui/material';

import { Cards } from '@/components';
import { cardsData } from '@/modules/GaveUp/components';

export const GaveUpPage = () => {
  return (
    <Wrapper>
      <StyledBox>
        {cardsData.map((card) => (
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
  padding: '10px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '300px',
    margin: '0',
    padding: '0',
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '16px',
  padding: '40px 0',
  maxWidth: '1200px',
  margin: '0 auto',

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '13px',
    width: '100vw',
    padding: '0',
    backgroundColor: 'lightgreen', 
  },
}));

const StyledContainerCart = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '5px',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    alignItems: 'center', 
  },
}));
