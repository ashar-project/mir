import { Outlet, useLocation } from 'react-router-dom';
import { Box, TextField, styled } from '@mui/material';
import { Sidebar } from '@/modules/Sidebar';
import IconButton from '@mui/material/IconButton';
import { IoMenu as MenuIcon } from 'react-icons/io5';
import { useSidebar } from '@/modules/Sidebar';
import { UserMobileNavBar } from '@/components';
import { useCheckClient } from '@/helpers';
import { useState, useEffect } from 'react';

export const Layout = () => {
  const { open, setOpen } = useSidebar();
  const [status, setStatus] = useState(true);
  const { isMobile } = useCheckClient();
  const { pathname } = useLocation();

  const hiddenPaths = [
    '/tech-support',
    '/user-profile',
    '/received/received-profile',
    '/about',
  ];

  useEffect(() => {
    setStatus(!hiddenPaths.includes(pathname));
  }, [pathname]);

  return (
    <Container>
      <LayoutContainer>
        <Sidebar />

        <OutletBox>
          <HeaderInput>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setOpen(true)}
                sx={[
                  {
                    position: 'absolute',
                    left: '20px',
                    marginRight: 5,
                  },
                  open && { display: 'none' },
                ]}
              >
                <MenuIcon />
              </IconButton>
            )}
            {status && <Input size="small" placeholder="Поиск" />}
          </HeaderInput>

          <Outlet />
        </OutletBox>
      </LayoutContainer>
      <UserMobileNavBar />
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  margin: '0 auto',
  position: 'relative',
  overflow: 'hidden',
  maxWidth: '1680px',
  minWidth: '1200px',

  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    minWidth: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('xs')]: {
    maxWidth: '450px',
    minWidth: '375px',
  },
}));

const HeaderInput = styled('header')(({ theme }) => ({
  width: '100%',
  height: '90px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1000,

  [theme.breakpoints.down('sm')]: {
    height: '80px',
    backgroundColor: 'white',
  },
}));

const LayoutContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '80px',
  },
}));

const Input = styled(TextField)(({ theme }) => ({
  width: '40%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    backgroundColor: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    width: '50%',
    '& .MuiOutlinedInput-root': {
      height: '45px',
    },
  },
}));

const OutletBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  overflow: 'auto',
}));
