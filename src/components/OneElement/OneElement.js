import { Grid, TextField, Autocomplete } from '@mui/material';
import { useState, useEffect } from 'react';

export const OneElement = ({ printingPrice, laminationPrice }) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [count, setCount] = useState('');
  const [sqrt, setSqrt] = useState('');
  const [printCost, setPrintCost] = useState('');
  const [isLamination, setIsLamination] = useState('Ні');
  const [laminationCost, setLaminationCost] = useState('');
  const [orderPrice, setOrderPrice] = useState('');

  useEffect(() => {
    const itemSqrt =
      (Number(width) / 1000) * (Number(height) / 1000) * Number(count);
    const calculatePrintCost = sqrt * printingPrice;
    const calculateLamination = sqrt * laminationPrice;

    setSqrt(itemSqrt.toFixed(2));
    setPrintCost(calculatePrintCost.toFixed(0));

    if (isLamination === 'Так') {
      setLaminationCost(calculateLamination.toFixed(0));
    } else {
      setLaminationCost('0');
    }

    setOrderPrice(Number(printCost) + Number(laminationCost));
  }, [
    width,
    height,
    count,
    sqrt,
    printingPrice,
    laminationPrice,
    printCost,
    laminationCost,
    isLamination,
  ]);

  return (
    <Grid container spacing={2} columns={8}>
      <Grid item xs={1}>
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
        <TextField size="small" label="м.кв." variant="outlined" value={sqrt} />
      </Grid>
      <Grid item xs={1}>
        <TextField
          size="small"
          label="грн."
          variant="outlined"
          value={printCost}
        />
      </Grid>
      <Grid item xs={1}>
        <Autocomplete
          disableClearable
          value={isLamination}
          size="small"
          options={['Так', 'Ні']}
          onChange={(_, newValue) => setIsLamination(newValue)}
          renderInput={params => (
            <TextField {...params} label="З ламінацією?" />
          )}
        />
      </Grid>
      <Grid item xs={1}>
        <TextField
          size="small"
          label="грн."
          variant="outlined"
          value={laminationCost}
        />
      </Grid>
      <Grid item xs={1}>
        <TextField
          size="small"
          label="грн."
          variant="outlined"
          value={orderPrice}
        />
      </Grid>
    </Grid>
  );
};
