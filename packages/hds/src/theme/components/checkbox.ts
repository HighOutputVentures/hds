import type { MultiStyleConfig} from '@chakra-ui/react';
import { cssVar } from '@chakra-ui/react';
import { createObjectFromKeysWithSameProps } from './_utils';

const $shadow = cssVar('checkbox-shadow');

export const Checkbox: MultiStyleConfig = {
  parts: ['control', 'icon', 'container', 'label'],
  variants: {
    outline({ theme, colorScheme }) {
      return {
        control: {
          border: '1px',
          borderColor: 'neutral.300',
          _hover: {
            bg: `${colorScheme}.500`,
            borderColor: `${colorScheme}.700`,
          },
          _focus: {
            borderColor: `${colorScheme}.500`,
            boxShadow: $shadow.reference,
            _hover: {
              bg: `${colorScheme}.500`,
              borderColor: `${colorScheme}.700`,
            },
          },

          ...createObjectFromKeysWithSameProps(
            {
              bg: `${colorScheme}.500`,
              color: `${colorScheme}.700`,
              borderColor: `${colorScheme}.700`,
              _hover: {
                bg: `${colorScheme}.500`,
                borderColor: `${colorScheme}.700`,
              },
              _focus: {
                borderColor: `${colorScheme}.700`,
                boxShadow: $shadow.reference,
              },
            },
            '_checked',
            '_indeterminate',
          ),

          [$shadow.variable]: `0px 0px 0px 4px ${theme.colors[colorScheme]?.[100]}`,
        },
      };
    },
  },
  sizes: {
    sm: {
      control: {
        w: '16px',
        h: '16px',
        rounded: '4px',
      },
    },
    md: {
      control: {
        w: '20px',
        h: '20px',
        rounded: '6px',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
    colorScheme: 'primary',
  },
};
