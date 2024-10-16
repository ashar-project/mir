import { useTheme } from '@emotion/react';
import { Typography, Stack } from '@mui/material';

export const RatingCard = ({ minAmount, maxAmount, rating }) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        padding: '15px',
        minWidth: '200px',
        maxHeight: '160px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        borderTop: '5px solid #637E7E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.background.paper,
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s', 
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)', 
        },

        [theme.breakpoints.down('md')]: {
          minWidth: '176px',
          maxHeight: '185px',
          padding: '10px',
        },
        '@media (max-width: 375px)': {
          width: '116px',
          height: '125px',
          padding: '5px', 
        },
      }}
    >
      <Typography
        lineHeight={1.15}
        fontSize={64}
        fontWeight={500}
        color={theme.palette.text.primary}
        textAlign="center" 
      >
        {rating}
      </Typography>
      <Stack>
        <Typography
          fontSize={14}
          fontWeight={500}
          color={theme.palette.text.secondary}
          textAlign="center" 
        >
          {new Intl.NumberFormat('ru-RU').format(minAmount)} -{' '}
          {new Intl.NumberFormat('ru-RU').format(maxAmount)}
        </Typography>
      </Stack>
    </Stack>
  );
};
