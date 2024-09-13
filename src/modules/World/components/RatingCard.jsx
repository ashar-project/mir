import { Typography, Stack } from "@mui/material";

export const RatingCard = ({ minAmount, maxAmount, rating }) => {
  return (
    <Stack
      padding={1.5}
      minWidth={220}
      maxHeight={160}
      alignItems="center"
      border="1px solid grey"
      boxShadow="0px 4px 5px grey"
      borderTop="5px solid #637E7E"
      justifyContent="space-between"
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
