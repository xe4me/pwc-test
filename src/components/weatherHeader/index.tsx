import { Grid, Typography } from '@mui/material';
import { Spacing } from 'constants/spacing';
import { envs } from 'constants/envs';
import { Forecast } from 'modules/weather/types';
import { formatTodayDate } from './utils';
import * as Styled from './styles';

interface Props {
  forecast: Forecast;
  city: string;
}
export function WeatherHeader({ forecast, city }: Props) {
  return (
    <>
      <Typography
        sx={{ fontWeight: 'bold' }}
        variant="h2"
        component="h2"
        gutterBottom
      >
        {city}
      </Typography>
      <Typography
        variant="h6"
        color="gray"
        component="h3"
        sx={{ fontWeight: 'bold' }}
        gutterBottom
      >
        {formatTodayDate()}
      </Typography>
      <Typography
        sx={{ fontWeight: 'bold' }}
        variant="h6"
        color="gray"
        component="h3"
        gutterBottom
      >
        Overcast
      </Typography>

      <Grid container spacing={Spacing.xs}>
        <Grid item xs={6} container justifyContent="flex-start">
          <Styled.Icon
            src={`${envs.iconsBaseUrl}/${forecast.weather.icon}.png`}
            alt="Today's weather image"
          />
          <Styled.Temp>
            <Typography variant="h2" component="span" gutterBottom>
              {forecast.temp}
            </Typography>
            <Typography color="gray" variant="h5" component="span">
              &#8451;
            </Typography>
          </Styled.Temp>
        </Grid>
        <Grid item xs={6}>
          <table>
            <tbody>
              <tr>
                <td>
                  <Typography color="gray" variant="h5" component="span">
                    Precipitation:{' '}
                  </Typography>
                  <Typography variant="h5" component="span">
                    {forecast.precip}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography color="gray" variant="h5" component="span">
                    Humidity:{' '}
                  </Typography>
                  <Typography variant="h5" component="span">
                    {forecast.dewpt}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography color="gray" variant="h5" component="span">
                    Wind:{' '}
                  </Typography>
                  <Typography variant="h5" component="span">
                    {forecast.wind_spd} kph {forecast.wind_cdir}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography color="gray" variant="h5" component="span">
                    Pollen Count:{' '}
                  </Typography>
                  <Typography variant="h5" component="span">
                    {forecast.temp}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>
    </>
  );
}
