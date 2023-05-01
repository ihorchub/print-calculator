// import { useEffect } from 'react';
import { useState } from 'react';
// import { styled } from '@mui/material';
import { Grid, Autocomplete, TextField, Typography } from '@mui/material';
import { printingPriceOptions } from 'helpers/printingPrice';
import { OneElement } from 'components/OneElement/OneElement';

export const App = () => {
  const [quality, setQuality] = useState([]);
  const [qualityValue, setQualityValue] = useState('');
  const [printingPrice, setPrintingPrice] = useState('');

  return (
    <Grid container p="32px" gap="16px">
      <Grid item container spacing={2}>
        <Grid item xs={7}>
          <Typography variant="subtitle2">Оберіть матеріал*</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2">Оберіть якість друку*</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2">Вартість друку</Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={7}>
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
        <Grid item xs={3}>
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
          <TextField
            fullWidth
            size="small"
            label="грн./м.кв."
            variant="outlined"
            value={printingPrice}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Typography>
          Введіть будь ласка параметри зображення для друку
        </Typography>
      </Grid>
      <Grid item container spacing={2} columns={8}>
        <Grid item xs={1}>
          <Typography variant="subtitle2" mb={1}>
            Ширина*
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2" mb={1}>
            Довжина*
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2" mb={1}>
            Кількість
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2" mb={1}>
            Площа
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2" mb={1}>
            Вартість друку
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2" mb={1}>
            Ламінація
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2" mb={1}>
            Вартість ламінації
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2" mb={1}>
            Вартість замовлення
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <OneElement price={printingPrice} />
      </Grid>
    </Grid>
  );
};

// const Wrapper = styled('div')(() => ({
//   padding: '0 16px',
// }));
