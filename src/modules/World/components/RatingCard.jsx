import { Typography, Stack } from "@mui/material";

export const RatingCard = ({ minAmout = 0, maxAmout = 0, rating }) => {
  return (
    <Stack
      sx={{
        padding: "15px",
        minWidth: "220px",
        maxHeight: "160px",
        border: "1px solid grey",
        borderTop: "5px solid #637E7E",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 5px grey",
      }}
    >
      <Typography
        sx={{
          fontSize: "100px",
          fontWeight: 500,
        }}
      >
        {rating}
      </Typography>
      <Stack direction="row" gap="10px">
        <Typography>{minAmout}</Typography>-<Typography>{maxAmout}</Typography>
      </Stack>
    </Stack>
  );
};
