import { MultiStyleConfig } from '@chakra-ui/react';

export const Drawer: MultiStyleConfig = {
  parts: [
    'overlay',
    'dialogContainer',
    'dialog',
    'header',
    'closeButton',
    'footer',
    'body',
  ],
  baseStyle: {
    overlay: {
      bgColor: 'overlay',
      backdropFilter: 'blur(8px)',
    },
    dialog: {
      p: '24px',
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
      top: '12px',
      right: '12px',
      color: 'neutral.600',
      _hover: {
        bg: 'blackAlpha.100',
        color: 'neutral.700',
      },
    },
  },
};
