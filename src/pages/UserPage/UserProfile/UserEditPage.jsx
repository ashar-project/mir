import { Negr } from '@/assets/image';
import { upload as Upload } from '@/assets/icon';
import { Button, Input } from '@/components';
import { Box, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const UserEditPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button style={{ margin: '10px' }} onClick={() => navigate(-1)}>
        Назад
      </Button>
      <Main>
        <Container>
          <BlockOne>
            <Div>
              <Upload />
            </Div>
            <Img src={Negr} alt="Negr" />
          </BlockOne>
          <BlockTwo>
            <Block>
              <TypographyStyled>Имя:</TypographyStyled>
              <Input fullWidth size="small" />
            </Block>
            <Block>
              <TypographyStyled>Email:</TypographyStyled>
              <Input fullWidth size="small" />
            </Block>
            <Block>
              <TypographyStyled>Номер:</TypographyStyled>
              <Input fullWidth size="small" />
            </Block>
          </BlockTwo>
        </Container>
        <ButtonBlock>
          <Button
            variant="outlined"
            style={{ borderRadius: '10px' }}
            onClick={() => navigate(-1)}
            fullWidth
          >
            Назад
          </Button>
          <Button style={{ borderRadius: '10px' }} fullWidth>
            Изменить
          </Button>
        </ButtonBlock>
      </Main>
    </>
  );
};

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
    height: '500px',
    borderRadius: '0.375em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '30px',
    padding: '0.625em',
    boxShadow: '0px 7px 20px -1px rgba(199,193,199,1)',
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
  boxShadow: '0px 7px 20px -1px rgba(199,193,199,1)',
  borderRadius: '6px',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '0 auto',
    boxShadow: 'none',
  },
}));

const ButtonBlock = styled(Box)(({ theme }) => ({
  width: '60%',
  display: 'flex',
  gap: '20px',
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
  width: '80%',
  height: '18.75em',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {
    width: 'clamp(14.5em, 50vw, 21.875em)',
    height: 'clamp(14.5em, 50vw, 21.875em)',
    borderRadius: '0.375em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Div = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',

  [theme.breakpoints.down('sm')]: {
    height: '9.375em',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
}));

const Block = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    width: '14rem',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  width: '90px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.063em',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    textAlign: 'center',
  },
}));
