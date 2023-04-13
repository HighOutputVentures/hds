import { ChakraProvider, ChakraProviderProps, extendTheme } from '@chakra-ui/react';
import * as React from 'react';
import Fonts from './Fonts';
import hdsTheme from './theme';

export interface ThemeProviderProps extends ChakraProviderProps {}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme = {}, ...props }) => {
  return (
    <ChakraProvider theme={extendTheme(hdsTheme, theme)} {...props}>
      <Fonts />

      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
