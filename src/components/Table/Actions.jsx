import styled from '@emotion/styled';
import { Box } from '@mui/material';

import { RiCheckFill as CompleteIcon } from 'react-icons/ri';
import { PiTrash as DeleteIcon } from 'react-icons/pi';

export function Actions({ id }) {
  return (
    <Block>
      <CompleteIcon size={30} color="#0CB927" />
      <DeleteIcon size={25} color="#FF0004" />
    </Block>
  );
}

const Block = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  gap: '40px',
  width: '100px',
}));
