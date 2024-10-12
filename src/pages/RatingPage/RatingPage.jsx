import { Button } from '@mui/material';
import { FaArrowLeft as BackIcon } from 'react-icons/fa6';

import { useNavigate, useParams } from 'react-router-dom';
import styles from './test.module.css';

import { Table } from '@/components/Table';
import { Actions } from '@/components/Table/Actions';
import { tableData } from '@/helpers/tableConstants';
import { ActionsImg } from '@/pages/Admin/TotalAmountPage/lib/Actions';

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
    accessorKey: 'action',
    header: null,
    cell: ({ row }) => <Actions {...row} />,
  },
];

export const RatingPage = () => {
  const { id: ratingID } = useParams();
  const navigate = useNavigate();

  // Доделать функцию для перехода на страницу пользователя
  const onClickTableItem = userId => {
    // navigate(String(userId), {
    //   replace: false,
    // });
    console.log(userId);
  };

  return (
    <div className={styles.container}>
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
        <div className={styles.ratingAmount}>1000-1000</div>
      </div>

      <Table
        columns={columns}
        data={tableData}
        variant="patients"
        onClickItem={onClickTableItem}
      />
    </div>
  );
};
