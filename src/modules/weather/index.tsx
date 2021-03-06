import { Suspense, useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { WeatherWeek } from 'components/weatherWeek';
import { WeatherHeader } from 'components/weatherHeader';
import { Spacing } from 'constants/spacing';
import { WeatherActions } from 'components/weatherActions';
import CircularProgress from '@mui/material/CircularProgress';
import * as Styled from './styles';
import { Unit } from './types';
import { useCurrentWeatherData } from './hooks';
import { DEFAULT_CITY } from './constants';

 const WeatherModule= ()=> {
  const [unit, setUnit] = useState<Unit>(Unit.Metric);
  const [city, setCity] = useState<string>(DEFAULT_CITY);
  const { data, error } = useCurrentWeatherData({ unit, city });
  if (error) return <div>failed to load</div>; // @TODO Milad Implement proper error handling
  return (
      <Styled.Container maxWidth="lg">
        <Paper elevation={3}>
          {data && (
            <Box p={Spacing.sm}>
              {data.data[0] && <WeatherHeader forecast={data.data[0]} city={data.city_name}/>}
              <Box mt={Spacing.md} mb={Spacing.md}>
                <Divider />
              </Box>
              <Box mt={Spacing.md} mb={Spacing.md}>
                <WeatherWeek daysForecasts={data.data} />
              </Box>
              <Box mt={Spacing.md} mb={Spacing.md}>
                <Divider />
              </Box>
              <WeatherActions
                unit={unit}
                onUnitChange={setUnit}
                city={city}
                onCityChange={setCity}
              />
            </Box>
          )}
        </Paper>
      </Styled.Container>
  );
}
export const Weather = ()=> (<>
  <Suspense fallback={
    <Styled.Progress>
      <CircularProgress
          role="progressbar"
          aria-label="Weather data is loading ..."
          color="secondary"
      />
    </Styled.Progress>
  }>
    <WeatherModule/>
  </Suspense>
</>)
