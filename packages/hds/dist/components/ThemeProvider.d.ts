import { ChakraProviderProps } from '@chakra-ui/react';
import { FC } from 'react';
import '../Fonts/fonts.css';
export interface ThemeProviderProps extends ChakraProviderProps {
}
declare const ThemeProvider: FC<ThemeProviderProps>;
export default ThemeProvider;
