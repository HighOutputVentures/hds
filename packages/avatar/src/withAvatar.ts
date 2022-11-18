import { MultiStyleConfig } from '@chakra-ui/react';

export default function withAvatar() {
  const Avatar: MultiStyleConfig = {
    parts: ['badge', 'container', 'excessLabel', 'group', 'verified', 'customIcon'],
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
          badge: {
            color: '#00C408',
            bgColor: '#00C408',
            border: '1.5px solid',
            borderColor: 'white',
            right: 'unset',
            bottom: 'unset',
            transform: 'unset',
          },
          verified: {
            position: 'absolute',
          },
          customIcon: {
            position: 'absolute',
            rounded: 'full',
            border: '1.5px solid #FFFFFF',
            bgColor: '#F4EBFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
        badge: {
          width: '6px',
          height: '6px',
          left: '18px',
          top: '18px',
        },
        verified: {
          width: '10px!important',
          height: '10px!important',
          left: '15px',
          top: '15px',
        },
        customIcon: {
          width: '10px',
          height: '10px',
          left: '16px',
          top: '16px',
          '& svg': {
            width: '10px',
            height: '10px',
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
        badge: {
          width: '8px',
          height: '8px',
          left: '24px',
          top: '24px',
        },
        verified: {
          width: '12px!important',
          height: '12px!important',
          left: '20px',
          top: '20px',
        },
        customIcon: {
          width: '12px',
          height: '12px',
          left: '22px',
          top: '22px',
          '& svg': {
            width: '12px',
            height: '12px',
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
        badge: {
          width: '10px',
          height: '10px',
          left: '30px',
          top: '30px',
        },
        verified: {
          width: '14px!important',
          height: '14px!important',
          left: '26px',
          top: '26px',
        },
        customIcon: {
          width: '14px',
          height: '14px',
          left: '28px',
          top: '28px',
          '& svg': {
            width: '14px',
            height: '14px',
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
        badge: {
          width: '12px',
          height: '12px',
          left: '36px',
          top: '36px',
        },
        verified: {
          width: '16px!important',
          height: '16px!important',
          left: '32px',
          top: '32px',
        },
        customIcon: {
          width: '16px',
          height: '16px',
          left: '34px',
          top: '34px',
          '& svg': {
            width: '16px',
            height: '16px',
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
        badge: {
          width: '14px',
          height: '14px',
          left: '42px',
          top: '42px',
        },
        verified: {
          width: '18px!important',
          height: '18px!important',
          left: '38px',
          top: '38px',
        },
        customIcon: {
          width: '18px',
          height: '18px',
          left: '40px',
          top: '40px',
          '& svg': {
            width: '18px',
            height: '18px',
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
        badge: {
          width: '16px',
          height: '16px',
          left: '50px',
          top: '50px',
        },
        verified: {
          width: '20px!important',
          height: '20px!important',
          left: '44px',
          top: '44px',
        },
        customIcon: {
          width: '20px',
          height: '20px',
          left: '46px',
          top: '46px',
          '& svg': {
            width: '20px',
            height: '20px',
          },
        },
      },
    },
    /* Please don't add anything so we don't override any global theme */
    baseStyle: {},
    defaultProps: {},
  };

  return { components: { Avatar } };
}
