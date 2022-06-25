import React from 'react';
import { Unit } from 'modules/weather/types';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import * as Styled from './styles';

interface Props {
  onChange: (unit: Unit) => void;
  unit: Unit;
}

export function WeatherUnitSwitch({ onChange, unit }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as Unit);
  };
  return (
    <Styled.Paper data-testid="weather-unit-switch">
      <FormControl>
        <FormLabel id="unit-radio-group">Unit</FormLabel>
        <RadioGroup
          data-testid="unit-radio-group"
          row
          aria-labelledby="unit-radio-group"
          name="unit-radio-group"
          value={unit}
          onChange={handleChange}
        >
          <FormControlLabel
            value={Unit.Scientific}
            control={<Radio />}
            label="Imperial"
          />
          <FormControlLabel
            value={Unit.Metric}
            control={<Radio />}
            label="Metric"
          />
        </RadioGroup>
      </FormControl>
    </Styled.Paper>
  );
}
