import { useNavigate, useParams } from 'react-router-dom';
import styles from './test.module.css';

import { Table } from '@/components/Table';
import { Actions } from '@/components/Table/lib/Actions';
import { tableData } from '@/components/Table/lib/constants';
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

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)}>Назад</button>

      <div className={styles.ratingBox}>
        <div className={styles.ratingItem}>{ratingID}</div>
        <div className={styles.ratingAmount}>1000-1000</div>
      </div>

      <Table columns={columns} data={tableData} />
    </div>
  );
};
