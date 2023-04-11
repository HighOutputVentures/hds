import { extendTheme as chakraExtendTheme } from '@chakra-ui/react';
import defaultTheme from '../theme';

/**
 * @example
 * extendTheme({ ... }, withButton(), withAvatar(), ...);
 */
export default function extendTheme(...customTheme: Record<string, any>[]) {
  return chakraExtendTheme(defaultTheme, ...customTheme);
}
