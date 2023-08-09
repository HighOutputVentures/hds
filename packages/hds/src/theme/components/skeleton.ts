import type { StyleConfig } from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/react';

const $startColor = cssVar('skeleton-start-color');
const $endColor = cssVar('skeleton-end-color');

export const Skeleton: StyleConfig = {
  baseStyle({ theme }) {
    return {
      rounded: 'md',

      _light: {
        [$startColor.variable]: theme.colors.neutral?.[100],
        [$endColor.variable]: theme.colors.neutral?.[300],
      },

      _dark: {
        [$startColor.variable]: theme.colors.neutral?.[800],
        [$endColor.variable]: theme.colors.neutral?.[600],
      },
    };
  },
};
