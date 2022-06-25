import { createTheme, responsiveFontSizes } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    pxToRem: (size: number) => string;
  }
  interface ThemeOptions {
    pxToRem?: (size: number) => string;
  }
}

const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

/*
 * responsiveFontSizes
 * Adding this to the Mui theme will allow for responsive fonts across different screen sizes
 * */
const theme = responsiveFontSizes(
  createTheme({
    pxToRem: (size: number) => `${(size / htmlFontSize) * coef}rem`,
  })
);
export default theme;
