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
import { headingTitles, rowTitles } from 'mocks/renderTitles';
import { OneElement } from 'components/OneElement/OneElement';

export const App = () => {
  const [quality, setQuality] = useState([]);
  const [qualityValue, setQualityValue] = useState('');
  const [printingPrice, setPrintingPrice] = useState(0);
  const [laminationPrice, setLaminationPrice] = useState(0);
  const [numberOfFiles, setNumberOfFiles] = useState([1]);
  const [printAmount, setPrintAmount] = useState({ 0: 0 });
  const [laminationAmount, setLaminationAmount] = useState({ 0: 0 });
  const [orderAmount, setOrderAmount] = useState({ 0: 0 });

  const countResult = data => {
    const values = Object.values(data);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

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
        gap={'10px'}
      >
        {numberOfFiles.map(item => (
          <OneElement
            key={item}
            printingPrice={printingPrice}
            laminationPrice={laminationPrice}
            setPrintAmount={setPrintAmount}
            setLaminationAmount={setLaminationAmount}
            setOrderAmount={setOrderAmount}
            fileNumber={item}
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
          onClick={() => setNumberOfFiles(prev => [...prev, prev.length + 1])}
        >
          +рядок
        </Button>
      </Box>
      <Grid item container spacing={2} columns={12} mt={2}>
        <Grid item xs={2}>
          <Typography variant="subtitle2" mb={1}>
            Всього друк, грн
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2" mb={1}>
            Всього ламінація, грн
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2" mb={1}>
            Всього замовлення, грн
          </Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={2} columns={12}>
        <Grid item xs={2}>
          <TextField
            size="small"
            label="грн."
            variant="outlined"
            value={countResult(printAmount)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            size="small"
            label="грн."
            variant="outlined"
            value={countResult(laminationAmount)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            size="small"
            label="грн."
            variant="outlined"
            value={countResult(orderAmount)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

// const Wrapper = styled('div')(() => ({
//   padding: '0 16px',
// }));
