import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { LogoDesktop } from '@/assets/icon';
import { UserCard, Drawer, MenuList } from '../..';

export const DesktopSidebar = () => {
  const { role } = useSelector(state => state.auth);
  console.log(role);

  return (
    <Drawer open={true} variant="permanent">
      <SidebarTop />
      <MenuList />
    </Drawer>
  );
};

const SidebarTop = () => {
  return (
    <Stack alignItems="center" spacing={2.5}>
      <LogoDesktop />
      <UserCard />
    </Stack>
  );
};
