import { Girl } from '@/assets/image';
import { Button, Input, ReusableModal, Select } from '@/components';
import { Box, styled, Typography, InputLabel } from '@mui/material';
import { useState } from 'react';
import { AdminPaymentTable } from './AdminTable/AdminTable';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postReceivedUserPayment } from '@/store/admin/adminReceived/adminReceivedThunk';
import { Spinner } from '@/components/Spinner/Spinner';

const options = [
  { value: 'PAID.', label: 'Оплачено.' },
  { value: 'MISSED.', label: 'Пропущено.' },
  { value: 'WAITING.', label: 'Ожидание.' }, // Обратите внимание на точку в конце
];

export const AdminInnerReceivePage = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('Ожидание.'); // Добавлена точка в конце
  const receivedUser = useSelector(state => state.adminReceived.receivedUser);
  const isLoading = useSelector(state => state.adminReceived.isLoading);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const handleChange = event => setStatus(event.target.value);
  const openModal = () => setOpen(prev => !prev);

  console.log(id);

  const hanlder = e => {
    e.preventDefault();
    const value = {
      status,
      sum: text,
    };
    dispatch(postReceivedUserPayment({ userId: id, value }));
    setStatus('Ожидание.');
    setText('');
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Container>
        <BlockOne>
          <ImgBlock>
            <Img src={Girl} alt="Profile" />
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
            <AdminPaymentTable
              variants={'admin'}
              value={receivedUser}
              onClick={openModal}
            />
          </TableInfo>
        </BlockTwo>
      </Container>
      <ReusableModal open={open} onClose={openModal}>
        <ModalBox>
          <TypographyStyled variant="h4">Введите сумму</TypographyStyled>
          <BlockS>
            <InputLabelStyled fullWidth htmlFor="amount">
              Сумма
              <Input
                onChange={e => setText(e.target.value)}
                size="small"
                fullWidth
              />
            </InputLabelStyled>
            <Select
              style={{ width: '100%' }}
              label="Статус"
              fullWidth
              value={status}
              onChange={handleChange}
              options={options}
            />
          </BlockS>
          <Class>
            <Button onClick={openModal} variant="outlined">
              Отменить
            </Button>
            <Button type="submit" onClick={hanlder}>
              Подтвердить
            </Button>
          </Class>
        </ModalBox>
      </ReusableModal>
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

const ModalBox = styled('form')(({ theme }) => ({
  width: '90%',
  height: '250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
}));

const Class = styled(Box)(({ theme }) => ({
  width: '96%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  margin: '10px auto',
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
}));

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

const BlockS = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '10px',
  gap: '10px',

  [theme.breakpoints.down('sm')]: {
    gap: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  },
}));
