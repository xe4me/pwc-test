import { styled } from '@mui/material';

export const Icon = styled('img')(({ theme }) => ({
  width: `${theme.pxToRem(100)}`,
  height: `${theme.pxToRem(100)}`,
}));
export const Temp = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-start',
}));
