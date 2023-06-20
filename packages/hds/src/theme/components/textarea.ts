import { StyleConfig } from '@chakra-ui/react';
import { runIfFn } from '../../utils/runIfFn';
import { Input } from './input';

export const Textarea: StyleConfig = {
  variants: {
    outline(ctx) {
      return runIfFn(Input.variants?.outline, ctx)?.field ?? {};
    },
  },
  sizes: {
    sm: runIfFn(Input.sizes?.sm)?.field ?? {},
    md: runIfFn(Input.sizes?.md)?.field ?? {},
    lg: runIfFn(Input.sizes?.lg)?.field ?? {},
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
    colorScheme: 'primary',
  },
};
