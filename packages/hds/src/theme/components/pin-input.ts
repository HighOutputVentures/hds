import { StyleConfig } from '@chakra-ui/react';
import { applyOpacity } from './_utils';

export const PinInput: StyleConfig = {
  baseStyle: {
    outline: 'none',
  },
  variants: {
    outline({ theme, colorScheme }) {
      return {
        color: 'primary.700',
        border: '1px',
        borderColor: 'neutral.500',
        fontSize: '44px',
        fontWeight: 'bold',
        lineHeight: '48px',
        letterSpacing: '-0.015em',
        textAlign: 'center',
        boxShadow: `0px 1px 2px ${applyOpacity(theme.colors.gray?.[900], 5)}`,

        _placeholder: {
          color: 'neutral.500',
        },
        _hover: {
          borderColor: 'neutral.500',
        },
        _focus: {
          borderColor: `${colorScheme}.700`,
          boxShadow:
            `0px 4px 8px -2px ${applyOpacity(theme.colors.gray?.[900], 10)},` +
            `0px 2px 4px -2px ${applyOpacity(theme.colors.gray?.[900], 6)}`,
        },
        _disabled: {
          color: 'neutral.200',
          borderColor: 'neutral.200',
        },
        _invalid: {
          color: 'error.700',
          borderColor: 'error.700',
          _focus: {
            borderColor: 'error.700',
          },
        },
      };
    },
  },
  sizes: {
    sm: {
      w: '64px',
      h: '64px',
      px: '8px',
      py: '8px',
      rounded: '8px',
    },
    md: {
      w: '80px',
      h: '80px',
      px: '8px',
      py: '16px',
      rounded: '8px',
    },
    lg: {
      w: '96px',
      h: '96px',
      px: '8px',
      py: '24px',
      rounded: '8px',
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'outline',
    colorScheme: 'primary',
  },
};
