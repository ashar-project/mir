import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/material';

import { AdminSidebar } from '@/modules/Sidebar';
import { UserMobileNavBar } from '@/components';

export const AdminLayout = () => {
  return (
    <Container>
      <LayoutContainer>
        <AdminSidebar />
        <OutletBox>
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
