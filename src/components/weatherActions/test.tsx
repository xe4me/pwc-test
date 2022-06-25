import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testUtils/renderWithProviders';
import { Unit } from 'modules/weather/types';
import { axe } from 'jest-axe';
import { WeatherActions } from './index';

const renderComponent = () => {
  const onCityChangeSpy = jest.fn();
  const onUnitChangeSpy = jest.fn();
  return renderWithProviders(
    <WeatherActions
      unit={Unit.Metric}
      city="Sydney"
      onCityChange={onCityChangeSpy}
      onUnitChange={onUnitChangeSpy}
    />
  );
};
describe('<WeatherActions>', () => {
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
    it('should have the page title as Adjust your search', () => {
      renderComponent();
      expect(screen.queryByText('Adjust your search')).toBeInTheDocument();
    });
    it('should render the weather switch component', () => {
      renderComponent();
      expect(screen.queryByTestId('weather-unit-switch')).toBeInTheDocument();
    });
    it('should render the weather city input', () => {
      renderComponent();
      expect(screen.queryByTestId('weather-city-input')).toBeInTheDocument();
    });
  });
});
