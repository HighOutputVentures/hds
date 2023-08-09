import type { StyleConfig } from '@chakra-ui/react';
import { runIfFn } from '../../utils/runIfFn';
import { applyOpacity, isGrayish } from './_utils';
import { Input } from './input';

/*
 * [INFO]
 *
 * gray, neutral, Gray, neutrals are mapped to neutral color scheme
 * except for solid and subtle variants which doesn't implement gray
 *
 */

export const Button: StyleConfig = {
  baseStyle: {
    fontWeight: 'medium',
    letterSpacing: '0.02em',
  },
  variants: {
    unstyled() {
      return {
        h: 'unset',
        w: 'unset',
        minH: 'unset',
        minW: 'unset',
        display: 'flex',
      };
    },

    solid({ theme, colorScheme }) {
      return {
        bg: `${colorScheme}.700`,
        color: 'neutral.100',
        transition: 'all 300ms ease-in-out',
        boxShadow: `0px 1px 2px ${applyOpacity(theme.colors.gray?.[900], 5)}`,

        _hover: {
          bg: `${colorScheme}.900`,
        },

        _focus: {
          boxShadow:
            `0px 1px 2px ${applyOpacity(theme.colors.gray?.[900], 5)},` +
            `0px 0px 0px 4px ${theme.colors[colorScheme]?.[100]}`,
        },

        _disabled: {
          bg: `${colorScheme}.500`,
          opacity: 1,
        },
      };
    },

    link({ colorScheme }) {
      const useGrayishKey = isGrayish(colorScheme);

      return {
        color: `${colorScheme}.700`,

        ...(useGrayishKey && {
          color: 'neutral.600',
        }),

        _hover: {
          color: `${colorScheme}.900`,
          textDecor: 'none',

          ...(useGrayishKey && {
            color: 'neutral.700',
          }),
        },

        _disabled: {
          color: `${colorScheme}.600`,
          opacity: 1,

          ...(useGrayishKey && {
            color: 'neutral.300',
          }),

          _hover: {
            color: `${colorScheme}.600`,

            ...(useGrayishKey && {
              color: 'neutral.300',
            }),
          },
        },
      };
    },

    outline({ theme, colorScheme }) {
      const useGrayishKey = isGrayish(colorScheme);

      return {
        bg: 'transparent',
        color: `${colorScheme}.700`,
        border: '1px',
        borderColor: `${colorScheme}.700`,
        boxShadow: `0px 1px 2px ${applyOpacity(theme.colors.gray?.[900], 5)}`,

        ...(useGrayishKey && {
          color: 'neutral.700',
          borderColor: 'neutral.300',
        }),

        _hover: {
          bg: `${colorScheme}.500`,
          color: `${colorScheme}.900`,
          borderColor: `${colorScheme}.600`,

          ...(useGrayishKey && {
            bg: 'neutral.100',
            color: 'neutral.700',
            borderColor: 'neutral.300',
          }),
        },

        _focus: {
          color: `${colorScheme}.900`,
          boxShadow:
            `0px 1px 2px ${applyOpacity(theme.colors.gray?.[900], 5)},` +
            `0px 0px 0px 4px ${theme.colors[colorScheme]?.[100]}`,

          ...(useGrayishKey && {
            bg: 'neutral.100',
            color: 'neutral.700',
            borderColor: 'neutral.300',
            boxShadow:
              `0px 1px 2px ${applyOpacity(theme.colors.gray?.[900], 5)},` +
              `0px 0px 0px 4px ${theme.colors.gray?.[100]}`,
          }),

          _hover: {
            borderColor: `${colorScheme}.700`,

            ...(useGrayishKey && {
              borderColor: 'neutral.300',
            }),
          },
        },

        _disabled: {
          color: `${colorScheme}.600`,
          borderColor: `${colorScheme}.600`,
          opacity: 1,

          _hover: {
            color: `${colorScheme}.600`,
          },

          ...(useGrayishKey && {
            color: 'neutral.700',
            borderColor: 'neutral.300',
            opacity: 0.4,

            _hover: {},
          }),
        },
      };
    },

    ghost({ colorScheme }) {
      const useGrayishKey = isGrayish(colorScheme);

      return {
        color: `${colorScheme}.700`,

        ...(useGrayishKey && {
          color: 'neutral.700',
        }),

        _hover: {
          bg: `${colorScheme}.500`,

          ...(useGrayishKey && {
            bg: 'neutral.200',
          }),
        },

        _disabled: {
          color: `${colorScheme}.500`,
          opacity: 1,

          ...(useGrayishKey && {
            color: 'neutral.300',
          }),
        },
      };
    },

    subtle({ theme, colorScheme }) {
      return {
        bg: `${colorScheme}.500`,
        color: `${colorScheme}.700`,
        boxShadow: `0px 1px 2px ${applyOpacity(theme.colors.gray?.[900], 5)}`,

        _hover: {
          bg: `${colorScheme}.600`,
          color: `${colorScheme}.900`,

          /* see: https://github.com/chakra-ui/chakra-ui/discussions/5211 */
          _disabled: {
            bg: `${colorScheme}.500`,
            color: 'neutral.100',
          },
        },

        _focus: {
          color: `${colorScheme}.900`,
          boxShadow:
            `0px 1px 2px ${applyOpacity(theme.colors.gray?.[900], 5)},` +
            `0px 0px 0px 4px ${theme.colors[colorScheme]?.[100]}`,
        },

        _disabled: {
          color: 'neutral.100',
          opacity: 1,
        },
      };
    },
  },
  sizes: {
    sm: {
      ...runIfFn(Input.sizes?.sm)?.field,
      minW: '40px',
    },
    md: {
      ...runIfFn(Input.sizes?.md)?.field,
      minW: '44px',
    },
    lg: {
      ...runIfFn(Input.sizes?.lg)?.field,
      minW: '48px',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'primary',
  },
};
