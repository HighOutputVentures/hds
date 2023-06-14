import { cssVar, StyleConfig } from '@chakra-ui/react';
import { colors } from '../colors';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

export const Skeleton: StyleConfig = {
  baseStyle: {
    rounded: 'md',

    _light: {
      [$startColor.variable]: colors.neutrals['100'],
      [$endColor.variable]: colors.neutrals['300'],
    },
    _dark: {
      [$startColor.variable]: colors.neutrals['800'],
      [$endColor.variable]: colors.neutrals['600'],
    },
  },
};
