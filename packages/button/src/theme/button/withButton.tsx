import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import { buttonSizes } from './sizes';
import { buttonVariants } from './variants';

export default function withButton() {
  return { components: { Button } };
}

const baseStyle = defineStyle({
  _focus: { boxShadow: 'none' },
  alignItems: 'center',
  alignSelf: 'center',
  borderRadius: '8px',
  color: 'neutrals.100',
  outline: 'none',
});

const sizes = defineStyle({ ...buttonSizes });

const primary = defineStyle({
  primary: {
    color: 'neutrals.100',
    bg: 'brand.primary.700',
    p: '8px 14px',
    borderRadius: '8px',
    _hover: {
      bg: 'brand.primary.700',
      _disabled: {
        bg: 'brand.primary.500',
      },
    },
    _disabled: {
      bg: 'brand.primary.500',
    },
  },
});

const variants = defineStyle({
  ...buttonVariants,
});

const Button = defineStyleConfig({
  baseStyle: baseStyle,
  sizes: sizes,
  variants: { primary, variants },

  defaultProps: {
    variant: 'primary',
  },
});
