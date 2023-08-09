import { extendTheme } from '@chakra-ui/react';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';
import { styles } from './styles';
import { textStyles } from './textStyles';

export const theme = extendTheme({
  breakpoints,
  colors,
  components,
  config,
  fonts,
  styles,
  textStyles,
});
