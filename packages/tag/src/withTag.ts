import { MultiStyleConfig } from '@chakra-ui/react';

/*
 *
 * This is isolated so it doesn't bloat the theme
 * and won't be added to bundle if not used. 💰
 * This approach is highly inspired by this ⬇️
 * https://chakra-ui.com/community/recipes/prose
 *
 */

export default function withTag() {
  const Tag: MultiStyleConfig = {
    parts: [
      'icon',
      'label',
      'badge',
      'avatar',
      'container',
      'indicator',
      'closeButton',
      /* Checkbox is separated below 👇 */
    ],
    baseStyle: {},
    variants: {
      hds() {
        return {
          container: {
            bgColor: 'white',
            border: '1px solid #F0F0F0',
            paddingX: '0px',
            rounded: '6px',
          },
          label: {
            fontWeight: 'medium',
            color: '#525252',
            margin: '0px',
          },
          closeButton: {
            minWidth: 'unset',
            minHeight: 'unset',
            color: '#C2C2C2',
            rounded: '3px',
            margin: '0px',
            _hover: {
              color: '#7A7A7A',
            },
            _active: {
              boxShadow: '0px 0px 0px 4px #F2F4F7;',
            },
          },
          indicator: {
            width: '6px',
            height: '6px',
            bgColor: '#00C408',
            rounded: 'full',
            margin: '0px',
          },
          icon: {
            width: '16px',
            height: '16px',
            margin: '0px',
          },
          avatar: {
            width: '16px',
            height: '16px',
            margin: '0px',
          },
          badge: {
            color: '#2E2E2E',
            margin: '0px',
          },
        };
      },
    },
    sizes: {
      sm: {
        container: {
          paddingY: '3px',
        },
        label: {
          fontSize: '12px',
          lineHeight: '18px',
        },
        closeButton: {
          width: '10px',
          height: '10px',
        },
        badge: {
          fontSize: '12px',
          lineHeight: '18px',
        },
      },
      md: {
        container: {
          paddingY: '3px',
        },
        label: {
          fontSize: '14px',
          lineHeight: '20px',
        },
        closeButton: {
          width: '12px',
          height: '12px',
        },
        badge: {
          fontSize: '12px',
          lineHeight: '18px',
        },
      },
      lg: {
        container: {
          paddingY: '4px',
        },
        label: {
          fontSize: '14px',
          lineHeight: '20px',
        },
        closeButton: {
          width: '14px',
          height: '14px',
        },
        badge: {
          fontSize: '14px',
          lineHeight: '20px',
        },
      },
    },
    defaultProps: {
      size: 'md',
    },
  };

  const Checkbox: MultiStyleConfig = {
    parts: ['icon', 'container', 'control', 'label'],
    baseStyle: {},
    variants: {
      hds() {
        return {
          container: {
            margin: 0,
          },
          label: {},
          control: {
            rounded: '4px',
            bgColor: 'white',
            borderColor: '#F0F0F0',
            _hover: {
              bgColor: '#EDE8FC',
              borderColor: '#8A68EF',
            },
            _checked: {
              bgColor: '#8A68EF',
              borderColor: '#8A68EF',
              _hover: {
                bgColor: '#4A3880',
                borderColor: '#4A3880',
              },
            },
            _focus: {
              boxShadow: 'none',
            },
            _active: {
              boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF',
            },
            transition: 'all 300ms ease-in-out',
          },
        };
      },
    },
    sizes: {
      sm: {
        container: {
          width: '14px',
          height: '14px',
        },
      },
      md: {
        container: {
          width: '16px',
          height: '16px',
        },
      },
      lg: {
        container: {
          width: '18px',
          height: '18px',
        },
      },
    },
    defaultProps: {},
  };

  return { components: { Tag, Checkbox } };
}
