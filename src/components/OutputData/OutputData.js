import { Grid, TextField } from '@mui/material';
import { dataOutput } from 'helpers/printingPrice';

export const OutputData = () => (
  <Grid item container spacing={1}>
    {dataOutput.map(item => (
      <Grid item xs={2}>
        <p>{item.title}</p>
        <TextField size="small" label={item.label} variant="outlined" />
      </Grid>
    ))}
  </Grid>
);
