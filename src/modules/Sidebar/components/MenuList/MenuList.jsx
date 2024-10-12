import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import { menuElements } from '@/modules/Sidebar';
import { MenuIcon } from '..';
import { Button, ReusableModal } from '@/components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logout } from '@/store/slice/auth/authSlice';

export const MenuList = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const handlerOpenModal = () => setOpen(prev => !prev);

  const logoutFn = () => {
    dispatch(logout());
  };
  return (
    <List>
      {menuElements.map(({ label, navigation }) => {
        const isSelectedPage = navigation === pathname;

        return (
          <ListItem
            key={label}
            onClick={() => navigate(navigation)}
            sx={{ padding: '5px' }}
          >
            <ListItemButton
              sx={{
                borderRadius: '3px',
                backgroundColor: isSelectedPage && '#637E7E',
                ':hover': {
                  backgroundColor: isSelectedPage && '#637E7E',
                },
              }}
            >
              <ListItemIcon>
                <MenuIcon
                  path={navigation}
                  color={isSelectedPage ? 'white' : 'black'}
                />
              </ListItemIcon>
              <ListItemText
                primary={label}
                sx={{
                  fontWeight: 500,
                  fontSize: '12px',
                  color: isSelectedPage ? 'white' : 'black',
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
      <Button style={{ margin: '100px 0 0 0' }} onClick={handlerOpenModal}>
        Выйти
      </Button>
      <ReusableModal open={open} onClose={handlerOpenModal}>
        <BoxStyled>
          <Typography fontWeight={800} fontSize={20}>
            {' '}
            Вы точна хотите выйти ?
          </Typography>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Button onClick={handlerOpenModal}>Отмена</Button>
            <Button onClick={logoutFn}>Выйти</Button>
          </div>
        </BoxStyled>
      </ReusableModal>
    </List>
  );
};

const BoxStyled = styled(Box)(() => ({
  width: '400px',
  border: '1px solid black',
  height: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
}));
