import { useTheme } from '@emotion/react';
import { Typography, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export const RatingCard = ({ minAmount, maxAmount, rating }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isAdmin = pathname === '/admin/worlds-page';

  const handleClick = () => {
    if (isAdmin) {
      navigate(String(rating));
    }
  };

  return (
    <Stack
      sx={{
        padding: '15px',
        minWidth: '220px',
        maxHeight: '160px',
        border: '1px solid grey',
        boxShadow: '0px 4px 5px grey',
        borderTop: '5px solid #637E7E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        [theme.breakpoints.down('sm')]: {
          minWidth: '160px',
          maxHeight: '185px',
        },
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <Typography lineHeight={1.15} fontSize={96} fontWeight={500}>
        {rating}
      </Typography>
      <Stack direction="row" gap="10px">
        <Typography fontSize={16} fontWeight={500}>
          {minAmount} - {maxAmount}
        </Typography>
      </Stack>
    </Stack>
  );
};
