// import {  useEffect } from 'react';
import { useState } from 'react';
// import { Grid, styled } from '@mui/material';
import { Grid, Autocomplete, TextField } from '@mui/material';
import { printingPriceOptions } from 'helpers/printingPrice';
import { OneElement } from 'components/OneElement/OneElement';

export const App = () => {
  const [quality, setQuality] = useState([]);
  const [materialСost, setMaterialСost] = useState('');
  const [printingPrice, setPrintingPrice] = useState('');

  return (
    <Grid p="0 16px">
      <Grid container spacing={2} columns={15}>
        <Grid item xs={8}>
          <p>Оберіть матеріал</p>
          <Autocomplete
            size="small"
            options={printingPriceOptions}
            getOptionLabel={option => option.material}
            renderInput={params => (
              <TextField {...params} label="Printing material" />
            )}
            onChange={(_, newValue) => {
              setQuality(newValue.quality);
              setMaterialСost(newValue.material_cost);
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <p>Оберіть якість друку</p>
          <Autocomplete
            size="small"
            options={quality}
            getOptionLabel={option => option.label}
            renderInput={params => <TextField {...params} label="Quality" />}
            onChange={(_, newValue) => {
              setPrintingPrice(newValue.price);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <p>Друк</p>
          <TextField
            size="small"
            label="Print"
            variant="outlined"
            value={printingPrice}
          />
        </Grid>
        <Grid item xs={2}>
          <p>Залишок</p>
          <TextField
            size="small"
            label="Material"
            variant="outlined"
            value={materialСost}
          />
        </Grid>
      </Grid>
      <OneElement />
    </Grid>
  );
};

// const Wrapper = styled('div')(() => ({
//   padding: '0 16px',
// }));
