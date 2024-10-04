import { Box, styled, TextField, Typography } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { IoMenu as MenuIcon } from 'react-icons/io5';
import { useSidebar } from '@/modules/Sidebar';
import { FiEdit } from 'react-icons/fi';
import { Button } from '@/components';
import { Actions } from '@/components/Table/Actions';
import { tableData } from '@/helpers/tableConstants';
import { ActionsImg } from './lib/Actions';
import { Table } from '@/components/Table';
import { MobileCard } from '..';

export const TotalAmout = () => {
  const { open, toggleOpen } = useSidebar();

  const columns = [
    {
      accessorKey: 'ddf',
      header: 'Имя, фамилия',
      cell: ({ row }) => <ActionsImg row={row} />,
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
          <MobileCard item={item} />
        ))}
        <Div>
          <Table data={tableData} columns={columns} />
        </Div>
      </Main>
    </>
  );
};

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
  width: '90%',
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
