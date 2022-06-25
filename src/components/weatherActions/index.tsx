import React from 'react';
import { Unit } from 'modules/weather/types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Spacing } from 'constants/spacing';
import { WeatherUnitSwitch } from '../weatherUnitSwitch';
import { WeatherCityInput } from '../weatherCityInput';

interface Props {
  onCityChange: (city: string) => void;
  onUnitChange: (unit: Unit) => void;
  city: string;
  unit: Unit;
}
export function WeatherActions({
  onUnitChange,
  onCityChange,
  unit,
  city,
}: Props) {
  return (
    <Grid container spacing={Spacing.sm}>
      <Grid item xs={12}>
        <Typography variant="h5" color="gray">
          Adjust your search
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <WeatherUnitSwitch onChange={onUnitChange} unit={unit} />
      </Grid>
      <Grid item xs={12} md={6}>
        <WeatherCityInput onChange={onCityChange} city={city} />
      </Grid>
    </Grid>
  );
}
