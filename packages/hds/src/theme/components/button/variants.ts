export type ButtonVariantsTypes =
  | 'solid-primary'
  | 'outline-primary'
  | 'ghost-primary'
  | 'ghost-primary-outlined'
  | 'solid-error'
  | 'outline-error'
  | 'unstyled'
  | 'ghost-error';

export type CloseButtonVariantTypes = 'solid-close-btn' | 'outline-close-btn' | 'ghost-close-btn';

export const buttonVariants = {
  'solid-primary': {
    bg: 'brand.primary.700',
    color: 'neutrals.100',
    borderRadius: '4px',
    border: '1px solid #7070DD',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
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
  'ghost-primary-outline': {
    color: 'brand.primary.700',
    bg: '#E3E3FC',
    border: 'none',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '4px',
    _hover: {
      color: 'brand.primary.300',
      _disabled: {
        color: 'brand.primary.300',
        border: 'none',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
    _active: {
      bg: '#C0C0FC',
      border: 'none',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    },
    _disabled: {
      color: 'brand.primary.300',
      border: 'none',
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
  unstyled: {
    bg: 'transparent',
    border: 'none',
    color: 'neutrals.900',
    _hover: {
      bg: 'transparent',
      color: 'neutrals.700',
    },
    _focused: {
      bg: 'transparent',
      color: 'brand.primary.700',
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
