import type { MultiStyleConfig} from '@chakra-ui/react';
import { calc, cssVar } from '@chakra-ui/react';
import { applyOpacity } from './_utils';

const $width = cssVar('switch-track-width');
const $height = cssVar('switch-track-height');
const $shadow = cssVar('switch-track-shadow');
const $diff = cssVar('switch-track-diff');
const diffValue = calc.subtract($width, $height);
const $translateX = cssVar('switch-thumb-x');

export const Switch: MultiStyleConfig = {
  parts: ['container', 'thumb', 'track'],
  baseStyle({ theme, colorScheme }) {
    return {
      container: {
        [$diff.variable]: diffValue,
        [$translateX.variable]: $diff.reference,
        [$shadow.variable]: `0px 0px 0px 4px ${theme.colors['primary']?.[100]}`,
      },
      track: {
        padding: '2px',
        width: [$width.reference],
        height: [$height.reference],
        transition: 'background-color 300ms ease-in-out, box-shadow 300ms ease-in-out',

        bg: 'neutral.200',
        _hover: {
          bg: 'neutral.300',
        },
        _focus: {
          boxShadow: $shadow.reference,
        },
        _checked: {
          bg: `${colorScheme}.700`,
          _hover: {
            bg: `${colorScheme}.900`,
          },
          _focus: {
            bg: `${colorScheme}.700`,
          },
        },
        _disabled: {
          opacity: 1,
          bg: 'neutral.200',
          _hover: {
            bg: 'neutral.200',
          },
        },

        _dark: {
          bg: `${colorScheme}.50`,
          _hover: {
            bg: `${colorScheme}.100`,
          },
          _focus: {
            boxShadow: $shadow.reference,
          },
          _checked: {
            bg: `${colorScheme}.200`,
            _hover: {
              bg: `${colorScheme}.300`,
            },
          },
          _disabled: {
            opacity: 1,
            bg: 'neutral.200',
            _hover: {
              bg: 'neutral.200',
            },
          },
        },
      },
      thumb: {
        bg: 'white',
        width: $height.reference,
        height: $height.reference,
        transition: 'all 300ms ease-in-out',
        boxShadow:
          `0px 1px 3px ${applyOpacity(theme.colors.gray?.[900], 10)},` +
          `0px 1px 2px ${applyOpacity(theme.colors.gray?.[900], 6)}`,
        _checked: {
          transform: `translateX(${$translateX.reference})`,
        },
      },
    };
  },
  sizes: {
    sm: {
      container: {
        [$width.variable]: '36px',
        [$height.variable]: '20px',
      },
    },
    md: {
      container: {
        [$width.variable]: '44px',
        [$height.variable]: '24px',
      },
    },
  },
  defaultProps: {
    size: 'md',
    colorScheme: 'primary',
  },
};
