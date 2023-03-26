import { Grid, TextField, Autocomplete, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export const OneElement = ({ price }) => {
  const [isLamination, setIsLamination] = useState('Ні');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [count, setCount] = useState('');
  const [sqrt, setSqrt] = useState('');
  const [printCost, setPrintCost] = useState('');

  useEffect(() => {
    const itemSqrt = () =>
      (Number(width) / 1000) * (Number(height) / 1000) * Number(count);

    const calculatePrintCost = () => sqrt * price;
    setSqrt(itemSqrt());
    setPrintCost(calculatePrintCost());
  }, [width, height, count, sqrt, price]);

  return (
    <Grid container spacing={2} columns={8}>
      <Grid item xs={1}>
        <Typography variant="body2" mb={1}>
          Ширина*
        </Typography>
        <TextField
          size="small"
          label="мм"
          variant="outlined"
          value={width}
          onChange={e => {
            setWidth(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" mb={1}>
          Довжина*
        </Typography>
        <TextField
          size="small"
          label="мм"
          variant="outlined"
          value={height}
          onChange={e => {
            setHeight(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" mb={1}>
          Кількість
        </Typography>
        <TextField
          size="small"
          label="шт"
          variant="outlined"
          value={count}
          onChange={e => {
            setCount(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" mb={1}>
          Площа
        </Typography>
        <TextField size="small" label="м.кв." variant="outlined" value={sqrt} />
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" mb={1}>
          Вартість друку
        </Typography>
        <TextField
          size="small"
          label="грн."
          variant="outlined"
          value={printCost}
        />
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" mb={1}>
          Ламінація
        </Typography>
        <Autocomplete
          value={isLamination}
          size="small"
          options={['Так', 'Ні']}
          onChange={(_, newValue) => setIsLamination(newValue)}
          renderInput={params => (
            <TextField {...params} label="З ламінацією?" />
          )}
          // onChange={(_, newValue) => {setPrintingPrice(newValue.price);}}
        />
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" mb={1}>
          Вартість ламінації
        </Typography>
        <TextField size="small" label="грн." variant="outlined" />
      </Grid>
      <Grid item xs={1}>
        <Typography variant="body2" mb={1}>
          Вартість замовлення
        </Typography>
        <TextField size="small" label="грн." variant="outlined" />
      </Grid>
    </Grid>
  );
};
