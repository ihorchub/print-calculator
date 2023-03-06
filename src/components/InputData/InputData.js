import { Grid, TextField, Autocomplete } from '@mui/material';
import { dataInput, lamination } from 'helpers/printingPrice';

export const InputData = () => (
  <Grid item container spacing={1}>
    {dataInput.map(item => (
      <Grid item xs={2}>
        <p>{item.title}</p>
        <TextField size="small" label={item.label} variant="outlined" />
      </Grid>
    ))}
    <Grid item xs={2}>
      <p>Ламінація</p>
      <Autocomplete
        size="small"
        options={lamination}
        renderInput={params => <TextField {...params} label="Lamination" />}
        // onChange={(_, newValue) => {setPrintingPrice(newValue.price);}}
      />
    </Grid>
  </Grid>
);
