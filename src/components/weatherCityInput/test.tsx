import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'testUtils/renderWithProviders';
import { axe } from 'jest-axe';
import { WeatherCityInput } from './index';

const renderComponent = (onUnitChangeSpy: any = jest.fn()) => renderWithProviders(
    <WeatherCityInput city="Sydney" onChange={onUnitChangeSpy} />
  );
describe('<WeatherCityInput>', () => {
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
    it('should have a label role as City input', () => {
      renderComponent();
      expect(screen.queryByLabelText('City input')).toBeInTheDocument();
    });
    it('should have a button with label role as Search', () => {
      renderComponent();
      expect(screen.queryByLabelText('Search button')).toBeInTheDocument();
    });
    it('should have a label as City', () => {
      renderComponent();
      expect(screen.queryByText('City')).toBeInTheDocument();
    });
    it('should render the given city ', () => {
      renderComponent();
      expect(screen.queryByDisplayValue('Sydney')).toBeInTheDocument();
    });
  });
  describe('City input behaviours', () => {
    it('should have a label role as City input', async () => {
      renderComponent();
      expect(screen.queryByLabelText('City input')).toBeInTheDocument();
      await fireEvent.change(screen.getByLabelText('City input'), {
        target: { value: 'hello' },
      });
      expect(screen.queryByDisplayValue('hello')).toBeInTheDocument();
    });
    it('should fire a change event after search button is clicked', async () => {
      const onChangeSpy = jest.fn();
      renderComponent(onChangeSpy);
      expect(screen.queryByLabelText('City input')).toBeInTheDocument();
      await fireEvent.change(screen.getByLabelText('City input'), {
        target: { value: 'hello' },
      });
      expect(onChangeSpy).not.toHaveBeenCalled();
      await fireEvent.click(screen.getByLabelText('Search button'));
      expect(onChangeSpy).toHaveBeenCalledWith('hello');
    });
  });
});
