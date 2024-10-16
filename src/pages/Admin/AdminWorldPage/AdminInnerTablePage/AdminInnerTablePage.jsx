import React, { useState } from 'react';
import {
  Avatar,
  Typography,
  Box,
  TextField,
  Dialog,
  DialogContent,
  styled,
  Link,
} from '@mui/material';
import { Button } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Negr } from '@/assets/image';
import { addDebtUser } from '@/store/admin/adminWorld/adminWorldThunk';
import { Spinner } from '@/components/Spinner/Spinner';
import { unwrapResult } from '@reduxjs/toolkit';

export const AdminInnerTablePage = () => {
  const [open, setOpen] = useState(false);
  const { userInfo, isLoading } = useSelector(state => state.userAdmin);
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(userInfo);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cleanedAmount = Number(amount.replace(/\s+/g, '')) || 0;
  const debt = cleanedAmount - userInfo.userTotalSum;

  const employees = 0.03;
  const insurance = 0.02;
  const programRate = 0.01;

  const commission = debt * employees;
  const service = debt * insurance;
  const program = debt * programRate;
  const total = commission + service + program;

  const price = new Intl.NumberFormat('ru-RU').format(total);
  const allTotal = new Intl.NumberFormat('ru-RU').format(debt + total);

  const tot = debt + total;

  const handleAmountChange = e => {
    const input = e.target.value.replace(/\s+/g, '');
    const inputAmount = Number(input);

    if (inputAmount <= userInfo.userTotalSum) {
      setErrorMessage('Сумма должна быть выше текущего счета');
    } else {
      setErrorMessage('');
    }

    setAmount(input);
  };

  const formatAmount = value => {
    if (!value) return '';
    return new Intl.NumberFormat('ru-RU').format(Number(value));
  };

  const handlerSubmitValue = () => {
    dispatch(addDebtUser({ userId: userInfo.id, debtSum: tot }))
      .then(unwrapResult)
      .then(() => {
        handleClose();
        navigate(-1);
      })
      .catch(error => {
        console.error('Error adding debt:', error);
      });

    setAmount('');
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Boxing>
        <Button onClick={() => navigate(-1)}>Назад</Button>
      </Boxing>
      <StyledProfile>
        <StyledAvatar alt="William Damian" src={userInfo.photoUrl || Negr} />
        <StyledName variant="h6">
          {userInfo.userName || 'Admin Adminov'}
        </StyledName>
        <StyledGoal variant="body1">Цель: {userInfo.userGoal} сом</StyledGoal>
        <StyledPaid variant="body1">
          Текущий счет: {userInfo.userTotalSum} сом
        </StyledPaid>
        <StyledButton variant="contained" onClick={handleClickOpen}>
          Далее
        </StyledButton>
      </StyledProfile>

      <StyledDialog open={open} onClose={handleClose}>
        <StyledDialogContainer>
          <p>Введите сумму</p>
          <StyledDialogContent>
            <StyledTextField
              onChange={handleAmountChange}
              size="small"
              autoFocus
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Введите сумму"
              value={formatAmount(amount)}
              error={!!errorMessage}
              helperText={errorMessage}
            />
            <StyledLinkBox>
              <div>
                Текущий счет:
                <StyledSpan>
                  <span style={{ color: 'green', margin: '0 5px 0 5px' }}>
                    {userInfo.userTotalSum}
                  </span>
                </StyledSpan>
                сом
              </div>

              {!errorMessage && debt > 0 && (
                <>
                  <div>
                    Долг без комисси:{' '}
                    <StyledSpan>
                      {new Intl.NumberFormat('ru-Ru').format(
                        amount - userInfo.userTotalSum
                      )}
                    </StyledSpan>{' '}
                    сом
                  </div>
                  <div>
                    Общая сумма комисси: <StyledSpan>{price}</StyledSpan> сом
                  </div>

                  <StyledLinkTypographyBlue>
                    <StyledLinkBlue href="#">Сотрудники</StyledLinkBlue> 3% =
                    <StyledSpan> {commission.toLocaleString()} сом</StyledSpan>
                  </StyledLinkTypographyBlue>
                  <StyledLinkTypographyGreen>
                    <StyledLinkGreen href="#">Страховка</StyledLinkGreen> 2% =
                    <StyledSpan> {service.toLocaleString()} сом</StyledSpan>
                  </StyledLinkTypographyGreen>
                  <StyledLinkTypographyOrange>
                    <StyledLinkOrange href="#">Программа</StyledLinkOrange> 1% =
                    <StyledSpan> {program.toLocaleString()} сом</StyledSpan>
                  </StyledLinkTypographyOrange>
                  <div>
                    Долг{' '}
                    <span style={{ fontWeight: '600' }}>
                      {userInfo.userName}
                    </span>{' '}
                    составит:
                    <StyledSpan> {allTotal}</StyledSpan> сом
                  </div>
                </>
              )}
            </StyledLinkBox>
          </StyledDialogContent>
          <StyledDivActions>
            <ModalButton
              onClick={handleClose}
              variant="outlined"
              disabled={!!errorMessage}
            >
              Отменить
            </ModalButton>
            <ModalButton onClick={handlerSubmitValue} disabled={!!errorMessage}>
              Подтвердить
            </ModalButton>
          </StyledDivActions>
        </StyledDialogContainer>
      </StyledDialog>
    </>
  );
};

const StyledProfile = styled(Box)(({ theme }) => ({
  width: '500px',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: '14px',
  margin: '66px auto',

  [theme.breakpoints.down('sm')]: {
    width: '300px',
    margin: '100px auto',
  },
}));

const Boxing = styled('div')(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.down('sm')]: {
    display: 'block',
    margin: 20,
  },
}));

const StyledAvatar = styled(Avatar)({
  width: 100,
  height: 100,
});

const StyledName = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontSize: '18px',
}));

const StyledGoal = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
}));

const StyledPaid = styled(Typography)(({ theme }) => ({
  color: '#0CB927',
  fontSize: '20px',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '250px',
  borderRadius: '8px',
  backgroundColor: '#3D348B',
  padding: '10px 30px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '90px',
    padding: '10px 30px',
  },
}));

const StyledDialog = styled(Dialog)({
  '& .MuiDialog-paper': {
    borderRadius: '12px',
    maxWidth: '460px',
    height: '340px',
    width: '100%',
  },
});

const StyledDialogContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
  },
}));

const StyledLinkBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

const StyledLinkTypography = styled(Typography)({
  fontSize: '14px',
});

const StyledLinkTypographyBlue = styled(StyledLinkTypography)({
  color: '#3D348B',
});

const StyledLinkTypographyGreen = styled(StyledLinkTypography)({
  color: '#0CB927',
});

const StyledLinkTypographyOrange = styled(StyledLinkTypography)({
  color: '#F7B32B',
});

const StyledLinkBlue = styled(Link)({
  textDecoration: 'none',
  color: '#3D348B',
});

const StyledLinkGreen = styled(Link)({
  textDecoration: 'none',
  color: '#0CB927',
});

const StyledLinkOrange = styled(Link)({
  textDecoration: 'none',
  color: '#F7B32B',
});

const StyledSpan = styled('span')({
  color: '#000',
  fontWeight: '600',
});

const StyledDivActions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '24px',
});

const ModalButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '10px 16px',
  fontSize: '14px',
  textTransform: 'none',
  flex: 1,
  '&:first-of-type': {
    marginRight: '8px',
  },
}));
