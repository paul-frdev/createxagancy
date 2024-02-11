'use client';

import { createTheme } from '@mui/material';

declare module '@mui/system' {
  interface Theme {
    status: {
      warning: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    background: {
      paper: 'transparent',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
  },
  components: {
    MuiTextField: {},
  },
});
