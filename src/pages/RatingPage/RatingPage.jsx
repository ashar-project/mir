import { Button, styled } from '@mui/material';
import { FaArrowLeft as BackIcon } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './test.module.css';
import { Table } from '@/components/Table';
import { ActionsImg } from '@/pages/Admin/TotalAmountPage/lib/Actions';
import { data } from '@/modules/World/helpers/mock-data';
import { MobileCard } from '../Admin';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdWorldInfo } from '@/store/admin/adminWorld/adminWorldThunk';
import { Spinner } from '@/components/Spinner/Spinner';

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
  const { user, isLoading } = useSelector(state => state.userAdmin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const value = data.find(item => item.id === +ratingID);

  const onClickTableItem = userId => {
    dispatch(getByIdWorldInfo({ userId }))
      .then(result => {
        if (result.meta.requestStatus === 'fulfilled') {
          navigate(`/admin/worlds-page/${userId}/adminInnerTablePage`);
        } else {
          console.error('Ошибка при получении данных:', result.error.message);
        }
      })
      .catch(error => {
        console.error('Произошла ошибка:', error);
      });
  };

  return (
    <div className={styles.container}>
      {isLoading && <Spinner />}
      <Button
        variant="outlined"
        className={styles.backButton}
        startIcon={<BackIcon />}
        onClick={() => navigate(-1)}
      >
        Назад
      </Button>

      <div className={styles.ratingBox}>
        <div className={styles.ratingItem}>{ratingID}</div>
        <div className={styles.ratingAmount}>
          {new Intl.NumberFormat('ru-RU').format(value.from)} -{' '}
          {new Intl.NumberFormat('ru-RU').format(value.to)}
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
      <div>
        <MobileCard
          item={Array.isArray(user) ? user : []}
          handlerId={onClickTableItem}
        />
      </div>
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
