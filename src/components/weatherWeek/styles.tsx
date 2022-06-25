import { styled } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

export const Icon = styled('img')(({ theme }) => ({
  width: `${theme.pxToRem(100)}`,
  height: `${theme.pxToRem(100)}`,
}));
export const TableTextRow = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  minWidth: `${theme.pxToRem(100)}`,
}));
export const Typography = styled(MuiTypography)({
  display: 'flex',
  alignItems: 'flex-start',
});
export const Circle = styled('span')(() => ({
  lineHeight: 1,
  fontSize: '14px', // @TODO Milad :  should come from a constant
}));
