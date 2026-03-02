import { createTheme } from '@mui/material/styles';
import VT323Regular from './font/VT323-Regular.ttf';

const vt323 = {
  fontFamily: 'VT323',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('VT323'),
    local('VT323-Regular'),
    url(${VT323Regular}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: ['"Open Sans"', 'VT323', 'Roboto'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [vt323],
      },
    },
  },
});

export default theme;
