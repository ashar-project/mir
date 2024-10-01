import { Button, Input } from '@/components';
import { Box, styled, Typography } from '@mui/material';

export const AdminPaymentPage = () => {
  return (
    <Block>
      <TypographyStyled fontWeight={600}>Оплатить</TypographyStyled>
      <Main>
        <Div>
          <label style={{ fontWeight: '500', color: '#818093' }}>Email:</label>
          <Input size="small" />
        </Div>
        <Div>
          <label style={{ fontWeight: '500', color: '#818093' }}>Номер:</label>
          <Input size="small" />
        </Div>
        <Div>
          <label style={{ fontWeight: '500', color: '#818093' }}>Сумма:</label>
          <Input size="small" />
        </Div>
        <Button style={{ width: '60%', margin: '20px auto' }}>Сохронить</Button>
      </Main>
    </Block>
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

const Main = styled(Box)(({ theme }) => ({
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
    padding: '20px',
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
