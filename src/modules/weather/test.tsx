import React from 'react';
import { screen } from '@testing-library/react';
import { createMockWeatherApiResponse } from 'testUtils/createMockWeatherApiResponse';
import { renderWithProviders } from 'testUtils/renderWithProviders';
import { axe } from 'jest-axe';
import { Weather } from './index';
import * as useCurrentWeatherDataHook from './hooks';
import { CurrentWeatherApiResponse } from './types';

const mockWeatherHook = (
  data: CurrentWeatherApiResponse | null,
  error: any
) => {
  jest
    .spyOn(useCurrentWeatherDataHook, 'useCurrentWeatherData')
    .mockImplementation(() => ({
      data,
      error,
    }));
};

describe('<Weather>', () => {
  describe('Snapshot and accessibility', () => {
    it('should match with the snapshot', () => {
      const { baseElement } = renderWithProviders(<Weather />);
      expect(baseElement).toMatchSnapshot();
    });
    it('should pass accessibility tests', async () => {
      const html = renderWithProviders(<Weather />);
      expect(await axe(html.container)).toHaveNoViolations();
    });
  });
  describe('Data fetching behaviours', () => {
    describe('When api errors', () => {
      it('should render "failed to load"', () => {
        mockWeatherHook(null, 'Something went wrong');
        renderWithProviders(<Weather />);
        expect(screen.queryByText('failed to load')).toBeInTheDocument();
      });
    });
    describe('When api succeeds', () => {
      it('should NOT render "failed to load"', () => {
        mockWeatherHook(createMockWeatherApiResponse('Sydney'), null);
        renderWithProviders(<Weather />);
        expect(screen.queryByText('failed to load')).not.toBeInTheDocument();
      });
    });
  });
});
