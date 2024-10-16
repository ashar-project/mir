import { Outlet, useLocation } from 'react-router-dom';
import {
  Box,
  Button as MuiButton,
  IconButton,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { AiOutlineDelete } from 'react-icons/ai';
import { AdminSidebar, useSidebar } from '@/modules/Sidebar';
import { AdminMobileNavBar } from '@/modules/Navbar/components/AdminMobailNavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useCheckClient } from '@/helpers';
import { IoMenu as MenuIcon } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { Button, ReusableModal } from '..';
import {
  deleteGraduatedUsers,
  searchesGraduated,
} from '@/store/admin/adminGraduated/adminGraduatedThunk';
import {
  getReceivedUser,
  searchesReceived,
} from '@/store/admin/adminReceived/adminReceivedThunk';
import { Spinner } from '../Spinner/Spinner';
import {
  deleteGaveUpdUsers,
  getAdminGaveUp,
  searchGaveUp,
} from '@/store/admin/adminGaveUp/adminGaveUpTjunk';
import { useDebounce } from 'use-debounce';

export const AdminLayout = () => {
  const { open, setOpen } = useSidebar();
  const dispatch = useDispatch();
  const { isLoading: graduatedLoadiing, all } = useSelector(
    state => state.adminGraduated
  );
  const { allGave } = useSelector(state => state.adminGaveUp);
  const { pathname } = useLocation();
  const { isMobile } = useCheckClient();

  const [status, setStatus] = useState(true);
  const [path, setPath] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const pathVisiblity = ['/admin/gave-page', '/admin/graduated-page'];
  const [text, setText] = useState('');
  const modal = () => setOpenModal(prev => !prev);
  const [debounced] = useDebounce(text, 1500);

  useEffect(() => {
    if (debounced !== undefined) {
      if (pathname === '/admin/gave-page') {
        allGave.length && dispatch(searchGaveUp(debounced));
      } else if (pathname === '/admin/graduated-page') {
        dispatch(searchesGraduated(debounced));
      } else {
        dispatch(searchesReceived(debounced));
      }
    }
  }, [debounced]);

  useEffect(() => {
    setPath(pathVisiblity.includes(pathname));
  }, [pathname]);

  const hiddenPaths = [
    '/tech-support',
    /^\/admin\/worlds-page\/\d+\/worldRaiting$/,
    '/admin/payment-page',
    /^\/admin\/worlds-page\/\d+\/adminInnerTablePage$/,
    /^\/admin\/received-page\/\d+\/received-inner-page$/,
    '/admin/return-pay',
  ];
  const noInput = ['/admin', '/admin/worlds-page'];
  useEffect(() => {
    setStatus(
      !hiddenPaths.some(path =>
        typeof path === 'string' ? path === pathname : path.test(pathname)
      )
    );
  }, [pathname]);

  const deleteReceivedUsers = async () => {
    await dispatch(deleteGraduatedUsers());
    await dispatch(getReceivedUser());
    modal();
  };
  const deleteGaveUpdUserss = async () => {
    await dispatch(getAdminGaveUp());
    await dispatch(deleteGaveUpdUsers());
    modal();
  };

  return (
    <Container>
      <LayoutContainer>
        <AdminSidebar />
        {graduatedLoadiing && <Spinner />}
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
                  value={text}
                  size="small"
                  placeholder="Поиск"
                />
              )}

              {path && (
                <div style={{ margin: '0 10px' }}>
                  <MuiButton
                    onClick={modal}
                    sx={{ backgroundColor: 'red', color: 'white' }}
                  >
                    <AiOutlineDelete color="white" size={26} />
                  </MuiButton>
                </div>
              )}
              <ReusableModal open={openModal} onClose={modal}>
                <BoxStyled>
                  {pathname === '/admin/gave-page' ? (
                    <>
                      {!allGave?.length ? (
                        <TypographyStyled textAlign={'center'}>
                          Сдавшихся участников нету попробуйте позже
                        </TypographyStyled>
                      ) : (
                        <TypographyStyled textAlign={'center'}>
                          Вы точна хотите удалить всех сдавшихся участников ?
                        </TypographyStyled>
                      )}
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <Button variant="outlined" onClick={modal}>
                          Отмена
                        </Button>
                        {allGave?.length ? (
                          <Button onClick={deleteGaveUpdUserss}>Да</Button>
                        ) : (
                          <Button onClick={modal}>Назад</Button>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      {all?.length ? (
                        <TypographyStyled textAlign={'center'}>
                          Вы точна хотите удалить всех закончившихся участников
                          ?
                        </TypographyStyled>
                      ) : (
                        <TypographyStyled>
                          Закончившие участников нету попробуйте позже
                        </TypographyStyled>
                      )}
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <Button variant="outlined" onClick={modal}>
                          Отмена
                        </Button>
                        {all?.length ? (
                          <Button onClick={deleteReceivedUsers}>Да</Button>
                        ) : (
                          <Button onClick={modal}>Назад</Button>
                        )}
                      </div>
                    </>
                  )}
                </BoxStyled>
              </ReusableModal>
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
  // maxWidth: '1680px',
  // minWidth: '1200px',

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
    // height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const LayoutContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  paddingBottom: '50px',
}));

const BoxStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  wordBreak: 'break-word',
  padding: '20px',

  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '15px',
  },
}));

const OutletBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  overflow: 'auto',
  flexGrow: 1,
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
