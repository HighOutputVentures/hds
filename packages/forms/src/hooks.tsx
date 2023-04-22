import type { SystemStyleObject } from '@chakra-ui/react';
import * as React from 'react';
import { Size } from './types';

type UseStylesConfig = {
  size?: Size;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  hasClearIcon?: boolean;
};

/*
 *
 * This applies to the container of icon eg. InputLeftElement,
 * not to the icon inside it.
 *
 */
type LeftOrRightIconConfig = {
  isActive?: boolean;
  isDisabled?: boolean;
  isClickable?: boolean;
};

type IconConfig = {
  isRotated?: boolean;
};

type MenuItemConfig = {
  isSelected?: boolean;
  isHighlighted?: boolean;
};

type UseStylesReturn = {
  field: SystemStyleObject;
  icon(config?: IconConfig): SystemStyleObject;
  leftIcon(config?: LeftOrRightIconConfig): SystemStyleObject;
  rightIcon(config?: LeftOrRightIconConfig): SystemStyleObject;
  clearIcon: SystemStyleObject;
  menu: SystemStyleObject;
  menuitem(config?: MenuItemConfig): SystemStyleObject;
};

export function useStyles({
  size = 'md',
  hasLeftIcon,
  hasRightIcon,
  hasClearIcon,
}: UseStylesConfig = {}) {
  const styles = React.useMemo<UseStylesReturn>(
    function getStyles() {
      return {
        field: {
          width: 'full',
          color: 'neutrals.900',
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '0.02em',
          border: '1px',
          borderColor: 'neutrals.200',
          boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          bgColor: 'white',
          rounded: '4px',
          _placeholder: {
            color: 'neutrals.500',
          },
          _hover: {
            borderColor: 'neutrals.300',
          },
          _focus: {
            outline: 'none',
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
            borderColor: 'brand.primary.700',
            caretColor: 'black',
          },
          _invalid: {
            borderColor: 'interface.error.700',
            _focus: {
              borderColor: 'interface.error.700',
              boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
            },
          },
          _disabled: {
            color: 'neutrals.600',
            cursor: 'not-allowed',
            borderColor: 'neutrals.100',
            _hover: {
              borderColor: 'neutrals.100',
            },
            _placeholder: {
              color: 'neutrals.300',
            },
          },

          /*
           *
           * icon integration styles below
           *
           */

          ...(size === 'sm' && {
            height: '40px',
            paddingY: '8px',
            paddingX: '12px',
            ...(hasLeftIcon && {
              /*
               *
               * 20px (left icon width)
               * 12px (padding left)
               *  8px (margin of left icon and input)
               *
               */
              paddingLeft: '40px',
            }),
            ...(hasRightIcon && {
              /*
               *
               * 20px (right icon width)
               * 12px (padding right)
               *  8px (margin or right icon and input)
               *
               */
              paddingRight: '40px',
            }),
            ...(hasClearIcon && {
              /*
               *
               * 20px (clear icon width)
               * 12px (padding right)
               *  8px (margin of clear icon and input)
               *
               */
              paddingRight: '40px',
              /*
               *
               * 20px (right icon width)
               * 12px (padding right)
               *  8px (margin of clear and right icon)
               * 20px (clear icon width)
               *  8px (margin of clear icon and input)
               *
               */
              ...(hasRightIcon && {
                paddingRight: '68px',
              }),
            }),
          }),
          ...(size === 'md' && {
            height: '44px',
            paddingY: '10px',
            paddingX: '14px',
            ...(hasLeftIcon && {
              /* see comment above */
              paddingLeft: '42px',
            }),
            ...(hasRightIcon && {
              /* see comment above */
              paddingRight: '42px',
            }),
            ...(hasClearIcon && {
              /* see comment above */
              paddingRight: '42px',
              /* see comment above */
              ...(hasRightIcon && {
                paddingRight: '70px',
              }),
            }),
          }),
        },

        /*
         *
         * styles for InputLeftElement or custom
         *
         */
        leftIcon(config) {
          return {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'fit-content',
            height: 'full',
            color: 'neutrals.500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            ...(config?.isClickable && {
              pointerEvents: undefined,
              _hover: {
                color: 'neutrals.600',
              },
              ...(config?.isActive && {
                color: 'neutrals.700',
                _hover: {},
              }),
            }),
            ...(config?.isDisabled && {
              color: 'neutrals.300',
            }),
            ...(size === 'sm' && { marginLeft: '12px' }),
            ...(size === 'md' && { marginLeft: '14px' }),
          };
        },

        /*
         *
         * styles for InputRightElement or custom
         *
         */
        rightIcon(config) {
          return {
            position: 'absolute',
            top: 0,
            right: 0,
            width: 'fit-content',
            height: 'full',
            color: 'neutrals.500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            ...(config?.isClickable && {
              pointerEvents: undefined,
              _hover: {
                color: 'neutrals.600',
              },
              ...(config?.isActive && {
                color: 'neutrals.700',
                _hover: {},
              }),
            }),
            ...(size === 'sm' && { marginRight: '12px' }),
            ...(size === 'md' && { marginRight: '14px' }),
          };
        },

        /*
         *
         * styles for icon inside InputLeftElement/InputRightElement or custom
         *
         */
        icon(config) {
          return {
            width: '20px',
            height: '20px',
            transition: 'all 150ms',
            ...(config?.isRotated && {
              transform: 'rotate(180deg)',
            }),
          };
        },

        clearIcon: {
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          width: '20px',
          height: '20px',
          rounded: 'md',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgColor: 'blackAlpha.200',
          color: 'blackAlpha.600',
          transition: 'colors 300ms ease-in-out',
          _hover: {
            color: 'blackAlpha.700',
          },
          ...(size === 'sm' && { marginRight: '12px' }),
          ...(size === 'md' && { marginRight: '14px' }),
          ...(hasRightIcon && {
            ...(size === 'sm' && { marginRight: '40px' }),
            ...(size === 'md' && { marginRight: '42px' }),
          }),
        },

        menu: {
          width: 'full',
          border: '1px',
          borderColor: 'neutrals.200',
          bgColor: 'white',
          rounded: '8px',
          overflow: 'hidden',
        },

        menuitem(config = {}) {
          return {
            cursor: 'pointer',
            paddingY: 2,
            paddingX: 3,
            transition: 'colors 300ms ease-in-out',
            _selected: {
              bgColor: 'neutrals.100',
            },
            ...(config?.isHighlighted && {
              bgColor: 'neutrals.100',
            }),
            ...(config?.isSelected && {
              bgColor: 'neutrals.100',
            }),
          };
        },
      };
    },
    [size, hasLeftIcon, hasRightIcon, hasClearIcon],
  );

  return styles;
}
