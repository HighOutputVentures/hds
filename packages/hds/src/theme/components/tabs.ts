import type { MultiStyleConfig } from '@chakra-ui/react';

export const Tabs: MultiStyleConfig = {
  parts: ['root', 'tab', 'tablist', 'tabpanels', 'tabpanel'],
  baseStyle: {
    root: {
      p: 0,
      m: 0,
    },
    tab: {
      fontWeight: 'semibold',
    },
    tabpanel: {
      px: 0,
      pb: 0,
      pt: 4,
    },
  },
  variants: {
    underline({ colorScheme }) {
      return {
        tablist: {
          pb: 1.5,
          borderBottom: '1px',
          borderColor: 'neutral.200',
        },
        tab: {
          color: 'neutral.600',
          borderBottom: '2px',
          borderColor: 'transparent',
          pt: 'px',
          px: 1,
          pb: 4.5,
          _hover: {
            color: 'neutral.700',
          },
          _notLast: {
            mr: 4,
          },
          _selected: {
            color: `${colorScheme}.700`,
            borderColor: `${colorScheme}.700`,
          },
        },
      };
    },
    'bottom-accent': ({ colorScheme }) => {
      return {
        tablist: {
          pb: 1.5,
          borderBottom: '1px',
          borderColor: 'neutral.200',
        },
        tab: {
          p: 3,
          color: 'neutral.600',
          borderBottom: '2px',
          borderColor: 'transparent',
          _hover: {
            color: 'neutral.700',
          },
          _notLast: {
            mr: 4,
          },
          _selected: {
            bg: `${colorScheme}.500`,
            color: `${colorScheme}.700`,
            borderColor: `${colorScheme}.700`,
          },
        },
      };
    },
  },
  sizes: {
    md: {
      tab: {
        fontSize: '14px',
        lineHeight: '14px',
        letterSpacing: '0.02em',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'underline',
    colorScheme: 'primary',
  },
};
