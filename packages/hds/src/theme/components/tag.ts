import { MultiStyleConfig } from '@chakra-ui/react';

export const Tag: MultiStyleConfig = {
  parts: ['container', 'label', 'closeButton'],
  baseStyle: {
    container: {
      bg: 'white',
      border: '1px',
      borderColor: 'neutral.200',
      rounded: '6px',
    },
    label: {
      color: 'neutral.700',
      fontWeight: 'medium',
    },
    closeButton: {
      m: 0,
      color: 'neutral.400',
      display: 'flex',
      rounded: 'md',
      _hover: {
        bg: 'neutral.100',
        color: 'neutral.500',
      },
      _focus: {
        bg: 'neutral.100',
        color: 'neutral.500',
        boxShadow: 'none',
      },
    },
  },
  sizes: {
    sm: {
      container: {
        gap: '4px',
        py: '3px',
        px: '8px',
      },
      label: {
        fontSize: '12px',
        lineHeight: '18px',
      },
      closeButton: {
        w: '14px',
        h: '14px',
      },
    },
    md: {
      container: {
        gap: '5px',
        py: '2px',
        px: '9px',
      },
      label: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      closeButton: {
        w: '16px',
        h: '16px',
      },
    },
    lg: {
      container: {
        gap: '6px',
        py: '4px',
        px: '10px',
      },
      label: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      closeButton: {
        w: '20px',
        h: '20px',
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};
