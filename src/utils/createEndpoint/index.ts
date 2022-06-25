import { envs } from 'constants/envs';

/*
 * @Function createEndpoint
 * This function will add the BASE URL and the authentication key to the given endpoint
 * Note that this function is very limited and does not consider whether the endpoint has "$" or not
 * */
export const createEndpoint = (endpoint: string) =>
  `${envs.weatherApiBaseUrl}${endpoint}&key=${envs.authKey}`;
