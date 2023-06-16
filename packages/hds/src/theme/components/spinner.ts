import { StyleConfig } from '@chakra-ui/react';

export const Spinner: StyleConfig = {
  baseStyle({ colorScheme }) {
    return {
      color: `${colorScheme}.700`,
    };
  },
  defaultProps: {
    colorScheme: 'primary',
  },
};
