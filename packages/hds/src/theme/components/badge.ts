import { StyleConfig } from '@chakra-ui/react';

export const Badge: StyleConfig = {
  baseStyle() {
    return {
      rounded: '16px',
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '14px',
      letterSpacing: '0.02em',
      textTransform: 'none',
    };
  },
  variants: {
    subtle({ colorScheme }) {
      return {
        color: `${colorScheme}.700`,
        bgColor: `${colorScheme}.50`,
      };
    },
  },
  sizes: {
    sm: {
      py: 0.5,
      px: 2,
    },
    md: {
      py: 0.5,
      px: 2.5,
    },
    lg: {
      py: 1,
      px: 3,
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'subtle',
    colorScheme: 'primary',
  },
};
