import type { StyleConfig } from '@chakra-ui/react';
import { isGrayish } from './_utils';

export const Spinner: StyleConfig = {
  baseStyle({ colorScheme }) {
    const useGrayishKey = isGrayish(colorScheme);

    return {
      color: `${colorScheme}.700`,

      ...(useGrayishKey && {
        color: 'gray.300',
      }),
    };
  },
  defaultProps: {
    colorScheme: 'primary',
  },
};
