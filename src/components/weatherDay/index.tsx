import React from 'react';
import { formatWeekdayName } from 'utils/formatWeekdayName';
import { Typography } from '@mui/material';

interface Props {
  datetime: string;
}
export function WeatherDay({ datetime }: Props) {
  return (
    <>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 'bold' }}
        component="h4"
      >
        {formatWeekdayName(new Date(datetime))}
      </Typography>
    </>
  );
}
