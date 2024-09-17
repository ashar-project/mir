import { useContext } from 'react';
import { Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

import {
  FaChevronRight as RightArrow,
  FaChevronLeft as LeftArrow,
} from 'react-icons/fa';

import { LogoDesktop, LogoMobile } from '@/assets/icon';
import { useSidebar } from '@/modules/Sidebar';
import { UserCard, Drawer, MenuList } from '..';

export const Sidebar = () => {
  const { open, toggleOpen } = useSidebar();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('mobile'));

  // if (isMobile) {
  //   return <MobileSidebar />;
  // }

  return <DesktopSidebar open={open} toggleOpen={toggleOpen} />;
};

const DesktopSidebar = ({ open, toggleOpen }) => {
  return (
    <Drawer open={open} variant="permanent">
      <SidebarTop open={open} onClick={toggleOpen} />
      <MenuList open={open} />
    </Drawer>
  );
};

const MobileSidebar = () => {
  return <>Sidebar</>;
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
