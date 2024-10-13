import React from 'react';
import { Card, Typography, styled, Avatar } from '@mui/material';

export const Cards = ({ name, imageSrc, percentage }) => {
  return (
    <StyledCard>
      <StyledAvatar alt={name} src={imageSrc} />
      <TypographyStyledOne textAlign={'center'} fontSize={14} variant="h6">
        {name}
      </TypographyStyledOne>
      <TypographyMoney textAlign={'center'} fontSize={14} variant="h6">
        {percentage}
      </TypographyMoney>
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
  wordBreak: 'break-word', // Добавляем сюда для общей гибкости

  [theme.breakpoints.down('sm')]: {
    width: '150px',
    height: '200px',
    padding: '5px',
  },
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: '56px',
  height: '56px',
  marginBottom: '10px',
}));

const TypographyStyledOne = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 500,
  wordBreak: 'break-word', // перенос слов
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    fontWeight: '900',
  },
}));

const TypographyMoney = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  wordBreak: 'break-word',
  whiteSpace: 'normal', // Разрешаем перенос строк
  textAlign: 'center', // Выравниваем по центру
  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    fontSize: '15px',
    fontWeight: '600',
    wordBreak: 'break-word',
  },
}));
