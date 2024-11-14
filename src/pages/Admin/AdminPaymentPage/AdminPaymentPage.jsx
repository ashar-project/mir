import { Button } from '@/components';
import { Spinner } from '@/components/Spinner/Spinner';
import { postPayment } from '@/store/admin/adminPayment/adminPaymentThunk';
import { Box, styled, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AdminPaymentPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [sum, setSum] = useState('');
  const [emailError, setEmailError] = useState('');
  const [sumError, setSumError] = useState('');
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.pay);

  const handlerSubmit = e => {
    e.preventDefault();
    setEmailError('');
    setSumError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email обязателен');
    } else if (!emailRegex.test(email)) {
      setEmailError('Неверный формат email');
    }

    if (!sum) {
      setSumError('Сумма обязательна');
    } else if (isNaN(sum) || Number(sum) <= 0) {
      setSumError('Сумма должна быть положительным числом');
    }

    if (
      email &&
      emailRegex.test(email) &&
      sum &&
      !isNaN(sum) &&
      Number(sum) > 0
    ) {
      const value = {
        email,
        sum,
      };
      dispatch(postPayment({ value, navigate }));
      setEmail('');
      setSum('');
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Boxing>
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </Boxing>
      <Block>
        <TypographyStyled fontWeight={600}>Добавить сумму</TypographyStyled>
        <Main>
          <Div>
            <label style={{ fontWeight: '500', color: '#818093' }}>
              Email:
            </label>
            <TextField
              onChange={e => setEmail(e.target.value)}
              size="small"
              error={!!emailError}
              helperText={emailError}
            />
          </Div>
          <Div>
            <label style={{ fontWeight: '500', color: '#818093' }}>
              Сумма:
            </label>
            <TextField
              onChange={e => setSum(e.target.value)}
              size="small"
              error={!!sumError}
              helperText={sumError}
            />
          </Div>
          <Button
            type="submit"
            onClick={handlerSubmit}
            style={{ width: '60%', margin: '20px auto' }}
          >
            Сохронить
          </Button>
        </Main>
      </Block>
    </>
  );
};

const Block = styled(Box)(({ theme }) => ({
  width: '95%',
  margin: '100px auto',
  height: '60vh',
  boxShadow: '-1px 5px 25px -2px rgba(184,178,184,1)',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    margin: '80px auto',
    boxShadow: 'none',
    borderRadius: '6px',
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontSize: '40px',
  fontWeight: '600',
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
    fontWeight: '600',
  },
}));

const Main = styled('form')(({ theme }) => ({
  width: '55%',
  margin: '30px auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    minHeight: '300px',
    margin: '30px auto',
    boxShadow: '-1px 5px 25px -2px rgba(184,178,184,1)',
    borderRadius: '6px',
    padding: '30px 10px 10px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
  },
}));

const Div = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));

const Boxing = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    margin: '20px',
  },
}));
