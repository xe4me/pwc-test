import React from 'react';
import { Forecast } from 'modules/weather/types';
import Grid from '@mui/material/Grid';
import { envs } from 'constants/envs';
import { WeatherDay } from '../weatherDay';
import * as Styled from './styles';

interface Props {
  daysForecasts: Forecast[];
}
export function WeatherWeek({ daysForecasts }: Props) {
  return (
    <Grid container direction="row">
      {daysForecasts.map((forecast) => (
        <Grid
          item
          xs={6}
          md
          key={forecast.datetime}
          container
          flexDirection="column"
          alignItems="center"
        >
          <WeatherDay datetime={forecast.datetime} />
          <Styled.Icon
            src={`${envs.iconsBaseUrl}/${forecast.weather.icon}.png`}
            alt={forecast.weather.description}
          />
          <table>
            <tbody>
              <tr>
                <td>
                  <Styled.TableTextRow>
                    <Styled.Typography
                      color="error.dark"
                      variant="h6"
                      {...{ component: 'h4' }}
                    >
                      <span>{forecast.high_temp}</span>
                      <Styled.Circle>&#x25CB;</Styled.Circle>
                    </Styled.Typography>{' '}
                    <Styled.Typography
                      color="primary.main"
                      variant="h6"
                      {...{ component: 'h4' }}
                    >
                      <span>{forecast.low_temp}</span>
                      <Styled.Circle>&#x25CB;</Styled.Circle>
                    </Styled.Typography>
                  </Styled.TableTextRow>
                </td>
              </tr>
              <tr>
                <td>
                  <Styled.Typography
                    variant="subtitle2"
                    {...{ component: 'h4' }}
                  >
                    <Styled.TableTextRow>
                      <span>Pollen</span>
                      <span>{forecast.temp}</span>
                    </Styled.TableTextRow>
                  </Styled.Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
      ))}
    </Grid>
  );
}
