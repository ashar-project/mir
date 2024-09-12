import { Grid2 as Grid, Box } from "@mui/material";

import { RatingCard } from "./RatingCard";
import { data } from "../helpers/mock-data";

export const RatingTable = () => {
  return (
    <Box flexGrow={1}>
      <Grid container spacing={10} columnSpacing={5}>
        {data.map(({ id, from, to }) => (
          <Grid item="true" key={id}>
            <RatingCard key={id} rating={id} minAmount={from} maxAmount={to} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
