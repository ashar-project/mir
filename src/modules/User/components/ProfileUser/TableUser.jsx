import { Button } from '@/components';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  styled,
} from '@mui/material';
import { MdCurrencyRuble } from 'react-icons/md';

export const PaymentTable = ({ onClick, variants, value }) => {
  const translateValue = {
    PAID: 'Оплачено',
    WAITING: 'Ожидание',
    MISSED: 'Пропущено',
  };

  const StatusText = styled('span')(({ status }) => ({
    color:
      status === 'PAID'
        ? 'green'
        : status === 'MISSED'
          ? 'red'
          : status === 'WAITING'
            ? 'orange'
            : 'inherit',
  }));

  return (
    <Box>
      <TableWrapper>
        <Bot>
          <div>
            {variants === 'profile' && (
              <DebtInfo variant="body1">
                Текущий сумма:{' '}
                {new Intl.NumberFormat('ru-RU').format(value?.totalSum)} рубль
              </DebtInfo>
            )}
            <DebtInfo variant="body1">
              Основной долг:{' '}
              {new Intl.NumberFormat('ru-RU').format(value?.principalDebt)} рубль
            </DebtInfo>
            <DebtInfo variant="body1" style={{ color: 'green' }}>
              Оплатил: {new Intl.NumberFormat('ru-RU').format(value?.payDebt)}{' '}
              рубль
            </DebtInfo>
            <DebtInfo variant="body1" style={{ color: 'orange' }}>
              Остаток:{' '}
              {new Intl.NumberFormat('ru-RU').format(value?.remainingAmount)}{' '}
              рубль
            </DebtInfo>
          </div>
          {variants === 'admin' && (
            <Block>
              <Button
                onClick={onClick}
                fullWidth
                style={{ backgroundColor: '#0C0CB9DE', borderRadius: '10px' }}
              >
                Добавить
              </Button>
            </Block>
          )}
        </Bot>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRowStyled>
                <TableCellStyled>№</TableCellStyled>
                <TableCellStyled>Дата</TableCellStyled>
                <TableCellStyled>Сумма</TableCellStyled>
                <TableCellStyled>Статус</TableCellStyled>
              </TableRowStyled>
            </TableHead>
            <TableBody sx={{ position: 'relative' }}>
              {value?.payment?.length > 0 ? (
                value.payment.map((row, index) => (
                  <TableRowStyled key={row.id || index}>
                    <TableCellStyled>{index + 1}</TableCellStyled>
                    <TableCellStyled>{row.date}</TableCellStyled>
                    <TableCellStyled>{row.sum}</TableCellStyled>
                    <TableCellStyled>
                      <StatusText status={row.status}>
                        {translateValue[row.status]}
                      </StatusText>
                    </TableCellStyled>
                  </TableRowStyled>
                ))
              ) : (
                <Typography fontFamily={'Montserrat, sans-serif'}>
                  Упс данных пока нет
                </Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
    </Box>
  );
};

const DebtInfo = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '24px',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

const Bot = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Block = styled('div')(() => ({
  width: '200px',
  borderRadius: '10px',
}));

const TableWrapper = styled(Paper)`
  padding: 16px;
  border-radius: 8px;
  background-color: #f6f5fa;
  font-family: sans-serif;
  position: relative;
`;

const TableCellStyled = styled(TableCell)(() => ({
  fontFamily: 'Montserrat, sans-serif',
}));

const TableRowStyled = styled(TableRow)(() => ({
  '&:hover': {
    backgroundColor: '#f6f1f1',
  },
}));

const NoDataText = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  color: '#FF0000',
  fontWeight: 700,
  textAlign: 'center',
  marginTop: '20px',
  animation: 'fadeIn 2s ease-in-out infinite',

  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 1,
    },
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '18px', // Размер для мобильных устройств
  },
}));
