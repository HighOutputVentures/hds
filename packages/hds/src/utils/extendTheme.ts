import { extendTheme as chakraExtendTheme } from '@chakra-ui/react';
import defaultTheme from '../theme';

type Dictionary = Record<string, any>;

/**
 * @example
 * extendTheme({ ... }, withButton(), withAvatar(), ...);
 */
export const extendTheme = (customTheme: Dictionary | Dictionary[] = []) => {
  const themes = Array.isArray(customTheme)
    ? [defaultTheme, ...customTheme]
    : [defaultTheme, customTheme];

  return chakraExtendTheme(...themes);
};
