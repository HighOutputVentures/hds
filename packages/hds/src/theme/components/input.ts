import { MultiStyleConfig, cssVar } from '@chakra-ui/react';
import { applyOpacity } from './_utils';

const $shadow = cssVar('input-field-shadow');

export const Input: MultiStyleConfig = {
  parts: ['field', 'addon', 'element'],
  variants: {
    outline({ theme, colorScheme }) {
      return {
        addon: {
          bg: 'white',
          color: 'neutral.700',
          _hover: {
            bg: 'neutral.50',
          },
        },
        element: {
          color: 'neutral.500',
          pointerEvents: 'none',
        },
        field: {
          outline: 'none',
          border: '1px',
          boxShadow: $shadow.reference,
          borderColor: 'neutral.200',
          transition: 'border-color 300ms ease-in-out',
          _placeholder: {
            color: 'neutral.500',
          },
          _hover: {
            borderColor: 'neutral.300',
          },
          _focus: {
            borderColor: `${colorScheme}.700`,
            boxShadow: $shadow.reference,
          },
          _invalid: {
            boxShadow: $shadow.reference,
            borderColor: 'error.700',
            _focus: {
              borderColor: 'error.700',
            },
          },
          _disabled: {
            color: 'neutral.600',
            cursor: 'not-allowed',
            borderColor: 'neutral.100',
            _hover: {
              borderColor: 'neutral.100',
            },
            _placeholder: {
              color: 'neutral.300',
            },
          },

          [$shadow.variable]: '0px 1px 2px ' + applyOpacity(theme.colors.gray?.[900], 5),
        },
      };
    },
  },
  sizes: {
    sm: {
      addon: {
        h: '40px',
      },
      field: {
        h: '40px',
        py: '8px',
        px: '12px',

        rounded: '4px',
      },
    },
    md: {
      addon: {
        h: '44px',
      },
      field: {
        h: '44px',
        py: '10px',
        px: '14px',
        rounded: '4px',
      },
    },
    lg: {
      addon: {
        h: '48px',
      },
      field: {
        h: '48px',
        py: '12px',
        px: '16px',
        rounded: '4px',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
    colorScheme: 'primary',
  },
};
