import { Outlet, useLocation } from 'react-router-dom';
import { Box, TextField, styled } from '@mui/material';
import { Sidebar } from '@/modules/Sidebar';
import IconButton from '@mui/material/IconButton';
import { IoMenu as MenuIcon } from 'react-icons/io5';
import { useSidebar } from '@/modules/Sidebar';
import { UserMobileNavBar } from '@/components';
import { useCheckClient } from '@/helpers';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { searchReceived } from '@/store/slice/receivedSlice/receivedThunk';
import { useDispatch } from 'react-redux';
import { searchesGaveUp } from '@/store/slice/gaveUpSlice/gaveUpThunk';
import { searchesGraduated } from '@/store/slice/graduatadSlice/graduatadThunk';

export const Layout = () => {
  const { open, setOpen } = useSidebar();
  const [status, setStatus] = useState(true);
  const { isMobile } = useCheckClient();
  const { pathname } = useLocation();
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const [debounce] = useDebounce(text, 1500);

  useEffect(() => {
    if (debounce !== undefined) {
      if (pathname === '/received') {
        dispatch(searchReceived(debounce));
      } else if (pathname === '/gave-up') {
        dispatch(searchesGaveUp(debounce));
      } else {
        dispatch(searchesGraduated(debounce));
      }
    }
  }, [debounce]);
  const noInput = ['/', '/worlds-page'];
  const hiddenPaths = [
    '/tech-support',
    '/user-profile',
    /^\/received\/\d+\/received-profile$/,
    /^\/\d+\/worldInfo$/,
    '/about',
    '/user-profile/user-edit-page',
  ];

  useEffect(() => {
    setStatus(
      !hiddenPaths.some(path =>
        typeof path === 'string' ? path === pathname : path.test(pathname)
      )
    );
  }, [pathname]);

  return (
    <Container>
      <LayoutContainer>
        <Sidebar />

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
              {!noInput.includes(pathname) && (
                <Input
                  onChange={e => setText(e.target.value)}
                  size="small"
                  placeholder="Поиск"
                />
              )}
            </HeaderInput>
          )}

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
  backgroundColor: 'white',
  borderBottom: '1px solid #e0e0e0',

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
    paddingBottom: '60px',
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
