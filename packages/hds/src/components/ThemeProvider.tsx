import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import { extendTheme } from '../utils/theme.utils';
import Fonts from './Fonts';

export interface ThemeProviderProps extends ChakraProviderProps {}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <ChakraProvider {...props} theme={extendTheme(props.theme)}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};

export default ThemeProvider;
