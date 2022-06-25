import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'testUtils/renderWithProviders';
import { axe } from 'jest-axe';
import { Unit } from 'modules/weather/types';
import { WeatherUnitSwitch } from './index';

const renderComponent = (
  unit: Unit = Unit.Metric,
  onUnitChangeSpy: any = jest.fn()
) => renderWithProviders(
    <WeatherUnitSwitch unit={unit} onChange={onUnitChangeSpy} />
  );
describe('<WeatherUnitSwitch>', () => {
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
    it('should have a Unit label', () => {
      renderComponent();
      expect(screen.queryByText('Unit')).toBeInTheDocument();
    });
    it('should have a Imperial label', () => {
      renderComponent();
      expect(screen.queryByLabelText('Imperial')).toBeInTheDocument();
    });
    it('should have a Metric label', () => {
      renderComponent();
      expect(screen.queryByLabelText('Metric')).toBeInTheDocument();
    });
    it('should render two units ', () => {
      renderComponent();
      expect(screen.queryByDisplayValue(Unit.Metric)).toBeInTheDocument();
      expect(screen.queryByDisplayValue(Unit.Scientific)).toBeInTheDocument();
    });
  });
  describe('Unit switch behaviours', () => {
    it('Should have Metric as default value', async () => {
      renderComponent(Unit.Metric);
      const scientificInput: HTMLInputElement =
        screen.getByLabelText('Imperial');
      expect(scientificInput.checked).toBe(false);
      const metricInput: HTMLInputElement = screen.getByLabelText('Metric');
      expect(metricInput.checked).toBe(true);
    });
    it('Should change the unit to Imperial, after clicking on Imperial', async () => {
      renderComponent(Unit.Metric);
      const scientificInput: HTMLInputElement =
        screen.getByLabelText('Imperial');
      expect(scientificInput.checked).toBe(false);
      await fireEvent.change(scientificInput, {
        target: { checked: true },
      });
      expect(scientificInput.checked).toBe(true);
      const metricInput: HTMLInputElement = screen.getByLabelText('Metric');
      expect(metricInput.checked).toBe(false);
    });
  });
});
