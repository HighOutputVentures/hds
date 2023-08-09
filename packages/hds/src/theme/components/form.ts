import type { MultiStyleConfig } from '@chakra-ui/react';

export const Form: MultiStyleConfig = {
  parts: ['container', 'requiredIndicator', 'helperText'],
  baseStyle: {
    helperText: {
      mt: '6px',
      color: 'neutral.700',
      fontSize: 'sm',
      lineHeight: '14px',
      letterSpacing: '0.02em',
    },
    requiredIndicator: {
      color: 'error.700',
    },
  },
};
