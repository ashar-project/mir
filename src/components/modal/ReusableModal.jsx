import React from 'react';
import { Modal, Box, styled } from '@mui/material';

export const ReusableModal = ({ open, onClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <StyledModal>{children}</StyledModal>
    </Modal>
  );
};

const StyledModal = styled(Box)(({ theme }) => ({
  width: '604px',
  height: '347px',
  backgroundColor: '#fff',
  boxShadow: '24px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '14px',
  margin: '200px auto',
  [theme.breakpoints.down('sm')]: {
    width: '350px',
    height: '270px',
  },
}));
