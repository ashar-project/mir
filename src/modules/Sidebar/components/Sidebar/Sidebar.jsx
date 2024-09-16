import { Stack } from '@mui/material';

import {
  FaChevronRight as RightArrow,
  FaChevronLeft as LeftArrow,
} from 'react-icons/fa';

import { LogoDesktop } from '@/assets/icon';
import { useSidebar } from '@/modules/Sidebar';
import { UserCard, Drawer, MenuList } from '..';

export const Sidebar = () => {
  const { open, toggleOpen } = useSidebar();

  return (
    <Drawer open={open} variant="permanent">
      <SidebarTop open={open} onClick={toggleOpen} />
      <MenuList open={open} />
    </Drawer>
  );
};

const SidebarTop = ({ open, onClick }) => {
  return (
    <Stack alignItems="center" spacing={2.5}>
      <LogoDesktop />
      <UserCard isFullWidth={open} />

      <button
        onClick={onClick}
        style={{
          backgroundColor: '#BBBBBB',
          borderRadius: '8px 0px 0px 8px',
          position: 'absolute',
          top: '100px',
          right: '0px',
          // zIndex: 1,
          width: '20px',
          height: '40px',
          border: '0',
          display: 'flex',
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
