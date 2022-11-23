'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('@chakra-ui/react');
var React = require('react');
var React__default = _interopDefault(React);
var icons = require('@chakra-ui/icons');
var hdsIcons = require('@highoutput/hds-icons');
var merge = _interopDefault(require('lodash/merge'));
var react$1 = require('@emotion/react');
var framerMotion = require('framer-motion');

var Button = function Button(props) {
  var uid = React.useId();
  return React__default.createElement(react.Button, Object.assign({}, props, {
    "data-testid": uid + "-button"
  }), props.children);
};

var CloseButton = function CloseButton(props) {
  var disabled = props.disabled,
    variant = props.variant,
    size = props.size,
    onClicked = props.onClicked;
  return React__default.createElement(react.Button, {
    size: size != null ? size : 'button-close-sm',
    variant: variant != null ? variant : 'solid-close-btn',
    isDisabled: disabled,
    "data-testid": "close.btn",
    onClick: onClicked
  }, React__default.createElement(react.Icon, {
    as: icons.CloseIcon
  }));
};

var SocialButton = function SocialButton(props) {
  var disabled = props.disabled,
    _props$type = props.type,
    type = _props$type === void 0 ? 'google' : _props$type,
    variant = props.variant,
    buttonText = props.buttonText,
    onClicked = props.onClicked;
  var useIcon = function useIcon() {
    switch (type) {
      case 'apple':
        return React__default.createElement(hdsIcons.AppleIcon, {
          isDisabled: disabled,
          variant: variant
        });
      case 'dribble':
        return React__default.createElement(hdsIcons.DribbleIcon, {
          isDisabled: disabled,
          variant: variant
        });
      case 'facebook':
        return React__default.createElement(hdsIcons.FacebookIcon, {
          isDisabled: disabled,
          variant: variant
        });
      case 'figma':
        return React__default.createElement(hdsIcons.FigmaIcon, {
          isDisabled: disabled
        });
      case 'google':
        return React__default.createElement(hdsIcons.GoogleIcon, {
          isDisabled: disabled
        });
      case 'twitter':
        return React__default.createElement(hdsIcons.TwitterIcon, {
          isDisabled: disabled,
          variant: variant
        });
    }
  };
  var defaultStyle = {
    google: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : 'white',
      color: 'black',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#F9FAFB',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : 'white',
        border: '1px solid #D0D5DD',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
      }
    },
    facebook: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : '#1877F2',
      color: variant === 'outline' ? 'black' : 'white',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#0C63D4',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : '#1877F2',
        border: '1px solid #D0D5DD',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
      }
    },
    figma: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : '#000000',
      color: variant === 'outline' ? 'black' : 'white',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#000000',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : '#000000',
        border: '1px solid #D0D5DD',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      }
    },
    apple: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : '#000000',
      color: variant === 'outline' ? 'black' : 'white',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#000000',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : '#000000',
        border: '1px solid #D0D5DD',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
      }
    },
    dribble: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : '#EA4C89',
      color: variant === 'outline' ? 'black' : 'white',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#EA4C89',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : '#E62872',
        border: '1px solid #D0D5DD',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
      }
    },
    twitter: {
      border: '1px solid #D0D5DD',
      bg: variant === 'outline' ? 'white' : '#1DA1F2',
      color: variant === 'outline' ? 'black' : 'white',
      borderRadius: '4px',
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'Inter',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      _hover: {
        bg: variant === 'outline' ? 'white' : '#0C63D4',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        _disabled: {
          bg: 'none',
          boxShadow: 'none'
        }
      },
      _active: {
        bg: variant === 'outline' ? 'white' : '#0C8BD9',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F2F4F7'
      }
    }
  };
  return React__default.createElement(React__default.Fragment, null, buttonText ? React__default.createElement(react.Button, Object.assign({
    p: "10px 16px",
    height: '44px'
  }, defaultStyle[type], {
    leftIcon: useIcon(),
    variant: variant,
    isDisabled: disabled,
    "data-testid": type + ".social.btn",
    onClick: onClicked
  }), buttonText) : React__default.createElement(react.IconButton, Object.assign({}, defaultStyle[type], {
    width: '44px',
    height: '44px',
    "data-testid": type + ".social.btn",
    "aria-label": "btn-" + useIcon(),
    disabled: disabled,
    icon: useIcon(),
    onClick: onClicked
  })));
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var colors = {
  'alpha.white': {
    500: '#FFFFFF'
  },
  'alpha.black': {
    500: '#000000'
  },
  'canvas.light': {
    500: '#E5E5E5'
  },
  'canvas.dark': {
    500: '#1F1E1F'
  },
  'brand.primary': {
    900: '#414180',
    800: '#5353A3',
    700: '#7070DD',
    600: '#C0C0FC',
    500: '#E3E3FC'
  },
  'brand.secondary': {
    900: '#57805D',
    800: '#62A36B',
    700: '#BAEFC2',
    600: '#DEFCE3',
    500: '#F2FCF4'
  },
  'brand.tertiary': {
    900: '#295580',
    800: '#346DA3',
    700: '#75AEE4',
    600: '#CAE5FC',
    500: '#E8F3FC'
  },
  neutrals: {
    900: '#0F0F0F',
    800: '#2E2E2E',
    700: '#525252',
    600: '#7A7A7A',
    500: '#A3A3A3',
    400: '#B8B8B8',
    300: '#D1D1D1',
    200: '#E6E6E6',
    100: '#FAFAFA'
  },
  'interface.error': {
    900: '#800C05',
    800: '#9E241C',
    700: '#DC180C',
    600: '#FCD2CF',
    500: '#FCEAE8'
  },
  'interface.success': {
    900: '#008005',
    800: '#139E19',
    700: '#00C408',
    600: '#A3F0A7',
    500: '#E8FCE9'
  },
  'interface.warning': {
    900: '#CC8900',
    800: '#E59A00',
    700: '#FFAB00',
    600: '#FCDFA2',
    500: '#FCEFD4'
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D'
  },
  green: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B'
  },
  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#374151',
    800: '#1F2937',
    900: '#111827'
  }
};

