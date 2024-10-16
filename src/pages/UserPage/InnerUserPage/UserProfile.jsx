import { Avatar, Girl } from '@/assets/image';
import { Spinner } from '@/components/Spinner/Spinner';
import { PaymentTable } from '@/modules/User';
import { getUserById } from '@/store/slice/receivedSlice/receivedThunk';
import { Box, styled, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const InnerUserPage = () => {
  const { id } = useParams();
  const { receivedInfo, isLoading } = useSelector(state => state.received);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);
  
  return (
    <>
      {isLoading && <Spinner />}
      <Container>
        <BlockOne>
          <ImgBlock>
            <Img src={receivedInfo.photoUrl || Avatar} />
            <TypographyStyled
              variant="h5"
              fontFamily={'Montserrat,sans-serif'}
              fontWeight={400}
            >
              {receivedInfo.userName}
            </TypographyStyled>
          </ImgBlock>
        </BlockOne>
        <BlockTwo>
          <TableInfo>
            <PaymentTable value={receivedInfo} />
          </TableInfo>
        </BlockTwo>
      </Container>
    </>
  );
};

const Container = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
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

const TypographyStyled = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginTop: '5px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    fontWeight: '500',
  },
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
