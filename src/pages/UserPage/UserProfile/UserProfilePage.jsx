import { Negr } from '@/assets/image';
import { Button } from '@/components';
import { Box, styled, Typography } from '@mui/material';

export const UserProfilePage = () => {
  return (
    <>
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
            <TypographyStyledTwo>nurlesnazirbaev@gmail.com</TypographyStyledTwo>
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
        <Button style={{ borderRadius: '10px' }} fullWidth>
          Изменить
        </Button>
      </ButtonBlock>
    </>
  );
};

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    margin: '10px auto',
    height: '390px',
    border: '0.063em solid black',
    borderRadius: '0.375em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '0.625em',
  },
}));

const ButtonBlock = styled(Box)(({ theme }) => ({
  width: '90%',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    margin: '0 auto',
    height: '100px',
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
}));

const Progress = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '0.625em',
  borderRadius: '10px',
  backgroundColor: '#E5E5E5',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    width: '100%',
    height: '44px',
  },
}));

const CircularProgress = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',

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
  width: '100%',
  height: '18.75em',

  [theme.breakpoints.down('sm')]: {
    width: 'clamp(12.5em, 50vw, 21.875em)',
    height: 'clamp(12.5em, 50vw, 21.875em)',
    borderRadius: '0.375em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0.063em solid black',
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
  height: '37.5em',
  [theme.breakpoints.down('sm')]: {
    height: '9.375em',
    width: '80%',
  },
}));

const Block = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '0.313em',
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
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
