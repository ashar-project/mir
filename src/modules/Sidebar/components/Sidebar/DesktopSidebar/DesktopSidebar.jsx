import { Stack } from '@mui/material';

import { LogoDesktop } from '@/assets/icon';
import { useSidebar } from '@/modules/Sidebar';
import { UserCard, Drawer, MenuList } from '../..';

import {
  FaChevronRight as RightArrow,
  FaChevronLeft as LeftArrow,
} from 'react-icons/fa';

export const DesktopSidebar = () => {
  const { open } = useSidebar();

  return (
    <Drawer open={open} variant="permanent">
      <SidebarTop />
      <MenuList />
    </Drawer>
  );
};

const SidebarTop = () => {
  const { open, setOpen } = useSidebar();

  return (
    <Stack alignItems="center" spacing={2.5}>
      <LogoDesktop />
      <UserCard />

      <button
        onClick={() => setOpen(false)}
        style={{
          backgroundColor: '#BBBBBB',
          borderRadius: '8px 0px 0px 8px',
          position: 'absolute',
          top: '100px',
          right: '0px',
          width: '20px',
          height: '40px',
          border: '0',
          display: open ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {open ? <LeftArrow /> : <RightArrow />}
      </button>
    </Stack>
  );
};
