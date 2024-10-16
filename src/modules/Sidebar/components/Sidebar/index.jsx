import { useNavigate, useLocation } from 'react-router-dom';

import {
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as DrawerMUI,
  Box,
} from '@mui/material';
import { MdOutlineAttachMoney as Pay } from 'react-icons/md';

import { useSidebar } from '@/modules/Sidebar';
import { LogoDesktop, LogoMobile } from '@/assets/icon';
import { Drawer } from '@/modules/Sidebar/components';
import { useCheckClient } from '@/helpers';
import { MdOutlineMoneyOffCsred } from 'react-icons/md';

import { MobileSidebar } from './MobileSidebar';
import { DesktopSidebar } from './DesktopSidebar';
import { UserCard } from '../UserCard';
import { HiUserAdd } from 'react-icons/hi';
import {
  TbWorld as WorldIcon,
  TbUserCheck as GraduatedIcon,
} from 'react-icons/tb';

import {
  PiTrayArrowDown as ReceivedIcon,
  PiFlagBold as GaveUpIcon,
} from 'react-icons/pi';
import { Button, ReusableModal } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/slice/auth/authSlice';
import { useState } from 'react';

export const AdminSitePaths = {
  world: 'worlds-page',
  received: 'received-page',
  graduated: 'graduated-page',
  gaveUp: 'gave-page',
  payment: 'payment-page',
  return: 'return-pay',
  addUser: 'sign-up',
};

export const AdminMenuIcons = ({ path, color = 'grey' }) => {
  const menuIcons = {
    [AdminSitePaths.world]: <WorldIcon color={color} size={26} />,
    [AdminSitePaths.received]: <ReceivedIcon color={color} size={26} />,
    [AdminSitePaths.graduated]: <GraduatedIcon color={color} size={26} />,
    [AdminSitePaths.gaveUp]: <GaveUpIcon color={color} size={26} />,
    [AdminSitePaths.payment]: <Pay color={color} size={26} />,
    [AdminSitePaths.return]: <MdOutlineMoneyOffCsred color={color} size={26} />,
    [AdminSitePaths.addUser]: <HiUserAdd color={color} size={26} />,
  };

  return menuIcons[path];
};

const menuElements = [
  {
    label: 'Мир',
    navigation: 'worlds-page',
  },
  {
    label: 'Получившие',
    navigation: 'received-page',
  },
  {
    label: 'Закончившие',
    navigation: 'graduated-page',
  },
  {
    label: 'Сдался',
    navigation: 'gave-page',
  },
  {
    label: 'Добавить сумму',
    navigation: 'payment-page',
  },
  {
    label: 'Вернуть сумму',
    navigation: 'return-pay',
  },
];

const AdminDesktopSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { role } = useSelector(state => state.auth);
  const [openModal, setOpen] = useState(false);

  const handlerModal = () => setOpen(prev => !prev);

  return (
    <Drawer open={true} variant="permanent">
      <Stack alignItems="center" spacing={2.5}>
        <div onClick={() => navigate('/admin')}>
          <LogoDesktop />
        </div>
        {role === 'USER' && <UserCard />}
      </Stack>

      <List sx={{ borderTop: '1px solid grey', marginTop: '10px' }}>
        {menuElements.map(({ label, navigation }) => {
          const isSelectedPage = `/admin/${navigation}` === pathname;

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
                  <AdminMenuIcons
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
      </List>
      <div style={{ margin: '10px 15px 0 0 ' }}>
        <Button
          onClick={() => navigate('/sign-up')}
          variant="outlined"
          startIcon={<HiUserAdd />}
        >
          <span style={{ fontSize: '12px' }}>Добавить пользователя</span>
        </Button>
      </div>
      <div style={{ position: 'absolute', bottom: 50, left: 30 }}>
        <Button onClick={handlerModal}>Выйти</Button>
      </div>
      <ReusableModal open={openModal} onClose={handlerModal}>
        <Box sx={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
          Вы точна хотите выйти
          <div style={{ display: 'flex', gap: '20px' }}>
            <Button onClick={handlerModal}>Отмена</Button>
            <Button onClick={() => dispatch(logout())}>Да</Button>
          </div>
        </Box>
      </ReusableModal>
    </Drawer>
  );
};

export const AdminMobileSidebar = () => {
  const { open, setOpen } = useSidebar();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openModal, setOpens] = useState(false);

  const handlerModal = () => setOpens(prev => !prev);

  return (
    <DrawerMUI open={open} onClose={() => setOpen(false)}>
      <Stack
        width="100%"
        height="100px"
        justifyContent="center"
        alignItems="center"
      >
        <LogoMobile />
      </Stack>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <List>
          <ListItem onClick={() => navigate(AdminSitePaths.payment)}>
            <ListItemButton>
              <ListItemIcon>
                <AdminMenuIcons path={AdminSitePaths.payment} color="#818093" />
              </ListItemIcon>
              <ListItemText sx={{ marginRight: '40px' }}>
                Оплатить{' '}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem onClick={() => navigate(AdminSitePaths.return)}>
            <ListItemButton>
              <ListItemIcon>
                <AdminMenuIcons path={AdminSitePaths.return} color="#818093" />
              </ListItemIcon>
              <ListItemText>Вернуть оплату</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem onClick={() => navigate('/sign-up')}>
            <ListItemButton>
              <ListItemIcon>
                <AdminMenuIcons path={AdminSitePaths.addUser} color="#818093" />
              </ListItemIcon>
              <ListItemText>Добавить уч-ка</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: 20 }}>
        <Button onClick={handlerModal}>Выйти</Button>
      </div>
      <ReusableModal open={openModal} onClose={handlerModal}>
        <Box sx={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
          Вы точна хотите выйти
          <div style={{ display: 'flex', gap: '20px' }}>
            <Button onClick={handlerModal}>Отмена</Button>
            <Button onClick={() => dispatch(logout())}>Да</Button>
          </div>
        </Box>
      </ReusableModal>
    </DrawerMUI>
  );
};

export const AdminSidebar = () => {
  const { isMobile } = useCheckClient();
  return isMobile ? <AdminMobileSidebar /> : <AdminDesktopSidebar />;
};

export const Sidebar = () => {
  const { isMobile } = useCheckClient();

  return isMobile ? <MobileSidebar /> : <DesktopSidebar />;
};
