import { Outlet } from 'react-router-dom';
import { Box, TextField, styled } from '@mui/material';

import { Sidebar } from '@/modules/Sidebar';

// Test
import IconButton from '@mui/material/IconButton';
import { IoMenu as MenuIcon } from 'react-icons/io5';

import { useSidebar } from '@/modules/Sidebar';
import { UserMobileSideBar } from '@/components';

export const Layout = () => {
  const { open, toggleOpen } = useSidebar();

  return (
    <Container>
      <LayoutContainer>
        <Sidebar />

        <OutletBox>
          <HeaderInput>
            {/* Вынести отдельно */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleOpen}
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

            <Input size="small" placeholder="Поиск" />
          </HeaderInput>

          <Outlet />
        </OutletBox>
      </LayoutContainer>
      <UserMobileSideBar />
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

const HeaderInput = styled('header')(({ theme }) => ({
  width: '100%',
  height: '100px',
  backgroundColor: 'yellow',
  borderBottom: '3px solid green',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1000,

  [theme.breakpoints.down('sm')]: {
    height: '70px',
  },
  [theme.breakpoints.down('sm')]: {
    // Пока что сделано таким образом, при необходимости можно изменить
    // width: '35%',
    backgroundColor: 'red',
  },
}));

const LayoutContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  paddingBottom: '80px',
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
  // <<<<<<< HEAD
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  overflow: 'auto',
  // =======
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'white',
  //   overflow: 'auto',
  // >>>>>>> dev
}));
