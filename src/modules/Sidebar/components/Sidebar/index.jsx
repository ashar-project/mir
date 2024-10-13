import { useNavigate, useLocation } from 'react-router-dom';

import {
  Stack,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer as DrawerMUI,
} from '@mui/material';

import { useSidebar } from '@/modules/Sidebar';
import { AboutAs, LogoDesktop, LogoMobile, Pay } from '@/assets/icon';
import { Drawer } from '@/modules/Sidebar/components';
import { useCheckClient } from '@/helpers';

import { MobileSidebar } from './MobileSidebar';
import { DesktopSidebar } from './DesktopSidebar';
import { UserCard } from '../UserCard';

import {
  TbWorld as WorldIcon,
  TbUserCheck as GraduatedIcon,
} from 'react-icons/tb';

import {
  PiTrayArrowDown as ReceivedIcon,
  PiFlagBold as GaveUpIcon,
} from 'react-icons/pi';
import { Button } from '@/components';

export const AdminSitePaths = {
  world: 'worlds-page',
  received: 'received-page',
  graduated: 'graduated-page',
  gaveUp: 'gave-page',
  payment: 'payment-page',
};

export const AdminMenuIcons = ({ path, color = 'grey' }) => {
  const menuIcons = {
    [AdminSitePaths.world]: <WorldIcon color={color} size={26} />,
    [AdminSitePaths.received]: <ReceivedIcon color={color} size={26} />,
    [AdminSitePaths.graduated]: <GraduatedIcon color={color} size={26} />,
    [AdminSitePaths.gaveUp]: <GaveUpIcon color={color} size={26} />,
    [AdminSitePaths.payment]: <Pay />,
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
];

const AdminDesktopSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Drawer open={true} variant="permanent">
      <Stack alignItems="center" spacing={2.5}>
        <LogoDesktop />
        <UserCard />
      </Stack>

      <List>
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
    </Drawer>
  );
};

export const AdminMobileSidebar = () => {
  const { open, setOpen } = useSidebar();
  const navigate = useNavigate();

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
              <ListItemText>Оплатить</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div style={{ position: 'absolute', bottom: 30, left: 20 }}>
        <Button>Выйти</Button>
      </div>
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
