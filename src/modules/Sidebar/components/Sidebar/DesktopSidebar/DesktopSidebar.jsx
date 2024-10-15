import { Stack } from '@mui/material';
import { LogoDesktop } from '@/assets/icon';
import { UserCard, Drawer, MenuList } from '../..';
import { useNavigate } from 'react-router-dom';

export const DesktopSidebar = () => {
  return (
    <Drawer open={true} variant="permanent">
      <SidebarTop />
      <MenuList />
    </Drawer>
  );
};

const SidebarTop = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems="center" spacing={2.5}>
      <div onClick={() => navigate('/')}>
        <LogoDesktop />
      </div>
      <UserCard />
    </Stack>
  );
};
