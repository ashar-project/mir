import { Box, styled, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Button } from '@/components';
import { ActionsImg } from './lib/Actions';
import { Table } from '@/components/Table';
import { MobileCard } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { getMainData } from '@/store/admin/adminMain/adminMainThunk';
import { Spinner } from '@/components/Spinner/Spinner';

export const TotalAmout = () => {
  const dispatch = useDispatch();
  const { main, isLoading } = useSelector(state => state.adminMain);

  useEffect(() => {
    dispatch(getMainData());
  }, [dispatch]);

  const columns = [
    {
      accessorKey: 'ddf',
      header: 'Имя, фамилия',
      cell: ({ row }) => <ActionsImg row={row} />,
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'number',
      header: 'Number',
    },
    {
      accessorKey: '',
      header: 'Cумма',
      cell: ({ row }) => (
        <div style={{ marginLeft: '20px' }}>
          {new Intl.NumberFormat('ru-RU').format(row.original.totalSum)}
        </div>
      ),
    },
  ];

  if (isLoading) return <Spinner />;

  if (!main || !main.users || main.users.length === 0) {
    return <div>No data available</div>;
  }

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
                {new Intl.NumberFormat('ru-RU').format(main.globalSum)}
                <span> сом</span>
              </Typography>
            </KrugBlockMini>
          </KrugBlock>
          <Typography
            fontSize={'24px'}
            textAlign={'start'}
            fontWeight={500}
            color="#000000"
            sx={{ margin: '10px 0 0 50px' }}
          >
            Все участники
          </Typography>
        </BlockOne>

        <MobileCard item={main.users || []} />
        <Div>
          <Table data={main.users || []} columns={columns} />
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
