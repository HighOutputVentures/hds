'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('@chakra-ui/react');
var React = require('react');
var React__default = _interopDefault(React);
var icons = require('@chakra-ui/icons');
var hdsIcons = require('@highoutput/hds-icons');

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

var _excluded = ["block", "__testId"];
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var block = _ref.block,
    __testId = _ref.__testId,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React__default.createElement(react.Button, Object.assign({}, props, {
    ref: ref,
    "data-testid": __testId != null ? __testId : "hds.button"
  }, block && {
    width: 'full',
    flex: 1
  }), props.children);
});

var CloseButton = function CloseButton(props) {
  var disabled = props.disabled,
    variant = props.variant,
    size = props.size,
    onClicked = props.onClicked,
    __testId = props.__testId;
  return React__default.createElement(react.Button, {
    size: size != null ? size : 'button-close-sm',
    variant: variant != null ? variant : 'solid-close-btn',
    isDisabled: disabled,
    "data-testid": __testId != null ? __testId : 'hds.close.btn',
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
    onClicked = props.onClicked,
    __iconTestId = props.__iconTestId,
    __testId = props.__testId;
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
    "data-testid": __testId != null ? __testId : "hds." + type + ".social.btn",
    onClick: onClicked
  }), buttonText) : React__default.createElement(react.IconButton, Object.assign({}, defaultStyle[type], {
    width: '44px',
    height: '44px',
    "data-testid": __iconTestId != null ? __iconTestId : "hds." + type + ".social.icon.btn",
    "aria-label": "btn-" + useIcon(),
    disabled: disabled,
    icon: useIcon(),
    onClick: onClicked
  })));
};

exports.Button = Button;
exports.CloseButton = CloseButton;
exports.SocialButton = SocialButton;
//# sourceMappingURL=index.cjs.development.js.map
