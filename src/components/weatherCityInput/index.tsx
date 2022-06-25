import React, { useState } from 'react';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as Styled from './styles';

interface Props {
  onChange: (city: string) => void;
  city: string;
}
export function WeatherCityInput({ onChange, city }: Props) {
  const [internalOnlyCity, setInternalOnlyCity] = useState(city);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalOnlyCity(event.target.value);
  };
  return (
    <form
      onSubmit={() => onChange(internalOnlyCity)}
      data-testid="weather-city-input"
    >
      <Styled.Paper sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <FormControl>
          <FormLabel id="weather-city-input">City</FormLabel>
          <InputBase
            aria-labelledby="weather-city-input"
            value={internalOnlyCity}
            onChange={handleChange}
            placeholder="Enter a city in NSW"
            inputProps={{ 'aria-label': 'City input' }}
          />
        </FormControl>
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="Search button">
          <SearchIcon role="img" />
        </IconButton>
      </Styled.Paper>
    </form>
  );
}
