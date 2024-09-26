import { Box, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { IoMenu as MenuIcon } from 'react-icons/io5';
import { useSidebar } from '@/modules/Sidebar';
import { FiEdit } from 'react-icons/fi';
import { Button } from '@/components';
import { Actions } from '@/components/Table/lib/Actions';
import { Table } from '@/components/Table';
import { tableData } from '@/components/Table/lib/constants';

export const TotalAmout = () => {
  const { open, toggleOpen } = useSidebar();

  const columns = [
    {
      accessorKey: 'ddf',
      header: 'Имя, фамилия',
      cell: ({ row }) => (
        <div
          className="profile"
          style={{
            display: 'flex',
            height: '55px',
            alignItems: 'center',
            justifyContent: 'start',
            paddingLeft: '10px',
            cursor: 'pointer',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '100%',
            }}
          >
            <img style={{ width: '100%' }} src={row.original.url} alt="" />
          </div>
          <div style={{ display: 'flex', gap: '5px' }}>
            <p>{row.original.firstName} </p>
            <p>{row.original.lastName}</p>
          </div>
        </div>
      ),
    },
    {
      accessorKey: 'email',
      header: 'Email',
      cell: info => info.getValue(),
    },
    {
      accessorKey: 'phoneNumber',
      header: 'Number',
    },
    {
      accessorKey: '',
      header: 'Cумма',
      cell: ({ row }) => (
        <div style={{ marginLeft: '20px' }}>{row.original.total}</div>
      ),
    },
    {
      accessorKey: ' ',
      header: ' ',
      cell: ({ row }) => <Actions {...row} />,
    },
  ];
  return (
    <>
      <HeaderInput>
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
              top: '50%',
              transform: 'translateY(-50%)',
            },
            open && { display: 'none' },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Input placeholder="Поиск" size="small" />
      </HeaderInput>
      <Main>
        <BlockOne>
          <TypographyStyled
            textAlign={'center'}
            fontFamily={'Montserrat, sans-serif'}
            fontWeight={'500'}
            fontSize={'24px'}
          >
            Общая сумма
          </TypographyStyled>
          <KrugBlock>
            <KrugBlockMini>
              <Typography
                lineHeight={'35px'}
                fontSize={'26px'}
                fontWeight={700}
                color="#37D3D3"
              >
                9 000 000 000
              </Typography>
            </KrugBlockMini>
          </KrugBlock>
          <ButtonStyled className="butoon">
            <Typography>Изменить</Typography>
              <FiEdit sx={{ marginBottom: '5px' }} />
          </ButtonStyled>
          <Typography
            fontSize={'24px'}
            textAlign={'center'}
            fontWeight={500}
            color="#000000"
            sx={{ margin: '10px 0' }}
          >
            Запросы на добавления
          </Typography>
        </BlockOne>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
          <Card key={item}>
            <BlockAvatat>
              <Img src={'src/assets/icon/Gogle.svg'} />
              <div>
                <Typography fontWeight={400} fontSize={'17px'}>
                  Ахатджанов Даниел
                </Typography>
                <Typography color="#959393" fontWeight={400} fontSize={'13px'}>
                  tanya.hill@example.com
                </Typography>
              </div>
            </BlockAvatat>
            <BlockPrice>
              <Typography
                color="#959393"
                fontWeight={400}
                fontSize={'32px'}
                lineHeight={20}
                fontFamily="'Nunito', sans-serif"
              >
                1 000 000 сом
              </Typography>
            </BlockPrice>
            <BlockActions>
              <DeleteBlock src={'src/assets/icon/Delete.svg'} />
              <CompleteBlock src={'src/assets/icon/complete.svg'} />
            </BlockActions>
          </Card>
        ))}
        <Div>
          <Table data={tableData} columns={columns} />
        </Div>
        <BlockNext>
          <Typography color="#3D348B" fontSize={'16px'} fontWeight={700}>
            перейти
          </Typography>
          <img src="src/assets/icon/Next.svg" alt="" />
        </BlockNext>
      </Main>
    </>
  );
};

const HeaderInput = styled('header')(({ theme }) => ({
  width: '100%',
  height: '70px',
  backgroundColor: 'yellow',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 1000,

  [theme.breakpoints.down('sm')]: {
    backgroundColor: 'white',
    border: '1px solid gray',
  },
}));

const Input = styled(TextField)(({ theme }) => ({
  width: '40%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    backgroundColor: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    width: '65%',
    '& .MuiOutlinedInput-root': {
      height: '45px',
    },
  },
}));

const Main = styled('main')(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    minHeight: '100px',
    margin: '5px auto',
  },
}));

const Div = styled(Box)(({ theme }) => ({
  display: 'block',
  minHeight: '200px',
  width: '100%',
  margin: '5px auto',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  margin: '50px auto',
  backgroundColor: '#3D348B',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  borderRadius: '16px',
  width: '300px',
}));

const BlockOne = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '10px auto',

  [theme.breakpoints.down('sm')]: {
    width: '95%',
    minHeight: '100px',
    margin: '5px auto',

    '& .butoon': {
      height: '50px',
      display: 'block',
      width: '70%',
      margin: '15px auto',
      backgroundColor: '#3D348B',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      gap: '10px',
      borderRadius: '16px',
    },
  },
}));

const KrugBlock = styled('div')(({ theme }) => ({
  width: '350px',
  height: '350px',
  margin: '0 auto',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#37D3D3',

  [theme.breakpoints.down('sm')]: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    backgroundColor: '#37D3D3',
    margin: '25px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const KrugBlockMini = styled('div')(({ theme }) => ({
  width: '320px',
  height: '320px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    width: '220px',
    height: '220px',
    backgroundColor: 'white',
    borderRadius: '50%',
    margin: '5px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontSize: '30px',
  fontWeight: 700,
  color: '#000',
  margin: '20px auto',
  [theme.breakpoints.down('sm')]: {},
}));

const Card = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    minHeight: '150px',
    margin: '20px auto',
    display: ' flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '6px',
    boxShadow: '0px 7px 8px 0px rgba(34, 60, 80, 0.2)',
  },
}));

const BlockAvatat = styled('div')(({ theme }) => ({
  width: '50%',

  [theme.breakpoints.down('sm')]: {
    width: '95%',
    height: '73px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'end',
    gap: '10px',
  },
}));

const Img = styled('img')(({ theme }) => ({
  width: '50%',
  height: '50%',
  borderRadius: '50%',

  [theme.breakpoints.down('sm')]: {
    width: '70px',
    height: '70px',
  },
  cursor: 'pointer',
}));

const BlockPrice = styled('div')(({ theme }) => ({
  width: '50%',
  // height: '50%',

  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  },
}));
const BlockActions = styled('div')(({ theme }) => ({
  width: '100%',
  // height: '50%',

  [theme.breakpoints.down('sm')]: {
    width: '95%',
    minHeight: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
  },
}));

const BlockNext = styled('div')(({ theme }) => ({
  width: '150px',
  height: '50px',
  margin: '0 auto ',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const DeleteBlock = styled('img')(({ theme }) => ({}));
const CompleteBlock = styled('img')(({ theme }) => ({}));
