import {
  Box,
  Button,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import {
  MdOutlineMarkEmailUnread as EmailIcon,
  MdOutlinePassword as PasswordIcon,
} from 'react-icons/md';
import { log as LogoOne, LogoTwo } from '@/assets/icon';
import { useCheckClient } from '@/helpers';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '@/store/slice/auth/authThunk';
import { Spinner } from '@/components/Spinner/Spinner';

export const SignIn = () => {
  const { isMobile } = useCheckClient();
  const { isLoading } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const forgotPage = () => {
    navigate('/forgot');
  };
  const submitHandler = value => {
    dispatch(signIn(value));
  };
  return (
    <Container>
      {isLoading && <Spinner />}
      <Logo>
        {isMobile ? <LogoTwo /> : <LogoOne />}
        <TypographyStyled>Добро пожаловать</TypographyStyled>
      </Logo>
      <Block onSubmit={handleSubmit(submitHandler)}>
        <BlockOne>Войти</BlockOne>
        <BlockTwo>
          <Input
            {...register('email', { required: true })}
            error={!!errors.email}
            InputProps={{
              endAdornment: (
                <InputAdornmentStyled position="end">
                  <EmailIcon size={25} />
                </InputAdornmentStyled>
              ),
            }}
            placeholder="Email"
          />
          <Input
            {...register('password', { required: true })}
            error={!!errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornmentStyled
                  sx={{ position: 'relative', cursor: 'pointer' }}
                  position="end"
                >
                  <PasswordIcon size={25} />
                </InputAdornmentStyled>
              ),
            }}
            placeholder="Password"
          />
          <TypographyMuiTwo onClick={forgotPage}>Забыл пароль</TypographyMuiTwo>
        </BlockTwo>
        <BlockThree>
          <ButtonStyled fullWidth type="submit">
            Войти
          </ButtonStyled>
        </BlockThree>
      </Block>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '90rem',
  minHeight: '100vh',
  backgroundColor: 'white',
  height: '100%',
  margin: '0 auto',

  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    padding: '0 1rem',
    minHeight: '37.5rem',
    backgroundColor: 'white',
  },
}));

const InputAdornmentStyled = styled(InputAdornment)(({}) => ({
  position: 'relative',
  cursor: 'pointer',
  '& > img': {
    position: 'absolute',
    right: '0',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
}));

const Block = styled('form')(({ theme }) => ({
  width: '570px',
  height: '500px',
  margin: '0 auto',
  boxShadow: ' 0rem 0rem 1.1875rem .1875rem rgba(34, 60, 80, 0.2)',
  display: 'flex',
  justifyContent: 'start',
  flexDirection: ' column',
  alignItems: 'center',
  gap: '20px',
  borderRadius: '4px',

  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'white',
    width: '20.625rem',
    height: '24.375rem',
    boxShadow: ' 0rem 0rem 1.1875rem .1875rem rgba(34, 60, 80, 0.2)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '.625rem',
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  width: '25rem',
  height: '12.5rem',
  margin: '20px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'end',

  [theme.breakpoints.down('sm')]: {
    width: '12.5rem',
    height: '6.25rem',
    margin: '2.5rem auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'end',
  },
}));

const Img = styled('div')(({ theme }) => ({
  width: '79px',
  height: '70px',
  padding: '10px',
  background: `url(${LogoTwo}) center center / cover no-repeat`,
  [theme.breakpoints.down('sm')]: {
    width: '7.5rem',
    height: '3.4375rem',
    background: `url(${log}) center center / cover no-repeat`,
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontSize: '1.125rem',
  fontFamily: 'Montserrat,sans-serif',
  fontWeight: '500',
  textAlign: 'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.125rem',
    fontFamily: 'Montserrat,sans-serif',
    textAlign: 'center',
  },
}));

const BlockOne = styled(Box)(({ theme }) => ({
  width: '29rem',
  height: '6.25rem',
  textAlign: 'center',
  fontSize: '38px',
  fontFamily: 'Montserrat,sans-serif',
  lineHeight: '46px',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    width: '9.0625rem',
    height: '1.6875rem',
    margin: '.3125rem auto',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '1.375rem',
    fontFamily: 'Montserrat,sans-serif',
  },
}));

const BlockTwo = styled(Box)(({ theme }) => ({
  width: '29rem',
  height: '10.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    width: '17.8125rem',
    height: '5.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.875rem',
    marginBottom: '.9375rem',
    position: 'relative',
  },
}));

const BlockThree = styled(Box)(({ theme }) => ({
  width: '25.75rem',
  height: '10.25rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',

  [theme.breakpoints.down('sm')]: {
    width: '15.6875rem',
    height: '7.9375rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    alignItems: 'center',
    marginTop: '15px',
  },
}));

const Input = styled(TextField)(({ theme }) => ({
  width: '100%',
  border: 'none',
  padding: 0,

  '& .MuiOutlinedInput-root': {
    border: 'none',
    padding: 0,
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
    borderBottom: '2px solid black',
    borderRadius: '0rem',
  },

  '& .MuiOutlinedInput-input': {
    border: 'transparent',
    padding: '25px 25px 5px 15px',

    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px white inset',
      WebkitTextFillColor: 'inherit',
      transition: 'background-color 5000s ease-in-out 0s',
    },
  },

  [theme.breakpoints.down('sm')]: {
    '& .MuiOutlinedInput-root': {
      height: '1.5625rem',
      border: 'none',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      borderBottom: '.0625rem solid black',
      borderRadius: '0rem',
    },

    '& .MuiOutlinedInput-input': {
      border: 'none',
      padding: '5px 5px 5px 5px',

      '&:-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 100px white inset',
        WebkitTextFillColor: 'inherit',
        transition: 'background-color 5000s ease-in-out 0s',
      },
    },
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: '#37D3D3',
  padding: '13px',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    backgroundColor: '#37D3D3',
    color: 'white',
  },
}));

const TypographyMui = styled(Typography)(({ theme }) => ({
  color: '#9A9A9A',
  fontFamily: 'Montserrat,sans-serif',
  textAlign: 'center',
  textDecoration: 'underline',
  cursor: 'pointer',

  [theme.breakpoints.down('sm')]: {
    color: '#9A9A9A',
    fontFamily: 'Montserrat,sans-serif',
    fontSize: '.75rem',
    textDecoration: 'underline',
  },
}));
const TypographyMuiTwo = styled(Typography)(({ theme }) => ({
  color: '#9A9A9A',
  fontFamily: 'Montserrat,sans-serif',
  position: 'absolute',
  left: '0',
  bottom: '0px',
  textDecoration: 'underline',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    color: '#9A9A9A',
    fontFamily: 'Montserrat,sans-serif',
    fontSize: '.75rem',
    textDecoration: 'underline',
    position: 'absolute',
    left: '0',
    bottom: '-20px',
  },
}));
