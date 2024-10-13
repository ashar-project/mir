import { Button, styled } from '@mui/material';
import { FaArrowLeft as BackIcon } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './test.module.css';
import { Table } from '@/components/Table';
import { Actions } from '@/components/Table/Actions';
import { tableData } from '@/helpers/tableConstants';
import { ActionsImg } from '@/pages/Admin/TotalAmountPage/lib/Actions';
import { data } from '@/modules/World/helpers/mock-data';
import { MobileCard } from '../Admin';
import { useSelector } from 'react-redux';

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
      <div style={{ marginLeft: '20px' }}>{row.original.totalSum}</div>
    ),
  },
];

export const RatingPage = () => {
  const { id: ratingID } = useParams();
  const { user } = useSelector(state => state.userAdmin);
  const navigate = useNavigate();
  const value = data.find(item => item.id === +ratingID);

  const onClickTableItem = id => {
    console.log('Selected ID:', id);
  };

  return (
    <div className={styles.container}>
      <Button
        variant="outlined"
        className={styles.backButton}
        startIcon={<BackIcon />}
        onClick={() => navigate(-2)}
      >
        Назад
      </Button>

      <div className={styles.ratingBox}>
        <div className={styles.ratingItem}>{ratingID}</div>
        <div className={styles.ratingAmount}>
          {value.from} - {value.to}
        </div>
      </div>

      <TableInfo>
        <Table
          columns={columns}
          data={user}
          variant="admin"
          onClickItem={onClickTableItem}
        />
      </TableInfo>
      <MobileCard item={user} />
      {!user.length > 0 && (
        <NoDataMessage>Нет данных для отображения.</NoDataMessage>
      )}
    </div>
  );
};

const TableInfo = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const NoDataMessage = styled('div')(({ theme }) => ({
  marginTop: '20px',
  fontSize: '16px',
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));