var Text = {
  sizes: {
    /* Headers */
    'header-1': {
      fontSize: '80px',
      fontWeight: 'bold',
      lineHeight: '88px',
      letterSpacing: '-0.02em'
    },
    'header-2': {
      fontSize: '56px',
      fontWeight: 'bold',
      lineHeight: '64px',
      letterSpacing: '-0.02em'
    },
    'header-3': {
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: '44px',
      letterSpacing: '-0.02em'
    },
    'header-4': {
      fontSize: '32px',
      fontWeight: 'medium',
      lineHeight: '36px',
      letterSpacing: '-0.015em'
    },
    'header-5': {
      fontSize: '24px',
      fontWeight: 'medium',
      lineHeight: '28px',
      letterSpacing: '-0.015em'
    },
    'header-6': {
      fontSize: '20px',
      fontWeight: 'medium',
      lineHeight: '24px',
      letterSpacing: '-0.015em'
    },
    /* Paragraphs */
    'paragraph-xxl-default': {
      fontSize: '32px',
      lineHeight: '48px'
    },
    'paragraph-xl-default': {
      fontSize: '24px',
      lineHeight: '36px'
    },
    'paragraph-lg-default': {
      fontSize: '20px',
      lineHeight: '32px'
    },
    'paragraph-md-default': {
      fontSize: '18px',
      lineHeight: '28px'
    },
    'paragraph-sm-default': {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.02em'
    },
    'paragraph-xs-default': {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.02em'
    },
    /* Labels */
    'label-xl-default': {
      fontSize: '32px',
      lineHeight: '32px'
    },
    'label-lg-default': {
      fontSize: '28px',
      lineHeight: '28px'
    },
    'label-md-default': {
      fontSize: '20px',
      lineHeight: '20px'
    },
    'label-sm-default': {
      fontSize: '18px',
      lineHeight: '18px'
    },
    'label-xs-default': {
      fontSize: '14px',
      lineHeight: '14px',
      letterSpacing: '0.02em'
    },
    'label-xxs-default': {
      fontSize: '12px',
      lineHeight: '12px',
      letterSpacing: '0.02em'
    },
    /* Buttons */
    'button-default': {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 500
    },
    'button-uppercase': {
      fontSize: '18px',
      lineHeight: '18px',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'uppercase'
    }
  }
};

var Box = {
  baseStyle: {},
  variants: {},
  sizes: Text.sizes
};

var buttonSizes = {
  sm: {
    p: '8px 14px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.02em'
  },
  md: {
    p: '10px 16px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.02em'
  },
  lg: {
    p: '10px 18px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px'
  },
  xl: {
    p: '12px 20px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '20px'
  },
  '2xl': {
    p: '16px 28px',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px'
  },
  'button-close-sm': {
    width: '36px',
    height: '36px'
  },
  'button-close-md': {
    width: '40px',
    height: '40px'
  },
  'button-close-lg': {
    width: '44px',
    height: '44px'
  }
};

