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

export const PaymentTable = () => {
  const data = [
    { id: 1, date: '01.01.2024', amount: '5 000 сом', status: 'Оплачено' },
    { id: 2, date: '01.02.2024', amount: '5 000 сом', status: 'Пропущено' },
    { id: 3, date: '01.03.2024', amount: '5 000 сом', status: 'Ожидание' },
    { id: 4, date: '01.04.2024', amount: '5 000 сом', status: '--------' },
    { id: 4, date: '01.04.2024', amount: '5 000 сом', status: '--------' },
    { id: 4, date: '01.04.2024', amount: '5 000 сом', status: '--------' },
    { id: 4, date: '01.04.2024', amount: '5 000 сом', status: '--------' },
    { id: 4, date: '01.04.2024', amount: '5 000 сом', status: '--------' },
    { id: 4, date: '01.04.2024', amount: '5 000 сом', status: '--------' },
    { id: 4, date: '01.04.2024', amount: '5 000 сом', status: '--------' },
    { id: 4, date: '01.04.2024', amount: '5 000 сом', status: '--------' },
  ];

  const StatusText = styled('span')(({ status }) => ({
    color:
      status === 'Оплачено'
        ? 'green'
        : status === 'Пропущено'
          ? 'red'
          : status === 'Ожидание'
            ? 'orange'
            : 'inherit',
  }));

  return (
    <Box>
      <TableWrapper>
        <DebtInfo variant="body1">Основной долг: 50 000 сом</DebtInfo>
        <DebtInfo variant="body1" style={{ color: 'green' }}>
          Оплатил: 25 000 сом
        </DebtInfo>
        <DebtInfo variant="body1" style={{ color: 'orange' }}>
          Остаток: 25 000 сом
        </DebtInfo>

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
            <TableBody>
              {data.map(row => (
                <TableRowStyled key={row.id}>
                  <TableCellStyled>{row.id}</TableCellStyled>
                  <TableCellStyled>{row.date}</TableCellStyled>
                  <TableCellStyled>{row.amount}</TableCellStyled>
                  <TableCellStyled>
                    <StatusText status={row.status}>{row.status}</StatusText>
                  </TableCellStyled>
                </TableRowStyled>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
    </Box>
  );
};

const DebtInfo = styled(Typography)(() => ({
  marginBottom: '16px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '24px',
  fontWeight: 500,
}));

const TableWrapper = styled(Paper)`
  padding: 16px;
  border-radius: 8px;
  background-color: #f6f5fa;
  font-family: sans-serif;
`;

const TableCellStyled = styled(TableCell)(() => ({
  fontFamily: 'Montserrat, sans-serif',
}));

const TableRowStyled = styled(TableRow)(() => ({
  '&:hover': {
    backgroundColor: '#f6f1f1',
  },
}));
