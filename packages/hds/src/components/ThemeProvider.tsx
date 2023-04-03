import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { extendTheme } from '../utils/extendTheme';
import Fonts from './Fonts';

export interface ThemeProviderProps extends ChakraProviderProps {}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme, ...props }) => {
  return (
    <ChakraProvider theme={extendTheme(theme)} {...props}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
