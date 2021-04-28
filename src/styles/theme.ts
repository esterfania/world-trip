import { extendTheme, DeepPartial, ThemeConfig } from '@chakra-ui/react';
const config: DeepPartial<ThemeConfig> = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
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
    global: (props) => ({
      'html, body': {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.100',
        color: props.colorMode === 'dark' ? 'gray.200' : 'gray.600',
      },
    }),
  },
});
