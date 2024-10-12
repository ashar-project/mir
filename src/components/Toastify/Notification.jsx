import { styled } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = () => (
  <StyledToastContainer icon={false} position="top-right" />
);

const StyledToastContainer = styled(ToastContainer)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 9999,

  // Сбрасываем закругления углов
  '& .Toastify__toast': {
    borderRadius: '0px', // Убираем border-radius
  },

  '& .Toastify__toast--error': {
    borderRadius: '0px',
    backgroundColor: '#f44336', // Обычный красный цвет для ошибок
    borderLeft: '10px solid #f44336',
  },
  '& .Toastify__toast--success': {
    borderRadius: '0px',
    backgroundColor: '#4caf50', // Обычный зеленый цвет для успеха
    borderLeft: '10px solid #4caf50',
  },
  '& .Toastify__progress-bar--success': {
    borderRadius: '0px',
    backgroundColor: '#4caf50', // Прогресс-бар зеленого цвета для успеха
  },
  '& .Toastify__progress-bar--error': {
    borderRadius: '0px',
    backgroundColor: '#f44336', // Прогресс-бар красного цвета для ошибок
  },
  '& .Toastify__toast--pending': {
    borderRadius: '0px',
    backgroundColor: '#ff9800', // Оранжевый цвет для статуса ожидания
  },

  // Адаптация для мобильных устройств
  [theme.breakpoints.down('sm')]: {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '90%',
    '& .Toastify__toast': {
      width: '100%',
      fontSize: '14px',
    },
    '& .Toastify__toast-body': {
      padding: '5px',
    },
    '& .Toastify__close-button': {
      width: '18px',
      height: '18px',
    },
  },
}));
