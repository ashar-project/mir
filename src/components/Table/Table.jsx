import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const Table = ({ data, columns, variant, onClickItem }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const patientInfoPage = id => {
    if (variant === 'patients') {
      onClickItem(id);
    }
  };

  return (
    <TableContainerStyled>
      <TableStyled>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} onClick={() => patientInfoPage(row.original.id)}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableStyled>
    </TableContainerStyled>
  );
};

const TableContainerStyled = styled(Box)({
  width: '100%',
  margin: '0 auto',
  fontFamily: '"Manrope",sans-serif',
});

const TableStyled = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  border: '1px solid #ddd',
  borderRadius: '6px',
  '& thead th': {
    borderBottom: '1px solid #ddd',
    padding: '17px',
    textAlign: 'left',
    fontSize: '15px',
  },
  '& thead th:first-child': {
    width: '200px',
  },
  '& tbody td': {
    borderBottom: '1px solid #ddd',
    fontSize: '13px',
    cursor: 'pointer',
  },
  '& tbody tr:hover': {
    backgroundColor: '#f1f1f1',
  },
});
