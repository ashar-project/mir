import { Stack, Avatar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const UserCard = ({
  imageUrl,
  userName = 'No name',
  isAdmin = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    isAdmin && navigate('/admin');
  };

  return (
    <Stack
      spacing={1}
      width="100%"
      height="100px"
      direction="row"
      alignItems="center"
      borderTop="1px solid #D9D9D9"
      borderBottom="1px solid #D9D9D9"
      paddingX={open ? '15px' : '10px'}
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Avatar
        src={imageUrl}
        sx={{
          width: '50px',
          height: '50px',
        }}
      />

      <Stack>
        <Typography color="#949494" fontSize={12} lineHeight={1.5}>
          Добрый день
        </Typography>
        <Typography fontWeight={600}>{userName}</Typography>
      </Stack>
    </Stack>
  );
};
