import {
  Box,
  Button,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { gmail as Gmail } from '@/assets/icon';
import { LogoTwo } from '@/assets/icon';
import { log } from '@/assets/icon';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword, resetPassword } from '@/store/slice/auth/authThunk';
import { Spinner } from '@/components/Spinner/Spinner';
import { IoEyeOffOutline } from 'react-icons/io5';
import { IoEyeOutline } from 'react-icons/io5';
import { useState } from 'react';

export const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { isLoading } = useSelector(state => state.auth);
  const token = useParams();
  const signInPage = () => {
    navigate('/sign-in');
  };

  const handleClickEye = () => setShowPassword(prev => !prev);
  const handleClickEye2 = () => setShowPassword2(prev => !prev);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({ mode: 'onChange' });

  const passwordValue = watch('password');
  const password2Value = watch('password2');

  const submitHandlers = data => {
    const { password2, ...rest } = data;
    dispatch(
      resetPassword({
        newPassword: rest.password,
        token: token.token,
        reset,
      })
    );
  };

  return (
    <Container>
      {isLoading && <Spinner />}
      <Logo>
        <Img />
        <TypographyStyled>Добро пожаловать</TypographyStyled>
      </Logo>
      <Block onSubmit={handleSubmit(submitHandlers)}>
        <BlockOne>Изменить</BlockOne>
        <BlockTwo>
          <Input
            type={!showPassword ? 'text' : 'password'}
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: 'Пароль должен быть минимум 8 символов',
              },
            })}
            value={passwordValue}
            helperText={errors.password ? errors.password.message : ''}
            error={!!errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornmentStyled position="end">
                  <div onClick={handleClickEye}>
                    {showPassword ? (
                      <IoEyeOffOutline size={30} />
                    ) : (
                      <IoEyeOutline size={30} />
                    )}
                  </div>
                </InputAdornmentStyled>
              ),
            }}
            placeholder="Password"
          />

          <Input
            type={!showPassword2 ? 'text' : 'password'}
            {...register('password2', {
              required: true,
              validate: value =>
                value === passwordValue || 'Пароли должны совпадать',
            })}
            value={password2Value}
            helperText={errors.password2 ? errors.password2.message : ''}
            error={!!errors.password2}
            InputProps={{
              endAdornment: (
                <InputAdornmentStyled position="end">
                  <div onClick={handleClickEye2}>
                    {showPassword2 ? (
                      <IoEyeOffOutline size={30} />
                    ) : (
                      <IoEyeOutline size={30} />
                    )}
                  </div>
                </InputAdornmentStyled>
              ),
            }}
            placeholder="Confirm Password"
          />
        </BlockTwo>
        <BlockThree>
          <ButtonStyled fullWidth type="submit">
            Next
          </ButtonStyled>

          <TypographyMui onClick={signInPage} type="button">
            Войти
          </TypographyMui>
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
    height: '21.5rem',
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
    width: '100%',
    height: '100%',
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
  alignItems: 'center',
  justifyContent: 'center',

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
const ButtonStyledTwo = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  border: '.0625rem solid black',
  padding: '13px',
  color: 'black',

  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '.75rem',
    border: '.0625rem solid black',
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
