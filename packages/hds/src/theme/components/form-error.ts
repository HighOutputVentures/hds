import { MultiStyleConfig } from '@chakra-ui/react';

export const FormError: MultiStyleConfig = {
  parts: ['text', 'icon'],
  baseStyle: {
    text: {
      mt: '6px',
      color: 'error.700',
      fontSize: 'sm',
      lineHeight: '14px',
      letterSpacing: '0.02em',
    },
  },
};
