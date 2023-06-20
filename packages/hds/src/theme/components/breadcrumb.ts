import { MultiStyleConfig } from '@chakra-ui/react';

const separatorIconClassname = '.chakra-icon';

export const Breadcrumb: MultiStyleConfig = {
  parts: ['container', 'link', 'list', 'separator'],
  baseStyle({ colorScheme }) {
    return {
      list: {
        fontSize: 'sm',
        lineHeight: '14px',
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
        mx: '14px',
        color: 'neutral.300',
        [separatorIconClassname]: {
          w: '20px',
          h: '20px',
        },
      },
    };
  },
  defaultProps: {
    colorScheme: 'primary',
  },
};
