import { styled } from '@mui/material/styles';

import MuiContainer from '@mui/material/Container';

export const Container = styled(MuiContainer)(({ theme }) => ({
  position: 'relative',
  minHeight: `${theme.pxToRem(600)}`,
}));

export const Progress = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
}));
