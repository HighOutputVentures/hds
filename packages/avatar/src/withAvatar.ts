import { MultiStyleConfig } from '@chakra-ui/react';

// 💡NOTE
// Sizes 3xl, 4xl and 5xl are normally used for "AvatarProfile"
// and shouldn't be used for regular "Avatar"

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
            /* clickable */
            cursor: context['data-clickable'] ? 'pointer' : 'default',
            _focus: {
              outline: 'none',
              /* box-shadow depends if "src" exists or not 🐸 */
              boxShadow: context['data-fallback'] ? '0 0 0 4px #F2F4F7' : '0 0 0 4px #F4EBFF',
            },
            transition: 'box-shadow 300ms ease-in-out',
            /* elevations for '3xl', '4xl' and '5xl' which will normally be used for profile pic */
            shadow: context['data-elevated']
              ? context.size === '3xl'
                ? [
                    '0px 4px 8px -2px rgba(16, 24, 40, 0.1)',
                    '0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
                  ].join()
                : context.size === '4xl'
                ? [
                    '0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                    '0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                  ].join()
                : context.size === '5xl'
                ? [
                    '0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
                    '0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                  ].join()
                : undefined
              : undefined,
            border: context['data-bordered']
              ? context.size === '3xl'
                ? '3px solid #FFFFFF'
                : context.size === '4xl'
                ? '4px solid #FFFFFF'
                : context.size === '5xl'
                ? '4px solid #FFFFFF'
                : '1.5px solid #FFFFFF'
              : undefined,
          },
          badge: {
            color: '#00C408',
            bgColor: context['data-online'] ? '#00C408' : '#F0F0F0',
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
          excessLabel: {
            color: '#475467',
            bgColor: '#F9FAFB',
            border: '2px solid #FFFFFF',
            fontWeight: 'medium',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          group: {},
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
        excessLabel: {
          width: '24px',
          height: '24px',
          fontSize: '12px',
          lineHeight: '18px',
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
        excessLabel: {
          width: '32px',
          height: '32px',
          fontSize: '14px',
          lineHeight: '20px',
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
        excessLabel: {
          width: '40px',
          height: '40px',
          fontSize: '16px',
          lineHeight: '24px',
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

      /* <!-- Sizes here will be normally used for avatar profile 👌 --> */

      '3xl': {
        container: {
          width: '72px',
          height: '72px',
          fontSize: '28px',
          lineHeight: '28px',
          svg: {
            width: '30px',
            height: '30px',
          },
        },
        verified: {
          width: '20px!important',
          height: '20px!important',
          left: 'calc(52px - 6px)' /* minus border */,
          top: 'calc(52px - 6px)' /* minus border */,
        },
        /* NOT SUPPORTED */
        badge: {},
        customIcon: {},
      },
      '4xl': {
        container: {
          width: '96px',
          height: '96px',
          fontSize: '32px',
          lineHeight: '32px',
          svg: {
            width: '40px',
            height: '40px',
          },
        },
        verified: {
          width: '24px!important',
          height: '24px!important',
          left: 'calc(70px - 8px)' /* minus the border */,
          top: 'calc(70px - 8px)' /* minus the border */,
        },
        /* NOT SUPPORTED */
        badge: {},
        customIcon: {},
      },
      '5xl': {
        container: {
          width: '160px',
          height: '160px',
          fontSize: '56px',
          lineHeight: '64px',
          letterSpacing: '-0.02em',
          svg: {
            width: '66.67px',
            height: '66.67px',
          },
        },
        verified: {
          width: '32px!important',
          height: '32px!important',
          left: 'calc(124px - 8px)' /* minus border */,
          top: 'calc(124px - 8px)' /* minus border */,
        },
        /* NOT SUPPORTED */
        badge: {},
        customIcon: {},
      },
    },
    /* Please don't set any global style which affects other themes */
    baseStyle: {},
    defaultProps: {},
  };

  const AvatarLabel: MultiStyleConfig = {
    parts: ['container', 'label', 'heading', 'supportText'],
    variants: {
      hds() {
        return {
          container: {
            display: 'flex',
            alignItems: 'center',
          },
          label: {},
          heading: {
            fontWeight: 'normal',
            color: '#2E2E2E',
          },
          supportText: {
            color: '#7A7A7A',
            fontWeight: 'normal',
            marginTop: '4px',
          },
        };
      },
    },
    sizes: {
      sm: {
        container: {
          gap: '10px',
        },
        label: {},
        heading: {
          fontSize: '14px',
          lineHeight: '14px',
          letterSpacing: '0.02em',
        },
        supportText: {
          fontSize: '12px',
          lineHeight: '12px',
          letterSpacing: '0.02em',
        },
      },
      md: {
        container: {
          gap: '12px',
        },
        label: {},
        heading: {
          fontSize: '14px',
          lineHeight: '14px',
          letterSpacing: '0.02em',
        },
        supportText: {
          fontSize: '14px',
          lineHeight: '14px',
          letterSpacing: '0.02em',
        },
      },
      lg: {
        container: {
          gap: '12px',
        },
        label: {},
        heading: {
          fontSize: '18px',
          lineHeight: '18px',
        },
        supportText: {
          fontSize: '14px',
          lineHeight: '14px',
          letterSpacing: '0.02em',
        },
      },
      xl: {
        container: {
          gap: '16px',
        },
        label: {},
        heading: {
          fontSize: '20px',
          lineHeight: '20px',
        },
        supportText: {
          fontSize: '18px',
          lineHeight: '18px',
        },
      },
    },
    /* Please don't set any global style which affects other themes */
    baseStyle: {},
    defaultProps: {},
  };

  return { components: { Avatar, AvatarLabel } };
}