var buttonVariants = {
  'solid-primary': {
    bg: 'brand.primary.700',
    color: 'neutrals.100',
    borderRadius: '4px',
    border: '1px solid #7070DD',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      _disabled: {
        bg: 'brand.primary.500',
        border: 'none',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
    _active: {
      bg: 'brand.primary.900',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: 'brand.primary.500',
      border: 'none',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'outline-primary': {
    color: 'neutrals.700',
    bg: 'white',
    border: '1px solid #D1D1D1',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '4px',
    _hover: {
      bg: '#FFFFFF',
      _disabled: {
        bg: '#FFFFFF',
        border: '1px solid #D1D1D1',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      },
      border: '1px solid #D1D1D1'
    },
    _active: {
      bg: '#FFFFFF',
      border: '1px solid #D1D1D1',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: '#FFFFFF',
      border: '1px solid #D1D1D1',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'ghost-primary': {
    color: 'brand.primary.700',
    bg: '#E3E3FC',
    border: '1px solid #E3E3FC',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '4px',
    _hover: {
      bg: '#E3E3FC',
      _disabled: {
        bg: '#E3E3FC',
        border: '1px solid #E3E3FC',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
    _active: {
      bg: '#C0C0FC',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: '#E3E3FC',
      border: '1px solid #E3E3FC',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'solid-error': {
    bg: 'interface.error.700',
    color: 'neutrals.100',
    borderRadius: '4px',
    border: '1px solid #DC180C',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      bg: 'interface.error.700',
      border: '1px solid #DC180C',
      _disabled: {
        bg: '#FCEAE8',
        border: '1px solid #FCEAE8',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
    _active: {
      bg: 'interface.error.900',
      border: '1px solid #800C05',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: '#FCEAE8',
      border: '1px solid #FCEAE8',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'outline-error': {
    bg: 'white',
    color: '#DC180C',
    borderRadius: '4px',
    border: '1px solid #DC180C',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      bg: 'white',
      border: '1px solid #DC180C',
      _disabled: {
        bg: '#FFFFFF',
        border: '1px solid #FCD2CF',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
    _active: {
      bg: 'interface.error.500',
      border: '1px solid #800C05',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: '#FFFFFF',
      border: '1px solid #FCD2CF',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'ghost-error': {
    bg: 'interface.error.500',
    color: 'interface.error.700',
    borderRadius: '4px',
    border: '1px solid #FCEAE8',
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    _hover: {
      bg: 'interface.error.500',
      border: '1px solid #FCEAE8',
      _disabled: {
        bg: 'rgba(252, 234, 232, 0.5)',
        border: '1px solid rgba(252, 234, 232, 0.5)',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    },
    _active: {
      bg: ' rgba(220, 24, 12, 0.15)',
      border: '1px solid #FCEAE8',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    },
    _disabled: {
      bg: 'rgba(252, 234, 232, 0.5)',
      border: '1px solid rgba(252, 234, 232, 0.5)',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)'
    }
  },
  'solid-close-btn': {
    bg: 'brand.primary.700',
    borderRadius: '4px',
    _hover: {
      _disabled: {
        bg: 'brand.primary.500'
      }
    },
    _disabled: {
      bg: 'transparent'
    }
  },
  'outline-close-btn': {
    color: 'neutrals.600',
    _hover: {
      color: 'neutrals.700'
    },
    _focus: {
      color: 'neutrals.600'
    }
  },
  'ghost-close-btn': {
    bg: 'transparent',
    borderRadius: '4px',
    color: 'brand.primary.700',
    _hover: {
      bg: 'rgba(227, 227, 252, 0.5)',
      color: 'brand.primary.900'
    },
    _focused: {
      bg: 'rgba(227, 227, 252, 0.5)',
      color: 'brand.primary.700'
    }
  }
};

var Button$1 = {
  baseStyle: {
    _focus: {
      boxShadow: 'none'
    },
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '8px',
    color: 'neutrals.100',
    outline: 'none'
  },
  sizes: buttonSizes,
  variants: /*#__PURE__*/_extends({
    primary: {
      color: 'neutrals.100',
      bg: 'brand.primary.700',
      p: '8px 14px',
      borderRadius: '8px',
      _hover: {
        bg: 'brand.primary.700',
        _disabled: {
          bg: 'brand.primary.500'
        }
      },
      _disabled: {
        bg: 'brand.primary.500'
      }
    }
  }, buttonVariants),
  defaultProps: {
    variant: 'primary'
  }
};

var Checkbox = {
  baseStyle: {
    control: {
      borderColor: 'neutrals.300',
      borderRadius: 'base',
      padding: '6px',
      _focus: {
        boxShadow: '0px 0px 0px 4px #F4EBFF'
      },
      bg: 'alpha.white.500',
      _disabled: {
        borderColor: 'neutrals.200',
        bg: 'neutrals.100',
        _checked: {
          borderColor: 'neutrals.200',
          bg: 'neutrals.100',
          color: 'neutrals.200'
        }
      }
    }
  },
  sizes: {
    sm: {
      control: {
        w: '16px',
        h: '16px'
      }
    },
    md: {
      control: {
        w: '20px',
        h: '20px'
      }
    },
    lg: {
      control: {
        w: '24px',
        h: '24px'
      }
    }
  },
  variants: {
    'primary.outlined': {
      control: {
        pointerEvents: 'none',
        _checked: {
          bg: 'brand.primary.500',
          color: 'brand.primary.700',
          borderColor: 'brand.primary.700',
          border: '1px solid'
        }
      }
    },
    'primary.solid': {
      control: {
        pointerEvents: 'none',
        _checked: {
          bg: 'brand.primary.700',
          color: 'alpha.white.500',
          borderColor: 'brand.primary.700',
          border: '1px solid'
        }
      }
    }
  },
  defaultProps: {
    variant: 'primary.outlined',
    size: 'sm'
  }
};

var Drawer = {
  parts: ['closeButton'],
  baseStyle: {
    closeButton: {
      _focus: {
        boxShadow: 'none'
      },
      color: 'gray.800'
    }
  }
};

var Flex = {
  baseStyle: {},
  variants: {}
};

var Form = {
  parts: ['formLabel', 'formInput', 'formTextarea', 'formHelperText', 'formErrorMessage'],
  baseStyle: {
    formLabel: {
      size: 'label-xs-medium',
      color: 'neutrals.900'
    },
    formInput: {
      size: 'paragraph-sm-default',
      padding: '8px 14px',
      _placeholder: {
        color: 'neutrals.500'
      },
      _focus: {
        border: '1px solid',
        borderColor: 'brand.primary.700'
      },
      _focusVisible: {
        outline: 'none'
      },
      _hover: {
        border: '1px solid',
        borderColor: 'brand.primary.700'
      },
      _disabled: {
        bgColor: 'neutrals.100',
        borderColor: 'neutrals.200'
      },
      border: '1px solid',
      borderColor: 'neutrals.200'
    },
    formTextarea: {
      size: 'paragraph-sm-default',
      _placeholder: {
        color: 'neutrals.500'
      },
      _hover: {
        border: '1px solid',
        borderColor: 'brand.primary.700'
      },
      padding: '14px 10px',
      _focus: {
        border: '1px solid',
        borderColor: 'brand.primary.700'
      },
      _focusVisible: {
        outline: 'none'
      }
    },
    formHelperText: {
      size: 'label-xs-default',
      mt: '6px',
      color: 'neutrals.700'
    },
    formErrorMessage: {
      size: 'label-xs-default',
      mt: '6px',
      color: 'interface.error.700'
    }
  },
  sizes: {
    formLabel: Text.sizes
  },
  variants: {
    outline: {
      formInput: {
        height: '44px',
        bgColor: 'alpha.white.500',
        borderColor: 'neutrals.200',
        border: '1px solid',
        _focus: {
          border: '1px solid',
          borderColor: 'brand.primary.700'
        },
        _focusVisible: {
          outline: 'none'
        },
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        borderRadius: '8px',
        color: 'neutrals.900',
        _invalid: {
          border: '1px solid',
          borderColor: 'interface.error.700',
          _focus: {
            border: '1px solid',
            borderColor: 'interface.error.700'
          }
        }
      },
      formTextarea: {
        mt: '6px',
        size: 'paragraph-sm-default',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        border: '1px solid',
        borderColor: 'neutrals.300',
        color: 'neutrals.900',
        borderRadius: '8px',
        _focus: {
          border: '1px solid',
          borderColor: 'brand.primary.700'
        },
        _focusVisible: {
          outline: 'none'
        },
        _invalid: {
          border: '1px solid',
          borderColor: 'interface.error.700',
          _focus: {
            borderColor: 'interface.error.700',
            border: '1px solid'
          }
        }
      }
    },
    flushed: {
      formInput: {
        height: '44px',
        bgColor: 'alpha.white.500',
        borderBottomColor: 'neutrals.200',
        borderBottom: '1px solid',
        _focus: {
          borderBottom: '1px solid',
          borderBottomColor: 'brand.primary.700'
        },
        borderRadius: '0px',
        color: 'neutrals.900',
        _invalid: {
          borderBottom: '1px solid',
          borderBottomColor: 'interface.error.700',
          _focus: {
            borderBottom: '1px solid',
            borderBottomColor: 'interface.error.700'
          }
        }
      },
      formTextarea: {
        mt: '6px',
        size: 'paragraph-sm-default',
        borderBottom: '1px solid',
        borderBottomColor: 'neutrals.300',
        color: 'neutrals.900',
        borderRadius: '0px',
        _invalid: {
          borderBottom: '1px solid',
          borderBottomColor: 'interface.error.700',
          _focus: {
            borderBottomColor: 'interface.error.700',
            borderBottom: '1px solid'
          }
        }
      }
    },
    filled: {
      formInput: {
        height: '44px',
        bgColor: 'brand.primary.500',
        _focus: {
          bgColor: 'transparent'
        },
        borderRadius: '8px',
        color: 'neutrals.900',
        _invalid: {
          border: '1px solid',
          borderColor: 'interface.error.700',
          _focus: {
            border: '1px solid',
            borderColor: 'interface.error.700'
          }
        }
      },
      formTextarea: {
        mt: '6px',
        color: 'neutrals.900',
        borderRadius: '8px',
        bgColor: 'brand.primary.500',
        _focus: {
          bgColor: 'transparent'
        },
        _invalid: {
          borderBottom: '1px solid',
          borderBottomColor: 'interface.error.700',
          _focus: {
            borderBottomColor: 'interface.error.700',
            borderBottom: '1px solid'
          }
        }
      }
    },
    unstyled: {
      formInput: {
        height: '44px',
        bgColor: 'transparent',
        border: '0px',
        color: 'neutrals.900',
        _invalid: {
          border: '1px solid',
          borderColor: 'interface.error.700',
          _focus: {
            border: '1px solid',
            borderColor: 'interface.error.700'
          }
        }
      },
      formTextarea: {
        mt: '6px',
        color: 'neutrals.900',
        bgColor: 'transparent',
        border: '0px',
        _invalid: {
          borderBottom: '1px solid',
          borderBottomColor: 'interface.error.700',
          _focus: {
            borderBottomColor: 'interface.error.700',
            borderBottom: '1px solid'
          }
        }
      }
    },
    'check-in-edit': {
      formInput: {
        height: '34px',
        _focus: {
          border: '2px solid',
          borderColor: 'brand.primary.700'
        },
        _invalid: {
          _focus: {
            border: '2px solid',
            borderColor: 'red.500'
          }
        }
      },
      formTextarea: {
        _focusVisible: {
          border: '2px solid',
          borderColor: 'brand.primary.700'
        },
        _invalid: {
          _focusVisible: {
            border: '2px solid',
            borderColor: 'red.500'
          }
        },
        fontSize: '14px'
      }
    },
    'check-in': {
      formInput: {
        border: 'none',
        _focus: {
          border: '2px solid !important',
          borderColor: '#FFC107 !important'
        },
        _hover: {
          border: '1px dashed',
          borderColor: 'gray.400'
        }
      },
      formTextarea: {
        _focusVisible: {
          border: '2px solid',
          borderColor: 'brand.primary.700'
        },
        _invalid: {
          _focusVisible: {
            border: '2px solid',
            borderColor: 'red.500'
          }
        },
        fontSize: '14px'
      }
    }
  },
  defaultProps: {
    variant: 'outline'
  }
};

var Heading = {
  sizes: Text.sizes
};

var Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'underline'
    }
  },
  sizes: Text.sizes,
  variants: {
    primary: {
      fontWeight: 'medium',
      color: 'brand.primary.700'
    },
    orange: {
      fontWeight: 'medium',
      color: 'orange.500'
    }
  }
};

var PinInputField = {
  baseStyle: {
    _placeholder: {
      color: 'neutrals.500'
    },
    fontSize: '44px',
    _focusVisible: {
      outline: 'none',
      borderColor: 'brand.primary.500'
    },
    border: '1px solid',
    bgColor: 'alpha.white.500',
    textAlign: 'center',
    borderColor: 'brand.primary.500',
    color: 'brand.primary.700'
  },
  sizes: {
    sm: {
      h: '64px',
      w: '64px',
      borderRadius: 'sm'
    },
    md: {
      h: '80px',
      w: '80px',
      borderRadius: 'md'
    },
    lg: {
      h: '96px',
      w: '96px',
      borderRadius: 'lg'
    }
  },
  variants: {
    outline: {
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      borderRadius: '8px',
      _focus: {
        borderColor: 'brand.primary.500',
        caretColor: 'black',
        boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)'
      }
    },
    flushed: {
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      border: '0px',
      borderRadius: '0px',
      borderBottom: '1px solid',
      borderBottomColor: 'brand.primary.500',
      _focus: {
        borderColor: 'brand.primary.500',
        caretColor: 'black',
        boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)'
      }
    },
    filled: {
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      borderRadius: '8px',
      _focus: {
        borderColor: 'brand.primary.500',
        caretColor: 'black',
        bgColor: 'alpha.white.500',
        boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)'
      },
      bgColor: 'brand.primary.500'
    },
    unstyled: {
      bgColor: 'transparent',
      border: '0px',
      _focus: {
        caretColor: 'black'
      }
    }
  },
  defaultProps: {
    size: 'sm',
    variant: 'outline'
  }
};

var RadioImage = {
  baseStyle: function baseStyle() {
    return {
      padding: 1,
      borderRadius: 180,
      w: 14,
      color: 'brand.primary.700'
    };
  },
  variants: {
    primary: function primary() {
      return {
        padding: 1,
        color: 'brand.primary.700'
      };
    }
  }
};

var Select = {
  parts: ['icon'],
  baseStyle: {
    icon: {
      color: 'gray.400'
    }
  }
};

var Stack = {
  baseStyle: {
    spacing: 4,
    p: 0
  },
  variants: {}
};

var Switch = {
  baseStyle: {
    track: {
      _focus: {
        boxShadow: 'none'
      }
    }
  },
  variants: {
    primary: {
      track: {
        _checked: {
          bg: 'brand.primary.700'
        }
      }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};

var Tabs = {
  parts: ['tab', 'tabpanel', 'tablist'],
  baseStyle: {
    root: {
      w: 'full',
      mt: 6
    },
    tab: {
      fontWeight: 'semibold',
      color: 'gray.500',
      marginRight: 4
    },
    tabpanel: {
      p: 0,
      mt: 4,
      mb: 12
    }
  },
  variants: {
    primary: {
      tab: {
        _selected: {
          paddingBottom: '6px',
          borderBottom: '2px solid',
          borderBottomColor: 'brand.primary.700',
          color: 'gray.800',
          fontWeight: 'semibold'
        },
        _focus: {
          boxShadow: 'none'
        },
        marginBottom: '-2px'
      },
      tablist: {
        borderBottom: '1px solid',
        borderBottomColor: 'gray.100'
      }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};

var components = {
  Box: Box,
  Stack: Stack,
  Button: Button$1,
  Checkbox: Checkbox,
  Link: Link,
  Form: Form,
  Heading: Heading,
  Switch: Switch,
  Tabs: Tabs,
  Flex: Flex,
  Text: Text,
  Drawer: Drawer,
  Select: Select,
  RadioImage: RadioImage,
  PinInputField: PinInputField
};

var config = {};

var fonts = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif'
};

var fontSizes = {
  '2xs': '10px',
  '3xs': '8px'
};

var styles = {
  global: {
    html: {
      scrollBehavior: 'smooth'
    },
    body: {
      minH: '100vh',
      color: 'neutrals.900',
      bgColor: 'white',
      scrollBehavior: 'smooth'
    }
  }
};

var zIndices = {
  commentDrawer: 1450,
  commentOverlay: 1400
};

var theme = /*#__PURE__*/react.extendTheme({
  config: config,
  styles: styles,
  colors: colors,
  fonts: fonts,
  fontSizes: fontSizes,
  components: components,
  zIndices: zIndices
});

var extendTheme = function extendTheme(customTheme) {
  return react.extendTheme(merge(theme, customTheme));
};

var Fonts = function Fonts() {
  return React__default.createElement(react$1.Global, {
    styles: "\n    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');\n      "
  });
};

var _excluded = ["children"];
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React__default.createElement(react.ChakraProvider, Object.assign({}, props, {
    theme: extendTheme(props.theme)
  }), React__default.createElement(Fonts, null), children);
};

Object.defineProperty(exports, 'Accordion', {
  enumerable: true,
  get: function () {
    return react.Accordion;
  }
});
Object.defineProperty(exports, 'AccordionButton', {
  enumerable: true,
  get: function () {
    return react.AccordionButton;
  }
});
Object.defineProperty(exports, 'AccordionIcon', {
  enumerable: true,
  get: function () {
    return react.AccordionIcon;
  }
});
Object.defineProperty(exports, 'AccordionItem', {
  enumerable: true,
  get: function () {
    return react.AccordionItem;
  }
});
Object.defineProperty(exports, 'AccordionPanel', {
  enumerable: true,
  get: function () {
    return react.AccordionPanel;
  }
});
Object.defineProperty(exports, 'Alert', {
  enumerable: true,
  get: function () {
    return react.Alert;
  }
});
Object.defineProperty(exports, 'AlertDescription', {
  enumerable: true,
  get: function () {
    return react.AlertDescription;
  }
});
Object.defineProperty(exports, 'AlertDialog', {
  enumerable: true,
  get: function () {
    return react.AlertDialog;
  }
});
Object.defineProperty(exports, 'AlertDialogBody', {
  enumerable: true,
  get: function () {
    return react.AlertDialogBody;
  }
});
Object.defineProperty(exports, 'AlertDialogCloseButton', {
  enumerable: true,
  get: function () {
    return react.AlertDialogCloseButton;
  }
});
Object.defineProperty(exports, 'AlertDialogContent', {
  enumerable: true,
  get: function () {
    return react.AlertDialogContent;
  }
});
Object.defineProperty(exports, 'AlertDialogFooter', {
  enumerable: true,
  get: function () {
    return react.AlertDialogFooter;
  }
});
Object.defineProperty(exports, 'AlertDialogHeader', {
  enumerable: true,
  get: function () {
    return react.AlertDialogHeader;
  }
});
Object.defineProperty(exports, 'AlertDialogOverlay', {
  enumerable: true,
  get: function () {
    return react.AlertDialogOverlay;
  }
});
Object.defineProperty(exports, 'AlertIcon', {
  enumerable: true,
  get: function () {
    return react.AlertIcon;
  }
});
Object.defineProperty(exports, 'AlertTitle', {
  enumerable: true,
  get: function () {
    return react.AlertTitle;
  }
});
Object.defineProperty(exports, 'AspectRatio', {
  enumerable: true,
  get: function () {
    return react.AspectRatio;
  }
});
Object.defineProperty(exports, 'Avatar', {
  enumerable: true,
  get: function () {
    return react.Avatar;
  }
});
Object.defineProperty(exports, 'AvatarBadge', {
  enumerable: true,
  get: function () {
    return react.AvatarBadge;
  }
});
Object.defineProperty(exports, 'AvatarGroup', {
  enumerable: true,
  get: function () {
    return react.AvatarGroup;
  }
});
Object.defineProperty(exports, 'Badge', {
  enumerable: true,
  get: function () {
    return react.Badge;
  }
});
Object.defineProperty(exports, 'Box', {
  enumerable: true,
  get: function () {
    return react.Box;
  }
});
Object.defineProperty(exports, 'Breadcrumb', {
  enumerable: true,
  get: function () {
    return react.Breadcrumb;
  }
});
Object.defineProperty(exports, 'BreadcrumbItem', {
  enumerable: true,
  get: function () {
    return react.BreadcrumbItem;
  }
});
Object.defineProperty(exports, 'BreadcrumbLink', {
  enumerable: true,
  get: function () {
    return react.BreadcrumbLink;
  }
});
Object.defineProperty(exports, 'BreadcrumbSeparator', {
  enumerable: true,
  get: function () {
    return react.BreadcrumbSeparator;
  }
});
Object.defineProperty(exports, 'ButtonGroup', {
  enumerable: true,
  get: function () {
    return react.ButtonGroup;
  }
});
Object.defineProperty(exports, 'ButtonSpinner', {
  enumerable: true,
  get: function () {
    return react.ButtonSpinner;
  }
});
Object.defineProperty(exports, 'Center', {
  enumerable: true,
  get: function () {
    return react.Center;
  }
});
Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function () {
    return react.Checkbox;
  }
});
Object.defineProperty(exports, 'CheckboxGroup', {
  enumerable: true,
  get: function () {
    return react.CheckboxGroup;
  }
});
Object.defineProperty(exports, 'CheckboxIcon', {
  enumerable: true,
  get: function () {
    return react.CheckboxIcon;
  }
});
Object.defineProperty(exports, 'Circle', {
  enumerable: true,
  get: function () {
    return react.Circle;
  }
});
Object.defineProperty(exports, 'CircularProgress', {
  enumerable: true,
  get: function () {
    return react.CircularProgress;
  }
});
Object.defineProperty(exports, 'CircularProgressLabel', {
  enumerable: true,
  get: function () {
    return react.CircularProgressLabel;
  }
});
Object.defineProperty(exports, 'Collapse', {
  enumerable: true,
  get: function () {
    return react.Collapse;
  }
});
Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function () {
    return react.Container;
  }
});
Object.defineProperty(exports, 'Divider', {
  enumerable: true,
  get: function () {
    return react.Divider;
  }
});
Object.defineProperty(exports, 'Drawer', {
  enumerable: true,
  get: function () {
    return react.Drawer;
  }
});
Object.defineProperty(exports, 'DrawerBody', {
  enumerable: true,
  get: function () {
    return react.DrawerBody;
  }
});
Object.defineProperty(exports, 'DrawerCloseButton', {
  enumerable: true,
  get: function () {
    return react.DrawerCloseButton;
  }
});
Object.defineProperty(exports, 'DrawerContent', {
  enumerable: true,
  get: function () {
    return react.DrawerContent;
  }
});
Object.defineProperty(exports, 'DrawerFooter', {
  enumerable: true,
  get: function () {
    return react.DrawerFooter;
  }
});
Object.defineProperty(exports, 'DrawerHeader', {
  enumerable: true,
  get: function () {
    return react.DrawerHeader;
  }
});
Object.defineProperty(exports, 'DrawerOverlay', {
  enumerable: true,
  get: function () {
    return react.DrawerOverlay;
  }
});
Object.defineProperty(exports, 'Fade', {
  enumerable: true,
  get: function () {
    return react.Fade;
  }
});
Object.defineProperty(exports, 'Flex', {
  enumerable: true,
  get: function () {
    return react.Flex;
  }
});
Object.defineProperty(exports, 'FormControl', {
  enumerable: true,
  get: function () {
    return react.FormControl;
  }
});
Object.defineProperty(exports, 'FormErrorIcon', {
  enumerable: true,
  get: function () {
    return react.FormErrorIcon;
  }
});
Object.defineProperty(exports, 'FormErrorMessage', {
  enumerable: true,
  get: function () {
    return react.FormErrorMessage;
  }
});
Object.defineProperty(exports, 'FormHelperText', {
  enumerable: true,
  get: function () {
    return react.FormHelperText;
  }
});
Object.defineProperty(exports, 'FormLabel', {
  enumerable: true,
  get: function () {
    return react.FormLabel;
  }
});
Object.defineProperty(exports, 'GlobalStyle', {
  enumerable: true,
  get: function () {
    return react.GlobalStyle;
  }
});
Object.defineProperty(exports, 'Grid', {
  enumerable: true,
  get: function () {
    return react.Grid;
  }
});
Object.defineProperty(exports, 'GridItem', {
  enumerable: true,
  get: function () {
    return react.GridItem;
  }
});
Object.defineProperty(exports, 'HStack', {
  enumerable: true,
  get: function () {
    return react.HStack;
  }
});
Object.defineProperty(exports, 'Heading', {
  enumerable: true,
  get: function () {
    return react.Heading;
  }
});
Object.defineProperty(exports, 'Hide', {
  enumerable: true,
  get: function () {
    return react.Hide;
  }
});
Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function () {
    return react.Icon;
  }
});
Object.defineProperty(exports, 'IconButton', {
  enumerable: true,
  get: function () {
    return react.IconButton;
  }
});
Object.defineProperty(exports, 'Image', {
  enumerable: true,
  get: function () {
    return react.Image;
  }
});
Object.defineProperty(exports, 'Img', {
  enumerable: true,
  get: function () {
    return react.Img;
  }
});
Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function () {
    return react.Input;
  }
});
Object.defineProperty(exports, 'InputAddon', {
  enumerable: true,
  get: function () {
    return react.InputAddon;
  }
});
Object.defineProperty(exports, 'InputGroup', {
  enumerable: true,
  get: function () {
    return react.InputGroup;
  }
});
Object.defineProperty(exports, 'InputLeftAddon', {
  enumerable: true,
  get: function () {
    return react.InputLeftAddon;
  }
});
Object.defineProperty(exports, 'InputLeftElement', {
  enumerable: true,
  get: function () {
    return react.InputLeftElement;
  }
});
Object.defineProperty(exports, 'InputRightAddon', {
  enumerable: true,
  get: function () {
    return react.InputRightAddon;
  }
});
Object.defineProperty(exports, 'InputRightElement', {
  enumerable: true,
  get: function () {
    return react.InputRightElement;
  }
});
Object.defineProperty(exports, 'Kbd', {
  enumerable: true,
  get: function () {
    return react.Kbd;
  }
});
Object.defineProperty(exports, 'LightMode', {
  enumerable: true,
  get: function () {
    return react.LightMode;
  }
});
Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function () {
    return react.Link;
  }
});
Object.defineProperty(exports, 'LinkBox', {
  enumerable: true,
  get: function () {
    return react.LinkBox;
  }
});
Object.defineProperty(exports, 'LinkOverlay', {
  enumerable: true,
  get: function () {
    return react.LinkOverlay;
  }
});
Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function () {
    return react.List;
  }
});
Object.defineProperty(exports, 'ListIcon', {
  enumerable: true,
  get: function () {
    return react.ListIcon;
  }
});
Object.defineProperty(exports, 'ListItem', {
  enumerable: true,
  get: function () {
    return react.ListItem;
  }
});
Object.defineProperty(exports, 'Menu', {
  enumerable: true,
  get: function () {
    return react.Menu;
  }
});
Object.defineProperty(exports, 'MenuButton', {
  enumerable: true,
  get: function () {
    return react.MenuButton;
  }
});
Object.defineProperty(exports, 'MenuDivider', {
  enumerable: true,
  get: function () {
    return react.MenuDivider;
  }
});
Object.defineProperty(exports, 'MenuGroup', {
  enumerable: true,
  get: function () {
    return react.MenuGroup;
  }
});
Object.defineProperty(exports, 'MenuItem', {
  enumerable: true,
  get: function () {
    return react.MenuItem;
  }
});
Object.defineProperty(exports, 'MenuItemOption', {
  enumerable: true,
  get: function () {
    return react.MenuItemOption;
  }
});
Object.defineProperty(exports, 'MenuList', {
  enumerable: true,
  get: function () {
    return react.MenuList;
  }
});
Object.defineProperty(exports, 'MenuOptionGroup', {
  enumerable: true,
  get: function () {
    return react.MenuOptionGroup;
  }
});
Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function () {
    return react.Modal;
  }
});
Object.defineProperty(exports, 'ModalBody', {
  enumerable: true,
  get: function () {
    return react.ModalBody;
  }
});
Object.defineProperty(exports, 'ModalCloseButton', {
  enumerable: true,
  get: function () {
    return react.ModalCloseButton;
  }
});
Object.defineProperty(exports, 'ModalContent', {
  enumerable: true,
  get: function () {
    return react.ModalContent;
  }
});
Object.defineProperty(exports, 'ModalContextProvider', {
  enumerable: true,
  get: function () {
    return react.ModalContextProvider;
  }
});
Object.defineProperty(exports, 'ModalFocusScope', {
  enumerable: true,
  get: function () {
    return react.ModalFocusScope;
  }
});
Object.defineProperty(exports, 'ModalFooter', {
  enumerable: true,
  get: function () {
    return react.ModalFooter;
  }
});
Object.defineProperty(exports, 'ModalHeader', {
  enumerable: true,
  get: function () {
    return react.ModalHeader;
  }
});
Object.defineProperty(exports, 'ModalOverlay', {
  enumerable: true,
  get: function () {
    return react.ModalOverlay;
  }
});
Object.defineProperty(exports, 'NumberDecrementStepper', {
  enumerable: true,
  get: function () {
    return react.NumberDecrementStepper;
  }
});
Object.defineProperty(exports, 'NumberIncrementStepper', {
  enumerable: true,
  get: function () {
    return react.NumberIncrementStepper;
  }
});
Object.defineProperty(exports, 'NumberInput', {
  enumerable: true,
  get: function () {
    return react.NumberInput;
  }
});
Object.defineProperty(exports, 'NumberInputField', {
  enumerable: true,
  get: function () {
    return react.NumberInputField;
  }
});
Object.defineProperty(exports, 'NumberInputStepper', {
  enumerable: true,
  get: function () {
    return react.NumberInputStepper;
  }
});
Object.defineProperty(exports, 'OrderedList', {
  enumerable: true,
  get: function () {
    return react.OrderedList;
  }
});
Object.defineProperty(exports, 'PinInput', {
  enumerable: true,
  get: function () {
    return react.PinInput;
  }
});
Object.defineProperty(exports, 'PinInputField', {
  enumerable: true,
  get: function () {
    return react.PinInputField;
  }
});
Object.defineProperty(exports, 'Popover', {
  enumerable: true,
  get: function () {
    return react.Popover;
  }
});
Object.defineProperty(exports, 'PopoverAnchor', {
  enumerable: true,
  get: function () {
    return react.PopoverAnchor;
  }
});
Object.defineProperty(exports, 'PopoverArrow', {
  enumerable: true,
  get: function () {
    return react.PopoverArrow;
  }
});
Object.defineProperty(exports, 'PopoverBody', {
  enumerable: true,
  get: function () {
    return react.PopoverBody;
  }
});
Object.defineProperty(exports, 'PopoverCloseButton', {
  enumerable: true,
  get: function () {
    return react.PopoverCloseButton;
  }
});
Object.defineProperty(exports, 'PopoverContent', {
  enumerable: true,
  get: function () {
    return react.PopoverContent;
  }
});
Object.defineProperty(exports, 'PopoverFooter', {
  enumerable: true,
  get: function () {
    return react.PopoverFooter;
  }
});
Object.defineProperty(exports, 'PopoverHeader', {
  enumerable: true,
  get: function () {
    return react.PopoverHeader;
  }
});
Object.defineProperty(exports, 'PopoverTrigger', {
  enumerable: true,
  get: function () {
    return react.PopoverTrigger;
  }
});
Object.defineProperty(exports, 'Portal', {
  enumerable: true,
  get: function () {
    return react.Portal;
  }
});
Object.defineProperty(exports, 'Progress', {
  enumerable: true,
  get: function () {
    return react.Progress;
  }
});
Object.defineProperty(exports, 'ProgressLabel', {
  enumerable: true,
  get: function () {
    return react.ProgressLabel;
  }
});
Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function () {
    return react.Radio;
  }
});
Object.defineProperty(exports, 'RadioGroup', {
  enumerable: true,
  get: function () {
    return react.RadioGroup;
  }
});
Object.defineProperty(exports, 'RangeSlider', {
  enumerable: true,
  get: function () {
    return react.RangeSlider;
  }
});
Object.defineProperty(exports, 'RangeSliderFilledTrack', {
  enumerable: true,
  get: function () {
    return react.RangeSliderFilledTrack;
  }
});
Object.defineProperty(exports, 'RangeSliderMark', {
  enumerable: true,
  get: function () {
    return react.RangeSliderMark;
  }
});
Object.defineProperty(exports, 'RangeSliderProvider', {
  enumerable: true,
  get: function () {
    return react.RangeSliderProvider;
  }
});
Object.defineProperty(exports, 'RangeSliderThumb', {
  enumerable: true,
  get: function () {
    return react.RangeSliderThumb;
  }
});
Object.defineProperty(exports, 'RangeSliderTrack', {
  enumerable: true,
  get: function () {
    return react.RangeSliderTrack;
  }
});
Object.defineProperty(exports, 'ScaleFade', {
  enumerable: true,
  get: function () {
    return react.ScaleFade;
  }
});
Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function () {
    return react.Select;
  }
});
Object.defineProperty(exports, 'Show', {
  enumerable: true,
  get: function () {
    return react.Show;
  }
});
Object.defineProperty(exports, 'SimpleGrid', {
  enumerable: true,
  get: function () {
    return react.SimpleGrid;
  }
});
Object.defineProperty(exports, 'Skeleton', {
  enumerable: true,
  get: function () {
    return react.Skeleton;
  }
});
Object.defineProperty(exports, 'SkeletonCircle', {
  enumerable: true,
  get: function () {
    return react.SkeletonCircle;
  }
});
Object.defineProperty(exports, 'SkeletonText', {
  enumerable: true,
  get: function () {
    return react.SkeletonText;
  }
});
Object.defineProperty(exports, 'Slide', {
  enumerable: true,
  get: function () {
    return react.Slide;
  }
});
Object.defineProperty(exports, 'SlideFade', {
  enumerable: true,
  get: function () {
    return react.SlideFade;
  }
});
Object.defineProperty(exports, 'Slider', {
  enumerable: true,
  get: function () {
    return react.Slider;
  }
});
Object.defineProperty(exports, 'SliderFilledTrack', {
  enumerable: true,
  get: function () {
    return react.SliderFilledTrack;
  }
});
Object.defineProperty(exports, 'SliderMark', {
  enumerable: true,
  get: function () {
    return react.SliderMark;
  }
});
Object.defineProperty(exports, 'SliderThumb', {
  enumerable: true,
  get: function () {
    return react.SliderThumb;
  }
});
Object.defineProperty(exports, 'SliderTrack', {
  enumerable: true,
  get: function () {
    return react.SliderTrack;
  }
});
Object.defineProperty(exports, 'Spacer', {
  enumerable: true,
  get: function () {
    return react.Spacer;
  }
});
Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function () {
    return react.Spinner;
  }
});
Object.defineProperty(exports, 'Square', {
  enumerable: true,
  get: function () {
    return react.Square;
  }
});
Object.defineProperty(exports, 'Stack', {
  enumerable: true,
  get: function () {
    return react.Stack;
  }
});
Object.defineProperty(exports, 'Stat', {
  enumerable: true,
  get: function () {
    return react.Stat;
  }
});
Object.defineProperty(exports, 'StatArrow', {
  enumerable: true,
  get: function () {
    return react.StatArrow;
  }
});
Object.defineProperty(exports, 'StatGroup', {
  enumerable: true,
  get: function () {
    return react.StatGroup;
  }
});
Object.defineProperty(exports, 'StatHelpText', {
  enumerable: true,
  get: function () {
    return react.StatHelpText;
  }
});
Object.defineProperty(exports, 'StatLabel', {
  enumerable: true,
  get: function () {
    return react.StatLabel;
  }
});
Object.defineProperty(exports, 'StatNumber', {
  enumerable: true,
  get: function () {
    return react.StatNumber;
  }
});
Object.defineProperty(exports, 'Switch', {
  enumerable: true,
  get: function () {
    return react.Switch;
  }
});
Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function () {
    return react.Tab;
  }
});
Object.defineProperty(exports, 'TabList', {
  enumerable: true,
  get: function () {
    return react.TabList;
  }
});
Object.defineProperty(exports, 'TabPanel', {
  enumerable: true,
  get: function () {
    return react.TabPanel;
  }
});
Object.defineProperty(exports, 'TabPanels', {
  enumerable: true,
  get: function () {
    return react.TabPanels;
  }
});
Object.defineProperty(exports, 'Table', {
  enumerable: true,
  get: function () {
    return react.Table;
  }
});
Object.defineProperty(exports, 'TableCaption', {
  enumerable: true,
  get: function () {
    return react.TableCaption;
  }
});
Object.defineProperty(exports, 'TableContainer', {
  enumerable: true,
  get: function () {
    return react.TableContainer;
  }
});
Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function () {
    return react.Tabs;
  }
});
Object.defineProperty(exports, 'Tag', {
  enumerable: true,
  get: function () {
    return react.Tag;
  }
});
Object.defineProperty(exports, 'TagCloseButton', {
  enumerable: true,
  get: function () {
    return react.TagCloseButton;
  }
});
Object.defineProperty(exports, 'TagLabel', {
  enumerable: true,
  get: function () {
    return react.TagLabel;
  }
});
Object.defineProperty(exports, 'TagLeftIcon', {
  enumerable: true,
  get: function () {
    return react.TagLeftIcon;
  }
});
Object.defineProperty(exports, 'TagRightIcon', {
  enumerable: true,
  get: function () {
    return react.TagRightIcon;
  }
});
Object.defineProperty(exports, 'Tbody', {
  enumerable: true,
  get: function () {
    return react.Tbody;
  }
});
Object.defineProperty(exports, 'Td', {
  enumerable: true,
  get: function () {
    return react.Td;
  }
});
Object.defineProperty(exports, 'Text', {
  enumerable: true,
  get: function () {
    return react.Text;
  }
});
Object.defineProperty(exports, 'Textarea', {
  enumerable: true,
  get: function () {
    return react.Textarea;
  }
});
Object.defineProperty(exports, 'Tfoot', {
  enumerable: true,
  get: function () {
    return react.Tfoot;
  }
});
Object.defineProperty(exports, 'Th', {
  enumerable: true,
  get: function () {
    return react.Th;
  }
});
Object.defineProperty(exports, 'Thead', {
  enumerable: true,
  get: function () {
    return react.Thead;
  }
});
Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function () {
    return react.Tooltip;
  }
});
Object.defineProperty(exports, 'Tr', {
  enumerable: true,
  get: function () {
    return react.Tr;
  }
});
Object.defineProperty(exports, 'UnorderedList', {
  enumerable: true,
  get: function () {
    return react.UnorderedList;
  }
});
Object.defineProperty(exports, 'VStack', {
  enumerable: true,
  get: function () {
    return react.VStack;
  }
});
Object.defineProperty(exports, 'Wrap', {
  enumerable: true,
  get: function () {
    return react.Wrap;
  }
});
Object.defineProperty(exports, 'WrapItem', {
  enumerable: true,
  get: function () {
    return react.WrapItem;
  }
});
Object.defineProperty(exports, 'createStandaloneToast', {
  enumerable: true,
  get: function () {
    return react.createStandaloneToast;
  }
});
Object.defineProperty(exports, 'forwardRef', {
  enumerable: true,
  get: function () {
    return react.forwardRef;
  }
});
Object.defineProperty(exports, 'hds', {
  enumerable: true,
  get: function () {
    return react.chakra;
  }
});
Object.defineProperty(exports, 'keyframes', {
  enumerable: true,
  get: function () {
    return react.keyframes;
  }
});
Object.defineProperty(exports, 'shouldShowFallbackImage', {
  enumerable: true,
  get: function () {
    return react.shouldShowFallbackImage;
  }
});
Object.defineProperty(exports, 'useBoolean', {
  enumerable: true,
  get: function () {
    return react.useBoolean;
  }
});
Object.defineProperty(exports, 'useBreakpoint', {
  enumerable: true,
  get: function () {
    return react.useBreakpoint;
  }
});
Object.defineProperty(exports, 'useBreakpointValue', {
  enumerable: true,
  get: function () {
    return react.useBreakpointValue;
  }
});
Object.defineProperty(exports, 'useButtonGroup', {
  enumerable: true,
  get: function () {
    return react.useButtonGroup;
  }
});
Object.defineProperty(exports, 'useCheckbox', {
  enumerable: true,
  get: function () {
    return react.useCheckbox;
  }
});
Object.defineProperty(exports, 'useCheckboxGroup', {
  enumerable: true,
  get: function () {
    return react.useCheckboxGroup;
  }
});
Object.defineProperty(exports, 'useClipboard', {
  enumerable: true,
  get: function () {
    return react.useClipboard;
  }
});
Object.defineProperty(exports, 'useColorModeValue', {
  enumerable: true,
  get: function () {
    return react.useColorModeValue;
  }
});
Object.defineProperty(exports, 'useConst', {
  enumerable: true,
  get: function () {
    return react.useConst;
  }
});
Object.defineProperty(exports, 'useDisclosure', {
  enumerable: true,
  get: function () {
    return react.useDisclosure;
  }
});
Object.defineProperty(exports, 'useImage', {
  enumerable: true,
  get: function () {
    return react.useImage;
  }
});
Object.defineProperty(exports, 'useInputGroupStyles', {
  enumerable: true,
  get: function () {
    return react.useInputGroupStyles;
  }
});
Object.defineProperty(exports, 'useMediaQuery', {
  enumerable: true,
  get: function () {
    return react.useMediaQuery;
  }
});
Object.defineProperty(exports, 'useMenuButton', {
  enumerable: true,
  get: function () {
    return react.useMenuButton;
  }
});
Object.defineProperty(exports, 'useModal', {
  enumerable: true,
  get: function () {
    return react.useModal;
  }
});
Object.defineProperty(exports, 'useMultiStyleConfig', {
  enumerable: true,
  get: function () {
    return react.useMultiStyleConfig;
  }
});
Object.defineProperty(exports, 'useOutsideClick', {
  enumerable: true,
  get: function () {
    return react.useOutsideClick;
  }
});
Object.defineProperty(exports, 'usePrefersReducedMotion', {
  enumerable: true,
  get: function () {
    return react.usePrefersReducedMotion;
  }
});
Object.defineProperty(exports, 'useRadio', {
  enumerable: true,
  get: function () {
    return react.useRadio;
  }
});
Object.defineProperty(exports, 'useRadioGroup', {
  enumerable: true,
  get: function () {
    return react.useRadioGroup;
  }
});
Object.defineProperty(exports, 'useSlider', {
  enumerable: true,
  get: function () {
    return react.useSlider;
  }
});
Object.defineProperty(exports, 'useStyleConfig', {
  enumerable: true,
  get: function () {
    return react.useStyleConfig;
  }
});
Object.defineProperty(exports, 'useTheme', {
  enumerable: true,
  get: function () {
    return react.useTheme;
  }
});
Object.defineProperty(exports, 'useToast', {
  enumerable: true,
  get: function () {
    return react.useToast;
  }
});
Object.defineProperty(exports, 'isValidMotionProp', {
  enumerable: true,
  get: function () {
    return framerMotion.isValidMotionProp;
  }
});
Object.defineProperty(exports, 'motion', {
  enumerable: true,
  get: function () {
    return framerMotion.motion;
  }
});
exports.Button = Button;
exports.CloseButton = CloseButton;
exports.SocialButton = SocialButton;
exports.ThemeProvider = ThemeProvider;
exports.extendTheme = extendTheme;
exports.theme = theme;
//# sourceMappingURL=hds.cjs.development.js.map
