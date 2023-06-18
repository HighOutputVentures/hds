import { MultiStyleConfig, cssVar } from '@chakra-ui/react';
import { applyOpacity } from './_utils';

const $shadow = cssVar('menu-shadow');

export const Menu: MultiStyleConfig = {
  parts: ['button', 'list', 'item', 'groupTitle', 'command', 'divider'],
  baseStyle({ theme }) {
    return {
      list: {
        padding: '0px',
        border: '1px',
        borderColor: 'gray.100',
        rounded: '8px',
        overflow: 'hidden',
        minWidth: '175px',
        boxShadow: $shadow.reference,

        [$shadow.variable]:
          `0px 12px 16px -4px ${applyOpacity(theme.colors.gray?.[900], 8)},` +
          `0px 4px 6px -2px ${applyOpacity(theme.colors.gray?.[900], 3)}`,
      },
      item: {
        gap: '12px',
        fontSize: '14px',
        lineHeight: '14px',
        letterSpacing: '0.02em',
        paddingY: '12px',
        paddingX: '16px',
        minWidth: 'full',
        color: 'neutral.900',
        _hover: {
          bgColor: 'neutral.100',
        },
        _focus: {
          bgColor: 'neutral.100',
        },

        [ChakraMenuIconClassname]: {
          width: '16px',
          height: '16px',
          color: 'gray.700',
        },
        [ChakraMenuIconWrapperClassname]: {
          margin: '0px',
        },
      },
      command: {
        color: 'neutral.700',
        fontSize: '12px',
        lineHeight: '12px',
        letterSpacing: '0.02em',
      },
      divider: {
        borderColor: 'neutral.200',
        margin: '0px',
      },
    };
  },
};

const ChakraMenuIconClassname = '.chakra-menu__icon';
const ChakraMenuIconWrapperClassname = '.chakra-menu__icon-wrapper';
