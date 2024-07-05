// src/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    blue: {
      500: '#1DA1F2', // Twitter-like blue color
    },
    teal: {
      500: '#1ABC9C',
    },
  },
});

export default theme;
