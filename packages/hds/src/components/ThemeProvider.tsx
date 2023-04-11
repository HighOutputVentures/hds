import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import * as React from 'react';
import extendTheme from '../utils/extendTheme';
import Fonts from './Fonts';

export interface ThemeProviderProps extends ChakraProviderProps {}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme, ...props }) => {
  return (
    <ChakraProvider theme={extendTheme(theme ?? {})} {...props}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
