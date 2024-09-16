import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 5000);

    const countdown = setInterval(() => {
      setCount(prev => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
      clearInterval(countdown);
    };
  }, [navigate]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <StyledContainer>
      <StyledTypography variant="h1">404</StyledTypography>
      <StyledSubtitle variant="h5">
        Oops! The page you're looking for doesn't exist.
      </StyledSubtitle>
      <Typography
        color="red"
        variant="body1"
        fontFamily={'monospace'}
        sx={{ margin: '5px 0' }}
      >
        Redirecting to the home page in {count} seconds...
      </Typography>
      <StyledButton onClick={handleGoHome}>Go Back Home</StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  textAlign: 'center',
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(4),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  fontFamily: 'monospace',
  marginBottom: theme.spacing(3),
}));

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.7rem',
  color: theme.palette.text.secondary,
  fontFamily: 'monospace',
  marginBottom: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '1.1rem',
  padding: theme.spacing(1.5, 4),
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  fontFamily: 'monospace',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));
