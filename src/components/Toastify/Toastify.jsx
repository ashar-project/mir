import { Typography, styled } from '@mui/material';
import { toast } from 'react-toastify';
import React from 'react';

const StyledMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.darkGrey,
  fontSize: '16px',
  fontWeight: 400,
}));

export const toastifyMessage = ({
  message = 'Успешно',
  status = 'success',
  duration = 2000,
}) => {
  let borderColor;
  let backroundColor;

  switch (status) {
    case 'error':
      borderColor = 'red';
      backroundColor = '#fff8f8';
      break;
    default:
      borderColor = 'green';
      backroundColor = '#f0fef3';
      break;
  }

  const style = {
    borderLeft: '10px solid',
    borderLeftColor: borderColor,
    backgroundColor: backroundColor,
  };

  const toastOptions = {
    icon: false,
    position: 'top-right',
    autoClose: duration,
    style,
  };

  toast[status](<StyledMessage>{message}</StyledMessage>, toastOptions);
};
