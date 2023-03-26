// import {  useEffect } from 'react';
import { useState } from 'react';
// import { Grid, styled } from '@mui/material';
import { Grid, Autocomplete, TextField } from '@mui/material';
import { printingPriceOptions } from 'helpers/printingPrice';
import { OneElement } from 'components/OneElement/OneElement';

export const App = () => {
  const [quality, setQuality] = useState([]);
  const [qualityValue, setQualityValue] = useState('');
  const [printingPrice, setPrintingPrice] = useState('');

  return (
    <Grid p="16px 32px">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <p>Оберіть матеріал*</p>
          <Autocomplete
            size="small"
            options={printingPriceOptions}
            getOptionLabel={option => option.material}
            renderInput={params => (
              <TextField {...params} label="Обраний матеріал" />
            )}
            onChange={(_, newValue) => {
              setQuality(newValue.quality);
              setPrintingPrice('');
              setQualityValue('');
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <p>Оберіть якість друку*</p>
          <Autocomplete
            inputValue={qualityValue}
            size="small"
            options={quality}
            getOptionLabel={option => option.label}
            renderInput={params => (
              <TextField {...params} label="Обрана якість" />
            )}
            onChange={(_, newValue) => {
              setPrintingPrice(newValue.price);
              setQualityValue(newValue.label);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <p>Вартість друку 1 м.кв.</p>
          <TextField
            size="small"
            label="грн."
            variant="outlined"
            value={printingPrice}
          />
        </Grid>
      </Grid>
      <p>Введіть будь ласка параметри зображення для друку</p>
      <OneElement price={printingPrice} />
    </Grid>
  );
};

// const Wrapper = styled('div')(() => ({
//   padding: '0 16px',
// }));
