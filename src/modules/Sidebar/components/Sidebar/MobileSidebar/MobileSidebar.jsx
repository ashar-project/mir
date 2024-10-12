import { useNavigate } from 'react-router-dom';
import {
  Stack,
  Drawer as DrawerMUI,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Box,
} from '@mui/material';
import { LogoMobile } from '@/assets/icon';
import { useSidebar } from '@/modules/Sidebar';
import { SitePaths } from '@/routes/lib/UserRoutes';

import { MenuIcon } from '../..';
import { Button, ReusableModal } from '@/components';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/slice/auth/authSlice';
import { useState } from 'react';
import zIndex from '@mui/material/styles/zIndex';

export const MobileSidebar = () => {
  const { open, setOpen } = useSidebar();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerModal = () => {
    console.log('click');
    setOpenModal(prev => !prev);
  };

  const handleLogout = () => {
    console.log('click');

    dispatch(logout());
    handlerModal();
  };
  return (
    <DrawerMUI
      sx={{ position: 'relative' }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Stack
        width="100%"
        height="100px"
        justifyContent="center"
        alignItems="center"
      >
        <LogoMobile />
      </Stack>

      <List>
        <ListItem onClick={() => navigate(SitePaths.graduated)}>
          <ListItemButton>
            <ListItemIcon>
              <MenuIcon path={SitePaths.graduated} color="#818093" />
            </ListItemIcon>
            <ListItemText>Закончившие</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem onClick={() => navigate(SitePaths.about)}>
          <ListItemButton>
            <ListItemIcon>
              <MenuIcon path={SitePaths.about} color="#818093" />
            </ListItemIcon>
            <ListItemText>О нас</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem onClick={() => navigate(SitePaths.techSupport)}>
          <ListItemButton>
            <ListItemIcon>
              <MenuIcon path={SitePaths.techSupport} color="#818093" />
            </ListItemIcon>
            <ListItemText>Тех поддержка</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Button
        type="button"
        onClick={handlerModal}
        style={{
          width: '100px',
          position: 'absolute',
          left: 10,
          bottom: 50,
          zIndex: 9999,
        }}
      >
        Выйти
      </Button>
      <ReusableModal open={openModal} onClose={handlerModal}>
        <Box sx={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
          Вы точна хотите выйти
          <div style={{ display: 'flex', gap: '20px' }}>
            <Button onClick={handlerModal}>Отмена</Button>
            <Button onClick={handleLogout}>Да</Button>
          </div>
        </Box>
      </ReusableModal>
    </DrawerMUI>
  );
};
