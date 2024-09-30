import styled from '@emotion/styled';
import { Box } from '@mui/material';

export function Actions({ id }) {
  return (
    <Block>
      <img src="src/assets/icon/complete.svg" alt="" />
      <img src="src/assets/icon/Delete.svg" alt="" />
    </Block>
  );
}

const Block = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '40px',
  width:"100px",
}));
