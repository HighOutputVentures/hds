import { MultiStyleConfig } from '@chakra-ui/react';

export default function withAvatarProfile() {
  const AvatarProfile: MultiStyleConfig = {
    parts: [],
    variants: {
      hds() {
        return {};
      },
    },
    sizes: {
      sm: {
        container: {
          width: '72px',
          height: '72px',
          fontSize: '28px',
          fontWeight: 'bold',
          lineHeight: '28px',
          svg: {
            width: '30px',
            height: '30px',
          },
        },
        verified: {
          width: '20px!important',
          height: '20px!important',
          left: '52px',
          top: '52px',
        },
        badge: {},
        customIcon: {},
      },
      md: {
        container: {
          width: '96px',
          height: '96px',
          fontSize: '32px',
          fontWeight: 'bold',
          lineHeight: '32px',
          svg: {
            width: '40px',
            height: '40px',
          },
        },
        verified: {
          width: '24px!important',
          height: '24px!important',
          left: '70px',
          top: '70px',
        },
        badge: {},
        customIcon: {},
      },
      lg: {
        container: {
          width: '160px',
          height: '160px',
          fontSize: '56px',
          fontWeight: 'bold',
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
          left: '124px',
          top: '124px',
        },
        badge: {},
        customIcon: {},
      },
    },
    baseStyle: {},
    defaultProps: {},
  };

  return { components: { AvatarProfile } };
}
