import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testUtils/renderWithProviders';
import { axe } from 'jest-axe';
import { createMockWeatherApiResponse } from 'testUtils/createMockWeatherApiResponse';
import { WeatherHeader } from './index';
import { formatTodayDate } from './utils';

const renderComponent = () => {
  const data = createMockWeatherApiResponse('Sydney');
  return renderWithProviders(
    <WeatherHeader city={data.city_name} forecast={data.data[0]} />
  );
};
describe('<WeatherHeader>', () => {
  describe('Snapshot and accessibility', () => {
    it('should match with the snapshot', () => {
      const { baseElement } = renderComponent();
      expect(baseElement).toMatchSnapshot();
    });
    it('should pass accessibility tests', async () => {
      const html = renderComponent();
      expect(await axe(html.container)).toHaveNoViolations();
    });
  });
  describe('Visible Elements', () => {
    it('should render the given city', () => {
      renderComponent();
      expect(screen.queryByText('Sydney')).toBeInTheDocument();
    });
    it('should render formatted today', () => {
      renderComponent();
      expect(screen.queryByText(formatTodayDate())).toBeInTheDocument();
    });
  });
});
