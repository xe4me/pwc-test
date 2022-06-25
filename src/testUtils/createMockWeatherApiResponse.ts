export const createMockWeatherApiResponse = (city_name: string) => ({
    city_name,
    data: [
      {
        wind_cdir: 'W',
        pres: 1014,
        high_temp: 20.2,
        wind_gust_spd: 5.9,
        wind_spd: 3.1,
        dewpt: 5.9,
        weather: {
          icon: 'c02d',
          code: 801,
          description: 'Few clouds',
        },
        wind_dir: 266,
        precip: 0,
        low_temp: 9.3,
        max_temp: 20.2,
        datetime: '2022-06-25',
        temp: 14.9,
        min_temp: 9.9,
      },
    ],
  });
