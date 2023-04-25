import { MultiStyleConfig } from '@chakra-ui/react';
import * as React from 'react';
import { Size, Variant } from '../types';

type UseStylesArg = {
  size: Size;
  variant: Variant;
};

export function useRadioStyleConfig(arg: UseStylesArg) {
  const styleConfig = React.useMemo<MultiStyleConfig>(
    function getStyleConfig() {
      return {
        parts: ['container', 'control', 'label'],
        baseStyle: {
          container: {
            display: 'flex',
            alignItems: 'start',

            _disabled: {
              cursor: 'not-allowed',
            },

            ...(arg.size === 'sm' && { gap: '8px' }),
            ...(arg.size === 'md' && { gap: '12px' }),
          },
          control: {
            rounded: 'full',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 0,
            flexShrink: 0,
            height: 'full',
            width: 'full',
            border: '1px',
            bgColor: 'white',
            borderColor: 'neutrals.300',
            transition: 'all 300ms ease-in-out',

            // Circle
            _after: {
              content: "''",
              bgColor: 'transparent',
              display: 'block',
              rounded: 'full',
              transition: 'colors 300ms ease-in-out',

              ...(arg.size === 'sm' && { w: '6px', h: '6px' }),
              ...(arg.size === 'md' && { w: '8px', h: '8px' }),
            },

            _hover: {
              bgColor: 'brand.primary.500',
              borderColor: 'brand.primary.700',
            },
            _checked: {
              bgColor: 'brand.primary.500',
              borderColor: 'brand.primary.700',
              _after: {
                bgColor: 'brand.primary.700',
              },
            },
            _focus: {},
            _active: {
              boxShadow: '0px 0px 0px 4px #F4EBFF',
            },
            _disabled: {
              bgColor: 'neutrals.100',
              borderColor: 'neutrals.200',
              cursor: 'not-allowed',
              _active: {
                boxShadow: 'none',
              },
              _after: {
                bgColor: 'transparent',
              },
              _hover: {},
              _indeterminate: {},
            },

            ...(arg.size === 'sm' && {
              width: '16px',
              height: '16px',
            }),

            ...(arg.size === 'md' && {
              width: '20px',
              height: '20px',
            }),

            ...(arg.variant === 'solid' && {
              _checked: {
                bgColor: 'brand.primary.700',
                borderColor: 'brand.primary.700',

                _after: {
                  bgColor: 'white',
                },

                _hover: {
                  bgColor: 'brand.primary.900',
                  borderColor: 'brand.primary.900',
                },
                _disabled: {
                  bgColor: 'neutrals.300',
                  borderColor: 'neutrals.300',
                  _after: {
                    bgColor: 'transparent',
                  },
                },
              },
            }),
          },
          label: {
            margin: '0',
            _disabled: {
              cursor: 'not-allowed',
            },
          },
        },
        sizes: {},
        variants: {},
        defaultProps: {},
      };
    },
    [arg],
  );

  return styleConfig;
}
