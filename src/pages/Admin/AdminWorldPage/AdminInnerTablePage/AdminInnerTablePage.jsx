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

export const AdminInnerTablePage = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledProfile>
        <StyledAvatar
          alt="William Damian"
          src="https://i.pinimg.com/originals/5d/31/20/5d3120c5b8d0d6be5d9371521f369482.jpg"
        />
        <StyledName variant="h6">William Damian</StyledName>
        <StyledGoal variant="body1">Цель: 1 000 000 сом</StyledGoal>
        <StyledPaid variant="body1">Оплатил: 95 000 сом</StyledPaid>
        <StyledButton variant="contained" onClick={handleClickOpen}>
          Далее
        </StyledButton>
      </StyledProfile>

      <StyledDialog open={open} onClose={handleClose}>
        <StyledDialogContainer>
          <p>Введите сумму</p>
          <StyledDialogContent>
            <StyledTextField
              size="small"
              autoFocus
              margin="dense"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="Введите сумму"
              defaultValue="900 000(+54 000) сом"
            />
            <StyledLinkBox>
              <StyledLinkTypographyBlue>
                <StyledLinkBlue href="#">Сотрудники</StyledLinkBlue> 3% ={' '}
                <StyledSpan>27 000 сом</StyledSpan>
              </StyledLinkTypographyBlue>
              <StyledLinkTypographyGreen>
                <StyledLinkGreen href="#">Страховка</StyledLinkGreen> 2% ={' '}
                <StyledSpan>18 000 сом</StyledSpan>
              </StyledLinkTypographyGreen>
              <StyledLinkTypographyOrange>
                <StyledLinkOrange href="#">Программа</StyledLinkOrange> 1% ={' '}
                <StyledSpan>9 000 сом</StyledSpan>
              </StyledLinkTypographyOrange>
            </StyledLinkBox>
          </StyledDialogContent>
          <StyledDivActions>
            <ModalButton onClick={handleClose} variant="outlined">
              Отменить
            </ModalButton>
            <ModalButton
              onClick={handleClose}
              // variant="contained"
              // color="primary"
            >
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
