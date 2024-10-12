import React from 'react';
import { Card, Typography, styled, Avatar } from '@mui/material';

export const Cards = ({ name, imageSrc }) => {
  return (
    <StyledCard>
      <StyledAvatar alt={name} src={imageSrc} />
      <Typography textAlign={'center'} fontSize={14} variant="h6">
        {name}
      </Typography>
    </StyledCard>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  width: '180px',
  height: '230px',
  background:
    'linear-gradient(180deg, #F8F7FD 0%, #AFDBC4 49.49%, #BDC0EB 100%)',
  borderRadius: '43px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '150px',
    height: '200px',
  },
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: '56px',
  height: '56px',
  marginBottom: '10px',
}));
