import { styled } from '@mui/material/styles';

import MuiPaper from '@mui/material/Paper';
import { Spacing } from 'constants/spacing';

export const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: `${theme.spacing(Spacing.md)}`,
  height: `${theme.pxToRem(100)}`,
}));
