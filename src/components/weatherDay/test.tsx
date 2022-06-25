import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testUtils/renderWithProviders';
import { axe } from 'jest-axe';
import { formatWeekdayName } from 'utils/formatWeekdayName';
import { WeatherDay } from './index';

const renderComponent = () => renderWithProviders(
    <WeatherDay datetime={new Date().toISOString()} />
  );
describe('<WeatherDay>', () => {
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
    it('should render the formatted given date', () => {
      renderComponent();
      const formattedDate = formatWeekdayName(new Date());
      expect(screen.queryByText(formattedDate)).toBeInTheDocument();
    });
  });
});
