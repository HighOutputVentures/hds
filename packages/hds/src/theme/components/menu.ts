import { MultiStyleConfig } from '@chakra-ui/react';

export const Menu: MultiStyleConfig = {
  parts: ['button', 'list', 'item', 'groupTitle', 'command', 'divider'],
  baseStyle: {
    list: {
      padding: '0px',
      border: '1px',
      borderColor: 'Gray.100',
      rounded: '8px',
      overflow: 'hidden',
      minWidth: '150px',
      boxShadow:
        '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
    },
    item: {
      fontSize: '14px',
      lineHeight: '14px',
      letterSpacing: '0.02em',
      paddingY: '12px',
      paddingX: '16px',
      minWidth: 'full',
      color: 'neutrals.900',
      '& svg': {
        color: 'Gray.700',
      },
      _hover: {
        bgColor: 'neutrals.100',
      },
      _focus: {
        bgColor: 'neutrals.100',
      },
    },
    command: {
      color: 'neutrals.700',
      fontSize: '12px',
      lineHeight: '12px',
      letterSpacing: '0.02em',
    },
    divider: {
      borderColor: 'neutrals.200',
      margin: '0px',
    },
  },
};
