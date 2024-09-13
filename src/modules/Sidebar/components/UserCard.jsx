import { Box, Stack, Divider, Avatar, Typography } from "@mui/material";

export const UserCard = ({ imageUrl, userName = "No name" }) => {
  return (
    <Stack
      width="100%"
      height="100px"
      spacing={1}
      direction="row"
      alignItems="center"
      borderTop="1px solid #D9D9D9"
      borderBottom="1px solid #D9D9D9"
    >
      <Avatar
        src={imageUrl}
        sx={{
          width: "50px",
          height: "50px",
        }}
      />

      <Box>
        <Typography color="#949494" fontSize={12} lineHeight={1.5}>
          Добрый день
        </Typography>
        <Typography fontWeight={600}>{userName}</Typography>
      </Box>
    </Stack>
  );
};
