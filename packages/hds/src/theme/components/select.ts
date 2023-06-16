import { MultiStyleConfig } from '@chakra-ui/react';
import { runIfFn } from '../../utils/runIfFn';
import { Input } from './input';

export const Select: MultiStyleConfig = {
  parts: ['field', 'arrow'],
  baseStyle(ctx) {
    return {
      field: {
        ...runIfFn(Input.baseStyle, ctx)?.field,
      },
    };
  },
  variants: {
    outline(ctx) {
      return {
        field: {
          ...runIfFn(Input.variants?.outline, ctx)?.field,
        },
      };
    },
  },
  sizes: {
    sm(ctx) {
      return {
        field: {
          ...runIfFn(Input.sizes?.sm, ctx)?.field,
        },
      };
    },
    md(ctx) {
      return {
        field: {
          ...runIfFn(Input.sizes?.md, ctx)?.field,
        },
      };
    },
    lg(ctx) {
      return {
        field: {
          ...runIfFn(Input.sizes?.lg, ctx)?.field,
        },
      };
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
    colorScheme: 'primary',
  },
};
