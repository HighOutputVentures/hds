import { MultiStyleConfig, cssVar } from '@chakra-ui/react';

const $border = cssVar('table-border');

export const Table: MultiStyleConfig = {
  parts: ['table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td'],
  baseStyle({ theme }) {
    return {
      table: {
        [$border.variable]: theme.colors.gray?.[200],
      },
      thead: {
        bg: 'gray.50',
      },
      th: {
        px: 3,
        py: 6,
        textTransform: 'unset',
        color: 'gray.500',
        fontSize: 'xs',
        lineHeight: '18px',
        fontWeight: 'medium',
      },
      td: {
        py: 4,
        px: 6,
        color: 'neutrals.600',
        fontSize: 'sm',
        lineHeight: '20px',
        letterSpacing: '0.02em',
      },
    };
  },
  variants: {
    default: {
      td: {
        borderY: '1px',
        borderColor: $border.reference,
        _first: {
          borderLeft: '1px',
          borderColor: $border.reference,
        },
        _last: {
          borderRight: '1px',
          borderColor: $border.reference,
        },
      },

      th: {
        borderY: '1px',
        borderColor: $border.reference,
        _first: {
          borderLeft: '1px',
          borderColor: $border.reference,
        },
        _last: {
          borderRight: '1px',
          borderColor: $border.reference,
        },
      },
    },
    bordered: {
      td: {
        border: '1px',
        borderColor: $border.reference,
      },

      th: {
        border: '1px',
        borderColor: $border.reference,
      },
    },
  },
  sizes: {
    md: {
      th: {
        py: 3,
        px: 4,
        fontSize: 'xs',
        lineHeight: '18px',
        fontWeight: 'medium',
      },
      td: {
        py: 3,
        px: 4,
        fontSize: 'sm',
        lineHeight: '20px',
        letterSpacing: '0.02em',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'default',
  },
};
