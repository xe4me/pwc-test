import { createEndpoint } from './index';
import { envs } from '../../constants/envs';

describe('createEndpoint()', () => {
  it('should prepend the Base API to the given endpoint and also the api key to the end', () => {
    expect(createEndpoint('/hello')).toBe(
      `${envs.weatherApiBaseUrl}/hello&key=068b1d8c81cc482da8bffbb9a0b07b33`
    );
  });
});
