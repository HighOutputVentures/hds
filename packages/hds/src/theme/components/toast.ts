import { AlertStatus, MultiStyleConfig, StyleFunctionProps } from '@chakra-ui/react';

const closeButtonIconCls = '.chakra-toast__svg';

export const Toast: MultiStyleConfig = {
  parts: ['container', 'icon', 'content', 'title', 'description', 'closeButton'],
  variants: {
    subtle(ctx: StyleFunctionProps & { status?: AlertStatus }) {
      const colorScheme = ctx.colorScheme
        ? ctx.colorScheme
        : getColorScheme(ctx.status ?? 'success');

      return {
        container: {
          bg: `${colorScheme}.500`,
          border: '1px',
          borderColor: `${colorScheme}.600`,
          w: 'full',
          minW: '400px',
          maxW: '550px',
          rounded: '8px',
          display: 'flex',
          alignItems: 'center',
        },
        icon: {
          color: `${colorScheme}.800`,
          flexShrink: 0,
        },
        content: {
          flexGrow: 1,
        },
        title: {
          color: `${colorScheme}.900`,
          fontWeight: '600',
        },
        description: {
          color: `${colorScheme}.900`,
          fontWeight: '500',
          letterSpacing: 'unset',
        },
        closeButton: {
          color: `${colorScheme}.700`,
          rounded: 'md',
          flexShrink: 0,
          alignSelf: 'start',
          _hover: {
            bg: 'blackAlpha.50',
            color: `${colorScheme}.800`,
          },
        },
      };
    },
  },
  sizes: {
    md: {
      container: {
        p: 4,
        gap: 3,
      },
      icon: {
        w: 5,
        h: 5,
      },
      title: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      description: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      closeButton: {
        [closeButtonIconCls]: {
          w: 5,
          h: 5,
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'subtle',
  },
};

function getColorScheme(status: AlertStatus) {
  switch (status) {
    case 'info':
      return 'primary';
    case 'error':
      return 'danger';
    case 'loading':
      return 'gray';
    case 'warning':
      return 'warning';
    default:
      return 'success';
  }
}
