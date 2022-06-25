/*
 * @interface Forecast
 * This interface represents a day's weather attributes
 * More information about each field can be found here https://www.weatherbit.io/api/swaggerui/weather-api-v2#!/Daily32Historical32Weather32Data/get_history_daily_city_city_country_country
 * */
export interface Forecast {
  wind_cdir: string;
  pres: number;
  high_temp: number;
  wind_gust_spd: number;
  wind_spd: number;
  dewpt: number;
  weather: {
    icon: string;
    code: number;
    description: string;
  };
  wind_dir: number;
  precip: number;
  low_temp: number;
  max_temp: number;
  datetime: string;
  temp: number;
  min_temp: number;
}
/*
 * @interface CurrentWeatherApiResponse
 * This interfaces is a minimal version what the API actually returns, all the non-required fields are omitted for brevity
 * */
export interface CurrentWeatherApiResponse {
  city_name: string;
  data: Forecast[];
}

/*
 * @enum Unit
 * Two types of units, Metric and Scientific
 * */
export enum Unit {
  Metric = 'm',
  Scientific = 's',
}
