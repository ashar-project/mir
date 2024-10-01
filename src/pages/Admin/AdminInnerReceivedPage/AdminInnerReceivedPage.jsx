import { Girl } from '@/assets/image';
import { Button, Input, ReusableModal, Select } from '@/components';
import { PaymentTable } from '@/modules/User';
import { Box, styled, Typography, InputLabel } from '@mui/material';
import { useState } from 'react';
const options = [
  {
    value: 'Оплачено.',
    label: 'Оплачено.',
  },
  {
    value: 'Пропущено.',
    label: 'Пропущено.',
  },
  {
    value: 'Ожидание.',
    label: 'Ожидание.',
  },
];
export const AdminInnerReceivePage = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('Ожидание');
  const handleChange = event => {
    setStatus(event.target.value);
  };
  const openModal = () => setOpen(prev => !prev);

  return (
    <>
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
            <PaymentTable variants={'admin'} onClick={openModal} />
          </TableInfo>
        </BlockTwo>
      </Container>
      <ReusableModal open={open} onClose={openModal}>
        <ModalBox>
          <TypographyStyled variant="h4">Введите сумму</TypographyStyled>
          <BlockS>
            <InputLabelStyled fullWidth htmlFor="amount">
              Сумма
              <Input size="small" fullWidth id="amount" variant="outlined" />
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
            <Button onClick={openModal}>Подтвердить</Button>
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

const ModalBox = styled(Box)(({ theme }) => ({
  width: '90%',
  height: '250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    width: '100%',
  },
}));

const Class = styled(Box)(({ theme }) => ({
  width: '96%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  margin: '10px auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    margin: '10px auto',
  },
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
    fontSize: '17px',
    fontWeight: '600',
  },
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
