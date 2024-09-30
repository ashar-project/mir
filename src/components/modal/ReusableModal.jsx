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
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '270px',
  },
}));
