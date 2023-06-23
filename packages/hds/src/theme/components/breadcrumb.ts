import { MultiStyleConfig } from '@chakra-ui/react';

export const Breadcrumb: MultiStyleConfig = {
  parts: ['container', 'link', 'list', 'item', 'separator'],
  baseStyle({ colorScheme }) {
    return {
      list: {
        gap: '14px',
        display: 'flex',
        alignItems: 'center',
        lineHeight: '14px',
        fontSize: 'sm',
      },
      item: {
        gap: '14px',
        display: 'flex',
        alignItems: 'center',
      },
      link: {
        color: 'neutral.600',
        letterSpacing: '0.02em',
        textDecoration: 'none',
        _hover: {
          color: 'neutral.800',
        },
        _activeLink: {
          color: `${colorScheme}.900`,
        },
      },
      separator: {
        mx: 0,
        color: 'neutral.300',
        display: 'flex',

        '& .chakra-icon': {
          w: 5,
          h: 5,
        },
      },
    };
  },
  defaultProps: {
    colorScheme: 'primary',
  },
};
