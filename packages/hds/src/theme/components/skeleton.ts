import { cssVar, StyleConfig } from '@chakra-ui/react';
import { colors } from '../colors';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

export const Skeleton: StyleConfig = {
  baseStyle: {
    rounded: 'md',

    _light: {
      [$startColor.variable]: colors.neutral['100'],
      [$endColor.variable]: colors.neutral['300'],
    },
    _dark: {
      [$startColor.variable]: colors.neutral['800'],
      [$endColor.variable]: colors.neutral['600'],
    },
  },
};
