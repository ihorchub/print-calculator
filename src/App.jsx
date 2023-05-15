import { useState } from 'react';
// import { styled } from '@mui/material';
import {
  Grid,
  Autocomplete,
  TextField,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { printingPriceOptions, laminationCost } from 'mocks/printingPrice';
import {
  headingTitles,
  rowTitles,
  resultTitles,
  resultFields,
  // discountTitles,
} from 'mocks/renderTitles';
import { OneElement } from 'components/OneElement/OneElement';

export const App = () => {
  const [quality, setQuality] = useState([]);
  const [qualityValue, setQualityValue] = useState('');
  const [printingPrice, setPrintingPrice] = useState(0);
  const [laminationPrice, setLaminationPrice] = useState(0);
  const [fileIndex, setFileIndex] = useState([1]);
  const [printSquare, setPrintSquare] = useState({ 0: 0 });
  const [printAmount, setPrintAmount] = useState({ 0: 0 });
  const [laminationSquare, setLaminationSquare] = useState({ 0: 0 });
  const [laminationAmount, setLaminationAmount] = useState({ 0: 0 });
  const [orderAmount, setOrderAmount] = useState({ 0: 0 });

  const resultArr = [
    printSquare,
    printAmount,
    laminationSquare,
    laminationAmount,
    orderAmount,
  ];

  // const discount = [
  //   { value: 100, discount: '10%', discountIndex: 0.9 },
  //   { value: 50, discount: '7%', discountIndex: 0.93 },
  //   { value: 25, discount: '5%', discountIndex: 0.95 },
  //   { value: 10, discount: '3%', discountIndex: 0.97 },
  // ];

  const countResult = (data, mark) => {
    const values = Object.values(data);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    if (mark) {
      return total.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else {
      return total.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    }
  };

  // const printSqrt = countResult(printSquare, true);
  // const printPrice = countResult(printAmount, false);
  // const LaminateSqrt = countResult(laminationSquare, true);

  // const printDiscount = () => {
  //   for (const item of discount) {
  //     if (printSqrt > item.value) {
  //       return item.discount;
  //     }
  //   }
  // };

  // const discountPrintPrice = () => {
  //   for (const item of discount) {
  //     if (printSqrt > item.value) {
  //       const newPrice = printPrice * item.discountIndex;
  //       return newPrice.toLocaleString(undefined, {
  //         minimumFractionDigits: 0,
  //         maximumFractionDigits: 0,
  //       });
  //     }
  //   }
  // };

  return (
    <Grid container p="32px" gap="16px">
      <Grid item container spacing={2}>
        {headingTitles.map(({ width, text }) => (
          <Grid key={text} item xs={width}>
            <Typography variant="subtitle2">{text}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={4}>
          <Autocomplete
            disableClearable
            size="small"
            options={printingPriceOptions}
            getOptionLabel={option => option.material}
            renderInput={params => (
              <TextField {...params} label="Обраний матеріал" />
            )}
            onChange={(_, newValue) => {
              setQuality(newValue.quality);
              setQualityValue('');
              setPrintingPrice(0);
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Autocomplete
            disableClearable
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
          <Autocomplete
            disableClearable
            size="small"
            options={laminationCost}
            getOptionLabel={option => option.label}
            defaultValue={laminationCost[0]}
            renderInput={params => <TextField {...params} label="Ламінація" />}
            onChange={(_, newValue) => {
              setLaminationPrice(newValue.price);
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
        <Grid item xs={2}>
          <TextField
            fullWidth
            size="small"
            label="грн./м.кв."
            variant="outlined"
            value={laminationPrice}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Typography>
          Введіть будь ласка параметри зображення для друку
        </Typography>
      </Grid>
      <Grid item container spacing={2} columns={18}>
        {rowTitles.map(({ width, text }) => (
          <Grid key={text} item xs={width}>
            <Typography variant="subtitle2" mb={1}>
              {text}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'end'}
        gap={'15px'}
      >
        {fileIndex.map((item, idx) => (
          <OneElement
            key={item}
            printingPrice={printingPrice}
            laminationPrice={laminationPrice}
            setPrintSquare={setPrintSquare}
            setPrintAmount={setPrintAmount}
            setLaminationSquare={setLaminationSquare}
            setLaminationAmount={setLaminationAmount}
            setOrderAmount={setOrderAmount}
            fileNumber={item}
            rowNumber={idx + 1}
            setFileIndex={setFileIndex}
            linesNumber={fileIndex.length}
          />
        ))}

        <Button
          size="medium"
          variant="outlined"
          sx={{
            width: '15%',
            fontSize: '22px',
            lineHeight: '28px',
            color: 'lightgreen',
            borderColor: 'lightgreen',
            ':hover': { color: 'green', borderColor: 'green' },
          }}
          onClick={() =>
            setFileIndex(prev => [...prev, prev[prev.length - 1] + 1])
          }
        >
          +рядок
        </Button>
      </Box>
      <Grid item container spacing={2} columns={12} mt={2}>
        {resultTitles.map(({ width, text }) => (
          <Grid key={text} item xs={width}>
            <Typography variant="subtitle2" mb={1}>
              {text}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item container spacing={2} columns={12}>
        {resultFields.map(({ width, label, mark }, idx) => (
          <Grid key={idx} item xs={width}>
            <TextField
              size="small"
              label={label}
              variant="outlined"
              value={countResult(resultArr[idx], mark)}
            />
          </Grid>
        ))}
      </Grid>
      {/* {printSqrt > 10 && (
        <>
          <Grid item container spacing={2} columns={12}>
            {discountTitles.map(({ width, label }) => (
              <Grid key={label} item xs={width}>
                <Typography variant="subtitle2" mb={1}>
                  {label}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item container spacing={2} columns={12}>
            <Grid item xs={2}>
              <TextField
                size="small"
                label="%"
                variant="outlined"
                value={printDiscount()}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                label="грн."
                variant="outlined"
                value={discountPrintPrice() || '0'}
              />
            </Grid>
          </Grid>
        </>
      )} */}
    </Grid>
  );
};

// const Wrapper = styled('div')(() => ({
//   padding: '0 16px',
// }));
