import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function valueLabelFormat(value) {
  const units = ['Party Beaver'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 10 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 10;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
  return 1 * value;
}

export default function ControlSlide() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        {/* Total: {valueLabelFormat(calculateValue(value))} */}
      </Typography>
      <Slider
        value={value}
        min={1}
        step={1}
        max={10}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
