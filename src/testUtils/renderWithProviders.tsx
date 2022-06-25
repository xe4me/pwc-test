import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';

export const renderWithProviders = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);
