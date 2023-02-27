import { ChakraBaseProvider, ChakraProviderProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import { extendTheme } from '../utils/theme.utils';
import Fonts from './Fonts';

export interface ThemeProviderProps extends ChakraProviderProps {}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <ChakraBaseProvider {...props} theme={extendTheme(props.theme)}>
      <Fonts />
      {children}
    </ChakraBaseProvider>
  );
};

export default ThemeProvider;
