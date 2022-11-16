import {MultiStyleConfig} from '@chakra-ui/react';

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
      'checkbox',
    ],
    baseStyle: {
      container: {
        rounded: '6px',
      },
      label: {
        fontWeight: 'medium',
      },
      closeButton: {
        minWidth: 'unset',
        minHeight: 'unset',
      },
      icon: {},
      badge: {},
      avatar: {},
    },
    variants: {
      hds() {
        return {
          container: {
            bgColor: 'white',
            border: '1px solid #F0F0F0',
          },
          label: {
            color: '#525252',
          },
          closeButton: {
            color: '#C2C2C2',
            rounded: '3px',
            _hover: {
              color: '#7A7A7A',
            },
            _active: {
              boxShadow: '0px 0px 0px 4px #F2F4F7',
            },
          },
          indicator: {
            width: '6px',
            height: '6px',
            bgColor: '#00C408',
            rounded: 'full',
          },
          icon: {},
          avatar: {},
        };
      },
    },
    sizes: {
      sm: {
        container: {
          paddingX: '8px',
          paddingY: '3px',
        },
        label: {
          fontSize: '12px',
          lineHeight: '18px',
        },
        closeButton: {
          width: '10px',
          height: '10px',
          marginLeft: '5px',
          padding: '2px',
        },
        indicator: {
          marginRight: '5px',
        },
      },
      md: {
        container: {
          paddingX: '9px',
          paddingY: '2px',
        },
        label: {
          fontSize: '14px',
          lineHeight: '20px',
        },
        closeButton: {
          width: '12px',
          height: '12px',
          marginLeft: '5px',
          padding: '2px',
        },
        indicator: {
          marginRight: '6px',
        },
      },
      lg: {
        container: {
          paddingX: '10px',
          paddingY: '4px',
        },
        label: {
          fontSize: '14px',
          lineHeight: '20px',
        },
        closeButton: {
          width: '14px',
          height: '14px',
          marginLeft: '6px',
          padding: '3px',
        },
        indicator: {
          marginRight: '7px',
        },
      },
    },
    defaultProps: {
      size: 'md',
      variant: 'hds',
    },
  };

  return {components: {Tag}};
}
