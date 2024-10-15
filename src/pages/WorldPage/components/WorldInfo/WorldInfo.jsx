import { Button } from '@/components';
import { Table } from '@/components/Table';
import { data } from '@/modules/World/helpers/mock-data';
import { MobileCard } from '@/pages/Admin';
import { ActionsImg } from '@/pages/Admin/TotalAmountPage/lib/Actions';
import { Box, styled, Typography, useTheme } from '@mui/material';
import { FaArrowLeft as BackIcon } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export const WorldInfo = () => {
  const theme = useTheme();
  const { id: ratingID } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.user);
  const value = data.find(item => item.id === +ratingID);

  const onClickTableItem = userId => {
    // navigate(String(userId), {
    //   replace: false,
    // });
    console.log(userId);
  };

  const columns = [
    {
      accessorKey: 'userName',
      header: 'Имя, фамилия',
      cell: ({ row }) => {
        console.log(row.original);
        return <ActionsImg row={row} />;
      },
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
    {
      accessorKey: 'phoneNumber',
      header: 'Number',
      cell: ({ row }) => {
        const { phoneNumber } = row.original;
        if (phoneNumber) {
          return <div>{phoneNumber}</div>;
        }
        return <div>Нет данных</div>;
      },
    },
    {
      accessorKey: 'totalSum',
      header: 'Cумма',
      cell: ({ row }) => (
        <div style={{ marginLeft: '20px' }}>{row.original.totalSum}</div>
      ),
    },
  ];

  return (
    <Box margin={3}>
      <Button
        variant="outlined"
        startIcon={<BackIcon />}
        onClick={() => navigate(-1)}
      >
        Назад
      </Button>

      <NavBox>
        <BlockId>
          <Typography
            color="#fff"
            fontFamily={'Montserrat,sans-serif'}
            fontWeight={500}
            fontSize={40}
          >
            {value.id}
          </Typography>
        </BlockId>
        <BlockSumm>
          <Typography
            fontWeight={500}
            fontSize={24}
            sx={{
              fontFamily: 'Montserrat,sans-serif',
              fontSize: 24,
              fontWeight: 500,
              [theme.breakpoints.down('sm')]: {
                fontSize: 14,
              },
            }}
          >
            {value.from} - {value.to} Сом
          </Typography>
        </BlockSumm>
      </NavBox>

      <TableInfo>
        <Table
          columns={columns}
          data={user}
          variant="patients"
          onClickItem={onClickTableItem}
        />
      </TableInfo>
      <MobileCard item={user} />
      {user.length === 0 && <h1>Упс пока данных нет</h1>}
    </Box>
  );
};

const NavBox = styled(Box)(() => ({
  width: '100%',
  height: '60px',
  borderRadius: '10px',
  display: 'flex',
  margin: '15px 0',
  boxShadow: '0px 8px 19px 0px rgba(207,203,207,1)',
}));

const BlockId = styled(Box)(() => ({
  width: '80px',
  height: '60px',
  backgroundColor: '#637e7e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px 0 0 10px',
}));

const BlockSumm = styled(Box)(() => ({
  width: '400px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const TableInfo = styled(Box)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));
