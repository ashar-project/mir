import { log as LogoOne, LogoTwo } from '@/assets/icon';
import {
  Box,
  Button as MuiButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { IoMdCall } from 'react-icons/io';
import {
  MdOutlineMarkEmailUnread as EmailIcon,
  MdOutlinePassword as PasswordIcon,
} from 'react-icons/md';
import { TfiMoney } from 'react-icons/tfi';

import { FaRegUser as UserIcon } from 'react-icons/fa';

import { useCheckClient } from '@/helpers';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '@/store/slice/auth/authThunk';
import { Button } from '@/components';
import { Spinner } from '@/components/Spinner/Spinner';

export const SignUp = () => {
  const { isMobile } = useCheckClient();
  const { role, isLoading } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const signInPage = () => {
    navigate('/sign-in');
  };
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlerSubmit = data => {
    dispatch(signUp(data));
  };

  return (
    <>
      <Nazad>
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </Nazad>
      {isLoading && <Spinner />}
      <Container>
        <Logo>
          {isMobile ? <LogoTwo /> : <LogoOne />}
          <TypographyStyled>Добро пожаловать</TypographyStyled>
        </Logo>
        <Block onSubmit={handleSubmit(handlerSubmit)}>
          <BlockOne>Регистрация</BlockOne>
          <BlockTwo>
            <Input
              {...register('userName', {
                required: 'Имя и фамилия обязательны для заполнения',
                minLength: {
                  value: 3,
                  message: 'Имя и фамилия должны содержать не менее 3 символов',
                },
              })}
              error={!!errors.userName}
              helperText={errors.userName?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornmentStyled position="end">
                    <UserIcon size={22} />
                  </InputAdornmentStyled>
                ),
              }}
              placeholder="Full Name"
            />
            <Input
              {...register('email', {
                required: 'Email обязателен для заполнения',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                  message: 'Email должен заканчиваться на @gmail.com',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
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
              {...register('phoneNumber', {
                required: 'Сумма обязательна для заполнения',
                min: {
                  value: 1,
                  message: 'Сумма должна быть больше 0',
                },
              })}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornmentStyled position="end">
                    <IoMdCall size={25} />
                  </InputAdornmentStyled>
                ),
              }}
              placeholder="Phone Number"
            />
            <Input
              {...register('totalSum', {
                required: 'Номер телефона обязателен для заполнения',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Номер телефона должен содержать только цифры',
                },
              })}
              error={!!errors.totalSum}
              helperText={errors.totalSum?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornmentStyled position="end">
                    <TfiMoney size={25} />
                  </InputAdornmentStyled>
                ),
              }}
              placeholder="Sum"
            />
          </BlockTwo>
          <BlockThree>
            <ButtonStyled type="submit" fullWidth>
              Регистрация
            </ButtonStyled>
            {!role === 'ADMIN' && (
              <TypographyMui onClick={signInPage}>Войти</TypographyMui>
            )}
          </BlockThree>
        </Block>
      </Container>
    </>
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
    cursor: 'pointer',
    height: '20px',
  },
}));

const Nazad = styled(Box)(({ theme }) => ({
  margin: '5px',
  [theme.breakpoints.down('sm')]: {
    margin: '5px',
  },
}));

const Block = styled('form')(({ theme }) => ({
  width: '570px',
  minHeight: '400px',
  margin: '0 auto',
  boxShadow: '0rem 0rem 1.1875rem .1875rem rgba(34, 60, 80, 0.2)',
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  borderRadius: '4px',
  padding: '20px',

  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'white',
    width: '90%',
    minHeight: '400px',
    boxShadow: '0rem 0rem 1.1875rem .1875rem rgba(34, 60, 80, 0.2)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'start',
    gap: '1rem',
    padding: '15px',
    position: 'relative',
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  width: '25rem',
  height: '10rem',
  margin: '20px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'end',

  [theme.breakpoints.down('sm')]: {
    width: '12.5rem',
    height: '6.25rem',
    margin: '1rem auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'end',
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
  minHeight: '10.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    width: '17.8125rem',
    height: '5.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '.9375rem',
    marginTop: '20px',
  },
}));

const BlockThree = styled(Box)(({ theme }) => ({
  width: '25.75rem',
  height: '10.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    width: '15.6875rem',
    height: '7.9375rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
    marginTop: '0',
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

  // Стили для текста ошибок
  '& .MuiFormHelperText-root': {
    display: 'block', // По умолчанию показывать текст ошибки
    [theme.breakpoints.down('sm')]: {
      display: 'none', // Скрыть текст ошибки на мобильных устройствах
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

const ButtonStyled = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#37D3D3',
  padding: '13px',
  color: 'white',

  [theme.breakpoints.down('sm')]: {
    backgroundColor: '#37D3D3',
    color: 'white',
    border: '1px solid black',
  },
}));

const TypographyMui = styled(Typography)(({ theme }) => ({
  color: '#9A9A9A',
  fontFamily: 'Montserrat,sans-serif',
  textAlign: 'center',
  textDecoration: 'underline',

  [theme.breakpoints.down('sm')]: {
    color: '#9A9A9A',
    fontFamily: 'Montserrat,sans-serif',
    fontSize: '.75rem',
    textDecoration: 'underline',
  },
}));
