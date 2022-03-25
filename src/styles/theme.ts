import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    'primary-yellow': '#FFBA08',
    gray: {
      heading: '#47585B',
      info: '999999',
    },
    white: {
      heading: '#F5F8FA',
      info: '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
});
