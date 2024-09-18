import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';

import { setOpen } from '@/modules/Sidebar/store';

export const WithCheckClient = ({ children }) => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('mobile'));

  // // Проверка устройства клиента, если клиент mobile, то sidebar по дефолту закрыт
  // const dispatch = useDispatch();
  // dispatch(setOpen(!isMobile));

  // console.log(isMobile);

  return children;
};
