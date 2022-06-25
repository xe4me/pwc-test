import useSWR from 'swr';
import { createEndpoint } from 'utils/createEndpoint';
import { fetcher } from 'utils/fetcher';
import { CurrentWeatherApiResponse, Unit } from './types';

export const useCurrentWeatherData = ({
  unit,
  city,
}: {
  unit: Unit;
  city: string;
}) => {
  const { data, error } = useSWR<CurrentWeatherApiResponse | null>(
    createEndpoint(
      `/forecast/daily?city=${city}&country=australia&state=nsw&days=7&units=${unit}`
    ),
    fetcher,
    {}
  );
  return { data, error };
};
