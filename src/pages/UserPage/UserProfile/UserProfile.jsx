import { Girl } from '@/assets/image';
import { PaymentTable } from '@/modules/User';
import { Box, styled, Table, Typography } from '@mui/material';
import React from 'react';

export const UserProfile = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Container>
        <BlockOne>
          <ImgBlock>
            <Img src={Girl} />
            <TypographyStyled
              variant="h5"
              fontFamily={'Montserrat,sans-serif'}
              fontWeight={400}
            >
              John Doe
            </TypographyStyled>
            <TypographyStyled variant="h4" fontFamily={'Montserrat,sans-serif'}>
              50%
            </TypographyStyled>
          </ImgBlock>
        </BlockOne>
        <BlockTwo>
          <TableInfo>
            <PaymentTable />
          </TableInfo>
        </BlockTwo>
      </Container>
    </div>
  );
};

const Container = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
}));

const Sidebar = styled(Box)(() => ({
  width: '100px',
  height: '100vh',
  backgroundColor: 'red',
}));

const BlockOne = styled(Box)(() => ({
  width: '100%',
  height: '300px',
}));

const ImgBlock = styled(Box)(() => ({
  width: '300px',
  height: '300px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const Img = styled('img')(() => ({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
}));

const TypographyStyled = styled(Typography)(() => ({
  textAlign: 'center',
  marginTop: '5px',
}));

// !
const BlockTwo = styled(Box)(() => ({
  width: '100%',
  height: '600px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  flexDirection: 'column',
}));

const TableInfo = styled(Box)(() => ({
  overflowY: 'auto',
  maxHeight: '500px',
  width: '80%',
  margin: '0 auto',
  backgroundColor: '#F6F5FA',
  borderRadius: '8px',
  boxShadow: '0px 10px 16px 0px rgba(194,188,194,1)',
}));
