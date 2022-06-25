import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Weather } from './modules/weather';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Weather />
    </ThemeProvider>
  );
}

export default App;
