import { Avatar, Negr } from '@/assets/image';
import { Button, ReusableModal } from '@/components';
import { Spinner } from '@/components/Spinner/Spinner';
import { PaymentTable } from '@/modules/User';
import {
  gaveUser,
  getProfileUser,
} from '@/store/slice/profileSlice/profileThunk';
import { Box, styled, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UserProfilePage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile, isLoading, tabelProfile } = useSelector(
    state => state.profile
  );

  useEffect(() => {
    dispatch(getProfileUser());
  }, []);

  const handleClick = () => {
    navigate('user-edit-page');
  };

  const openModal = () => setOpen(prev => !prev);

  const gaveUpButton = () => {
    dispatch(gaveUser(navigate));
    openModal();
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Main>
        <TypographyStyledUser>Профиль</TypographyStyledUser>
        <Container>
          <BlockOne>
            <Img src={profile.photoUrl || Avatar} alt="Negr" />
          </BlockOne>
          <BlockTwo>
            <Block>
              <TypographyStyled>Имя:</TypographyStyled>
              <TypographyStyledTwo>
                {profile.name || 'User user'}
              </TypographyStyledTwo>
            </Block>
            <Block>
              <TypographyStyled>Цель:</TypographyStyled>
              <TypographyStyledTwo>
                {new Intl.NumberFormat('ru-RU').format(profile.goal)}
              </TypographyStyledTwo>
            </Block>
            <Block>
              <TypographyStyled>Номер:</TypographyStyled>
              <TypographyStyledTwo>{profile.phoneNumber}</TypographyStyledTwo>
            </Block>
          </BlockTwo>
        </Container>

        <ButtonBlock>
          <ButtonStyled
            onClick={openModal}
            style={{ borderRadius: '10px' }}
            variant="outlined"
            fullWidth
          >
            Сдаюсь
          </ButtonStyled>
          <Button
            onClick={handleClick}
            style={{ borderRadius: '10px' }}
            fullWidth
          >
            Изменить
          </Button>
        </ButtonBlock>
      </Main>
      <ReusableModal onClose={openModal} open={open}>
        <ModalBox>
          <Typography variant="h5" fontWeight={'bold'} textAlign={'center'}>
            Вы уверены что хотите <br /> сдатся?
          </Typography>
          <BoxButton>
            <Button
              onClick={gaveUpButton}
              style={{ borderRadius: '10px' }}
              variant="outlined"
              fullWidth
            >
              Да
            </Button>
            <Button
              fullWidth
              onClick={openModal}
              style={{ borderRadius: '10px' }}
            >
              Отмена
            </Button>
          </BoxButton>
        </ModalBox>
      </ReusableModal>
      <TableInfo>
        <PaymentTable value={tabelProfile} variants={'profile'} />
      </TableInfo>
    </>
  );
};

const TypographyStyledUser = styled(Box)(({ theme }) => ({
  width: '100%',
  paddingLeft: '100px',
  fontWeight: 'bold',
  fontSize: '25px',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const TableInfo = styled(Box)(({ theme }) => ({
  width: '90%',
  margin: '20px auto',
}));

const Main = styled(Box)(({ theme }) => ({
  width: '1000px',
  height: '610px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  margin: '50px auto',
  boxShadow: '0px 7px 20px -1px rgba(199,193,199,1)',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '0 auto',
  },
}));

const ModalBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  gap: '20px',
}));

const BoxButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  gap: '20px',
}));

const Container = styled(Box)(({ theme }) => ({
  width: '800px',
  height: '320px',
  margin: '20px auto',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',

  [theme.breakpoints.down('sm')]: {
    width: '85%',
    margin: '10px auto',
    height: '450px',
    borderRadius: '0.375em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '0.625em',
    boxShadow: '0px 7px 20px -1px rgba(199,193,199,1)',
  },
}));

const ButtonBlock = styled(Box)(({ theme }) => ({
  width: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  [theme.breakpoints.down('sm')]: {
    width: '85%',
    margin: '0 auto',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
}));

const BlockOne = styled(Box)(({ theme }) => ({
  width: '600px',
  height: '18.75em',

  [theme.breakpoints.down('sm')]: {
    width: 'clamp(14.5em, 50vw, 21.875em)',
    height: 'clamp(14.5em, 50vw, 21.875em)',
    borderRadius: '0.375em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Img = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100%',
  },
}));

const BlockTwo = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '20px',
  marginLeft: '30px',

  [theme.breakpoints.down('sm')]: {
    height: '9.375em',
    width: '80%',
    margin: '0',
  },
}));

const Block = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '0.313em',
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: '700',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.063em',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    textAlign: 'center',
  },
}));

const TypographyStyledTwo = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875em',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    textAlign: 'center',
    color: '#949494',
  },
}));
