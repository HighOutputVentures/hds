import { MultiStyleConfig } from '@chakra-ui/react';

export const Modal: MultiStyleConfig = {
  parts: [
    'header',
    'overlay',
    'dialogContainer',
    'dialog',
    'closeButton',
    'body',
    'footer',
  ],
  baseStyle: {
    overlay: {
      bgColor: 'overlay',
      backdropFilter: 'blur(8px)',
    },
    dialog: {
      p: '16px',
    },
    body: {
      p: 0,
    },
    header: {
      p: 0,
    },
    footer: {
      p: 0,
    },
    closeButton: {
      p: '6px',
      w: 'fit-content',
      h: 'fit-content',
      top: '16px',
      right: '16px',
      color: 'neutral.600',
      _hover: {
        bg: 'blackAlpha.100',
        color: 'neutral.700',
      },
    },
  },
  sizes: {},
};
