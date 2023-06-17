import { StyleConfig } from '@chakra-ui/react';
import { runIfFn } from '../../utils/runIfFn';
import { applyOpacity } from './_utils';
import { Input } from './input';

export const Button: StyleConfig = {
  variants: {
    solid({ theme, colorScheme }) {
      return {
        color: 'neutral.100',
        transition: 'all 300ms ease-in-out',
        boxShadow: '0px 1px 2px ' + applyOpacity(theme.colors.gray?.[900], 5),
        bgColor: `${colorScheme}.700`,
        _hover: {
          bgColor: `${colorScheme}.900`,
        },
        _focus: {
          boxShadow: [
            '0px 1px 2px ' + applyOpacity(theme.colors.gray?.[900], 5),
            '0px 0px 0px 4px ' + theme.colors[colorScheme]?.[100],
          ].join(),
        },
        _disabled: {
          bgColor: `${colorScheme}.500`,
          opacity: 1,
        },
      };
    },
  },
  sizes: {
    sm: runIfFn(Input.sizes?.sm)?.field ?? {},
    md: runIfFn(Input.sizes?.md)?.field ?? {},
    lg: runIfFn(Input.sizes?.lg)?.field ?? {},
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'primary',
  },
};
