import { MultiStyleConfig } from '@chakra-ui/react';

export default function withAvatarLabel() {
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

  return { components: { AvatarLabel } };
}
