import { Negr } from '@/assets/image';
import { Button, ReusableModal } from '@/components';
import { Box, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserProfilePage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('user-edit-page');
  };

  const openModal = () => setOpen(prev => !prev);

  return (
    <>
      <Main>
        <TypographyStyledUser>Профиль</TypographyStyledUser>
        <Container>
          <BlockOne>
            <Img src={Negr} alt="Negr" />
          </BlockOne>
          <BlockTwo>
            <Block>
              <TypographyStyled>Имя:</TypographyStyled>
              <TypographyStyledTwo>Nurles Nazirbaev</TypographyStyledTwo>
            </Block>
            <Block>
              <TypographyStyled>Email:</TypographyStyled>
              <TypographyStyledTwo>
                nurlesnazirbaev@gmail.com
              </TypographyStyledTwo>
            </Block>
            <Block>
              <TypographyStyled>Номер:</TypographyStyled>
              <TypographyStyledTwo>+996709590511</TypographyStyledTwo>
            </Block>
          </BlockTwo>
        </Container>

        <ButtonBlock>
          <Progress>
            <CircularProgress />
            <Procent>20%</Procent>
          </Progress>
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
              onClick={openModal}
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
    display: 'none',
  },
}));

const Main = styled(Box)(({ theme }) => ({
  width: '1000px',
  height: '610px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  margin: '50px auto',

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

const Progress = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '44px',
  borderRadius: '10px',
  backgroundColor: '#E5E5E5',
  position: 'relative',
  display: 'none',

  [theme.breakpoints.down('sm')]: {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '44px',
  },
}));

const CircularProgress = styled(Box)(({ theme }) => ({
  width: '67%',
  height: '100%',
  backgroundColor: '#637e7e',
  borderRadius: '10px 10px 10px 10px',

  [theme.breakpoints.down('sm')]: {
    width: '67%',
    height: '100%',
    backgroundColor: '#637e7e',
    borderRadius: '10px 10px 10px 10px',
  },
}));

const Procent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '1.5em',
  color: 'white',

  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
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
