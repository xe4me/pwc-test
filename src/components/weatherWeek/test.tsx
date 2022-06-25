import React from 'react';
import { renderWithProviders } from 'testUtils/renderWithProviders';
import { axe } from 'jest-axe';
import { createMockWeatherApiResponse } from 'testUtils/createMockWeatherApiResponse';
import { WeatherWeek } from './index';

const renderComponent = () => renderWithProviders(
    <WeatherWeek daysForecasts={createMockWeatherApiResponse('Sydney').data} />
  );
describe('<WeatherWeek>', () => {
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
});
