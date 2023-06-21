import { ChakraProvider, ChakraProviderProps, extendTheme } from '@chakra-ui/react';
import * as React from 'react';
import { theme } from '../theme';
import { InterFont } from './Fonts';

export interface ThemeProviderProps extends ChakraProviderProps {}

/** @deprecated */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <ChakraProvider theme={extendTheme(props.theme ?? {}, theme)}>
      <InterFont />

      {children}
    </ChakraProvider>
  );
};
