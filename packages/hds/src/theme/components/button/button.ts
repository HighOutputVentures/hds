import { ComponentStyleConfig } from '@chakra-ui/react';

export const buttonVariants = {
  'solid-primary': {
    bg: 'brand.primary.700',
    color: 'neutrals.100',
    borderRadius: '4px',
    border: '1px solid #7070DD',

    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      bg: 'brand.primary.900',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF',
      _disabled: {
        bg: 'brand.primary.500',
        border: 'none',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
    _active: {
      bg: 'brand.primary.900',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
    _disabled: {
      bg: 'brand.primary.500',
      border: 'none',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
  },
  'outline-primary': {
    color: 'neutrals.700',
    bg: 'white',
    border: '1px solid #D1D1D1',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '4px',
    _hover: {
      bg: '#FFFFFF',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7',
      _disabled: {
        bg: '#FFFFFF',
        border: '1px solid #D1D1D1',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
      border: '1px solid #D1D1D1',
    },
    _active: {
      bg: '#FFFFFF',
      border: '1px solid #D1D1D1',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
    _disabled: {
      bg: '#FFFFFF',
      border: '1px solid #D1D1D1',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
  },
  'ghost-primary': {
    color: 'brand.primary.700',
    bg: '#E3E3FC',
    border: '1px solid #E3E3FC',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '4px',
    _hover: {
      bg: '#E3E3FC',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF',
      _disabled: {
        bg: '#E3E3FC',
        border: '1px solid #E3E3FC',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
    _active: {
      bg: '#C0C0FC',

      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
    _disabled: {
      bg: '#E3E3FC',
      border: '1px solid #E3E3FC',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
  },
  'solid-error': {
    bg: 'interface.error.700',
    color: 'neutrals.100',
    borderRadius: '4px',
    border: '1px solid #DC180C',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      bg: 'interface.error.700',
      border: '1px solid #DC180C',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2',
      _disabled: {
        bg: '#FCEAE8',
        border: '1px solid #FCEAE8',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
    _active: {
      bg: 'interface.error.900',
      border: '1px solid #800C05',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
    _disabled: {
      bg: '#FCEAE8',
      border: '1px solid #FCEAE8',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
  },
  'outline-error': {
    bg: 'white',
    color: '#DC180C',
    borderRadius: '4px',
    border: '1px solid #DC180C',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      bg: 'white',
      border: '1px solid #DC180C',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2',
      _disabled: {
        bg: '#FFFFFF',
        border: '1px solid #FCD2CF',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
    _active: {
      bg: 'interface.error.500',
      border: '1px solid #800C05',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
    _disabled: {
      bg: '#FFFFFF',
      border: '1px solid #FCD2CF',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
  },
  'ghost-error': {
    bg: 'interface.error.500',
    color: 'interface.error.700',
    borderRadius: '4px',
    border: '1px solid #FCEAE8',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      bg: 'interface.error.500',
      border: '1px solid #FCEAE8',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FEE4E2',
      _disabled: {
        bg: 'rgba(252, 234, 232, 0.5)',
        border: '1px solid rgba(252, 234, 232, 0.5)',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
    _active: {
      bg: ' rgba(220, 24, 12, 0.15)',
      border: '1px solid #FCEAE8',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
    _disabled: {
      bg: 'rgba(252, 234, 232, 0.5)',
      border: '1px solid rgba(252, 234, 232, 0.5)',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
  },
  'solid-close-btn': {
    bg: 'brand.primary.700',
    borderRadius: '4px',
    _hover: {
      _disabled: {
        bg: 'brand.primary.500',
      },
    },
    _disabled: {
      bg: 'transparent',
    },
  },
  'outline-close-btn': {
    color: 'neutrals.600',
    _hover: {
      color: 'neutrals.700',
    },
    _focus: {
      color: 'neutrals.600',
    },
  },
  'ghost-close-btn': {
    bg: 'transparent',
    borderRadius: '4px',
    color: 'brand.primary.700',
    _hover: {
      bg: 'rgba(227, 227, 252, 0.5)',
      color: 'brand.primary.900',
    },
    _focused: {
      bg: 'rgba(227, 227, 252, 0.5)',
      color: 'brand.primary.700',
    },
  },
};
export const buttonSizes = {
  sm: {
    p: '8px 14px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.02em',
  },
  md: {
    p: '10px 16px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.02em',
  },
  lg: {
    p: '10px 18px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px',
  },
  xl: {
    p: '12px 20px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '20px',
  },
  '2xl': {
    p: '16px 28px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px',
  },
  'button-close-sm': {
    width: '36px',
    height: '36px',
  },
  'button-close-md': {
    width: '40px',
    height: '40px',
  },
  'button-close-lg': {
    width: '44px',
    height: '44px',
  },
};
export const Button: ComponentStyleConfig = {
  baseStyle: {
    _focus: { boxShadow: 'none' },
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '8px',
    color: 'neutrals.100',
    outline: 'none',
  },
  sizes: buttonSizes,
  variants: {
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
    ...buttonVariants,
  },

  defaultProps: {
    variant: 'primary',
  },
};

export default Button;
