import { Outlet, useLocation } from 'react-router-dom';
import { Box, IconButton, styled, TextField } from '@mui/material';

import { AdminSidebar, useSidebar } from '@/modules/Sidebar';
import { AdminMobileNavBar } from '@/modules/Navbar/components/AdminMobailNavBar';
import { useDispatch } from 'react-redux';
import { toggleOpen } from '@/modules/Sidebar/store';
import { useCheckClient } from '@/helpers';
import { IoMenu as MenuIcon } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export const AdminLayout = () => {
  const { open, setOpen } = useSidebar();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(true);
  const { isMobile } = useCheckClient();
  const { pathname } = useLocation();

  const hiddenPaths = [
    '/tech-support',
    /^\/admin\/worlds-page\/\d+\/worldRaiting$/,
    '/admin',
    '/admin/payment-page',
    '/admin/worlds-page/adminInnerTablePage',
    /^\/admin\/received-page\/\d+\/received-inner-page$/,
  ];

  useEffect(() => {
    setStatus(
      !hiddenPaths.some(path =>
        typeof path === 'string' ? path === pathname : path.test(pathname)
      )
    );
  }, [pathname]);

  const clicker = () => {
    dispatch(toggleOpen());
  };
  return (
    <Container>
      <LayoutContainer>
        <AdminSidebar />

        <OutletBox>
          {status && (
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
              <Input size="small" placeholder="Поиск" />
            </HeaderInput>
          )}
          <Outlet />
        </OutletBox>
      </LayoutContainer>
      <AdminMobileNavBar />
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

  [theme.breakpoints.down('sm')]: {
    maxWidth: '450px',
    minWidth: '375px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const LayoutContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  // paddingBottom: '50px',
}));

const OutletBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  overflow: 'auto',
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'white',
  //   overflow: 'auto',
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
  backgroundColor: 'white',
  borderBottom: '1px solid #e0e0e0',

  [theme.breakpoints.down('sm')]: {
    height: '80px',
    backgroundColor: 'white',
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
