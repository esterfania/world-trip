import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      '300': '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.600',
      },
    },
  },
});
