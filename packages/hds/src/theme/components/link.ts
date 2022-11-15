import Text from './text/text';

export const Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'underline',
    },
  },
  sizes: Text.sizes,
  variants: {
    primary: {
      fontWeight: 'medium',
      color: 'brand.primary.700',
    },
    orange: {
      fontWeight: 'medium',
      color: 'orange.500',
    },
  },
};

export default Link;
