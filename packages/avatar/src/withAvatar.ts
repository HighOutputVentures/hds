import { MultiStyleConfig } from '@chakra-ui/react';

export default function withAvatar() {
  const Avatar: MultiStyleConfig = {
    parts: ['badge', 'container', 'excessLabel', 'group'],
    baseStyle: {},
    variants: {
      hds(context) {
        return {
          container: {
            color: '#475467',
            bgColor: '#F9FAFB',
            fontWeight: 'medium',
            padding: '0px',
            cursor: context['data-clickable'] ? 'pointer' : 'default',
            _focus: {
              outline: 'none',
              boxShadow: context['data-fallback'] ? '0 0 0 4px #F2F4F7' : '0 0 0 4px #F4EBFF',
            },
            transition: 'box-shadow 300ms ease-in-out',
          },
        };
      },
    },
    sizes: {
      xs: {
        container: {
          width: '24px',
          height: '24px',
          fontSize: '12px',
          lineHeight: '18px',
          svg: {
            width: '16px',
            height: '16px',
          },
        },
      },
      sm: {
        container: {
          width: '32px',
          height: '32px',
          fontSize: '14px',
          lineHeight: '20px',
          svg: {
            width: '20px',
            height: '20px',
          },
        },
      },
      md: {
        container: {
          width: '40px',
          height: '40px',
          fontSize: '16px',
          lineHeight: '24px',
          svg: {
            width: '24px',
            height: '24px',
          },
        },
      },
      lg: {
        container: {
          width: '48px',
          height: '48px',
          fontSize: '18px',
          lineHeight: '28px',
          svg: {
            width: '28px',
            height: '28px',
          },
        },
      },
      xl: {
        container: {
          width: '56px',
          height: '56px',
          fontSize: '20px',
          lineHeight: '30px',
          svg: {
            width: '32px',
            height: '32px',
          },
        },
      },
      '2xl': {
        container: {
          width: '64px',
          height: '64px',
          fontSize: '24px',
          lineHeight: '32px',
          svg: {
            width: '32px',
            height: '32px',
          },
        },
      },
    },
    defaultProps: {},
  };

  return {
    components: {
      Avatar,
    },
  };
}
