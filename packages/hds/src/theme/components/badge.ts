import { StyleConfig } from '@chakra-ui/react';

export const Badge: StyleConfig = {
  baseStyle() {
    return {
      display: 'flex',
      alignItems: 'center',
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
        bg: `${colorScheme}.50`,
        color: `${colorScheme}.700`,

        '&[data-indicator]': {
          _before: {
            w: '6px',
            h: '6px',
            mr: '6px',
            bg: `${colorScheme}.500`,
            content: '""',
            rounded: 'full',
          },
        },
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
