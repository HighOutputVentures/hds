import { extendTheme } from '@chakra-ui/react';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fontSizes } from './fontSizes';
import { fonts } from './fonts';
import { styles } from './styles';
import { textStyles } from './textStyles';
import { zIndices } from './zIndices';

export const theme = extendTheme({
  config,
  styles,
  colors,
  breakpoints,
  fonts,
  components,
  fontSizes,
  textStyles,
  zIndices,
});
