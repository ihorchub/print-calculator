import { Grid } from '@mui/material';
import { InputData } from 'components/InputData/InputData';
import { OutputData } from 'components/OutputData/OutputData';

export const OneElement = () => (
  <Grid container spacing={2}>
    <InputData />
    <OutputData />
  </Grid>
);
