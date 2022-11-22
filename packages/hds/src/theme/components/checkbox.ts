export const Checkbox = {
  baseStyle: {
    control: {
      borderColor: 'neutrals.300',
      borderRadius: 'base',
      padding: '6px',
      _focus: { boxShadow: '0px 0px 0px 4px #F4EBFF' },

      bg: 'alpha.white.500',
    },
  },
  sizes: {
    sm: {
      control: {
        w: '16px',
        h: '16px',
      },
    },
    md: {
      control: {
        w: '20px',
        h: '20px',
      },
    },
    lg: {
      control: {
        w: '24px',
        h: '24px',
      },
    },
  },
  variants: {
    'primary.outlined': {
      control: {
        pointerEvents: 'none',
        _checked: {
          bg: 'brand.primary.500',
          color: 'brand.primary.700',
          borderColor: 'brand.primary.700',
          border: '1px solid',
        },
      },
    },
    'primary.solid': {
      control: {
        pointerEvents: 'none',
        _checked: {
          bg: 'brand.primary.700',
          color: 'alpha.white.500',
          borderColor: 'brand.primary.700',
          border: '1px solid',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary.outlined',
    size: 'sm',
  },
};

export default Checkbox;
