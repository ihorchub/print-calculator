import { Grid, TextField, Autocomplete, Button } from '@mui/material';
import { useState, useEffect } from 'react';

export const OneElement = ({
  printingPrice,
  laminationPrice,
  setPrintSquare,
  setPrintAmount,
  setLaminationSquare,
  setLaminationAmount,
  setOrderAmount,
  fileNumber,
  rowNumber,
  setFileIndex,
  linesNumber,
}) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [count, setCount] = useState(0);
  const [sqrt, setSqrt] = useState('0');
  const [printCost, setPrintCost] = useState('0');
  const [isLamination, setIsLamination] = useState('Ні');
  const [laminationCost, setLaminationCost] = useState('0');
  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    const itemSqrt = (width * height * count) / 1000000;
    setSqrt(
      itemSqrt.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
    setPrintSquare(prev => ({
      ...prev,
      ...{ [fileNumber]: itemSqrt },
    }));

    const calculatePrintCost = itemSqrt * printingPrice;
    setPrintCost(
      calculatePrintCost.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    );
    setPrintAmount(prev => ({
      ...prev,
      ...{ [fileNumber]: calculatePrintCost },
    }));

    const calculateLamination = itemSqrt * laminationPrice;
    if (isLamination === 'Так') {
      setLaminationCost(
        calculateLamination.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
      setOrderPrice(
        (calculatePrintCost + calculateLamination).toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
      setLaminationSquare(prev => ({
        ...prev,
        ...{ [fileNumber]: itemSqrt },
      }));
      setLaminationAmount(prev => ({
        ...prev,
        ...{ [fileNumber]: calculateLamination },
      }));
      setOrderAmount(prev => ({
        ...prev,
        ...{ [fileNumber]: calculatePrintCost + calculateLamination },
      }));
    } else {
      setLaminationCost('0');
      setOrderPrice(
        calculatePrintCost.toLocaleString(undefined, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      );
      setLaminationSquare(prev => ({
        ...prev,
        ...{ [fileNumber]: 0 },
      }));
      setLaminationAmount(prev => ({
        ...prev,
        ...{ [fileNumber]: 0 },
      }));
      setOrderAmount(prev => ({
        ...prev,
        ...{ [fileNumber]: calculatePrintCost },
      }));
    }
  }, [
    count,
    fileNumber,
    height,
    isLamination,
    laminationCost,
    laminationPrice,
    printCost,
    printingPrice,
    setLaminationAmount,
    setLaminationSquare,
    setOrderAmount,
    setPrintAmount,
    setPrintSquare,
    sqrt,
    width,
  ]);

  return (
    <Grid container spacing={2} columns={18} className="itemRow">
      <Grid item xs={1}>
        <TextField
          size="small"
          label="n"
          variant="outlined"
          value={rowNumber}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          size="small"
          label="мм"
          variant="outlined"
          value={width}
          onChange={e => {
            setWidth(Number(e.target.value));
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          size="small"
          label="мм"
          variant="outlined"
          value={height}
          onChange={e => {
            setHeight(Number(e.target.value));
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          size="small"
          label="шт"
          variant="outlined"
          value={count}
          onChange={e => {
            setCount(Number(e.target.value));
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField size="small" label="м.кв." variant="outlined" value={sqrt} />
      </Grid>
      <Grid item xs={2}>
        <TextField
          size="small"
          label="грн."
          variant="outlined"
          value={printCost}
        />
      </Grid>
      <Grid item xs={2}>
        <Autocomplete
          disabled={laminationPrice === 0}
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
      <Grid item xs={2}>
        <TextField
          disabled={isLamination === 'Ні'}
          size="small"
          label="грн."
          variant="outlined"
          value={laminationCost}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          size="small"
          label="грн."
          variant="outlined"
          value={orderPrice}
        />
      </Grid>
      <Grid item xs={1}>
        <Button
          disabled={linesNumber === 1}
          size="medium"
          variant="outlined"
          sx={{
            margin: '0',
            fontSize: '28px',
            lineHeight: '1',
            color: 'orange',
            borderColor: 'orange',
            ':hover': { color: 'orangered', borderColor: 'orangered' },
          }}
          onClick={() => {
            setFileIndex(prev => prev.filter(value => value !== fileNumber));
            setPrintAmount(prev => ({
              ...prev,
              ...{ [fileNumber]: 0 },
            }));
            setLaminationAmount(prev => ({
              ...prev,
              ...{ [fileNumber]: 0 },
            }));
            setOrderAmount(prev => ({
              ...prev,
              ...{ [fileNumber]: 0 },
            }));
          }}
        >
          X
        </Button>
      </Grid>
    </Grid>
  );
};
