import { Checkbox as Checkbox$1, Spacer, useMultiStyleConfig, Tag as Tag$1, TagLeftIcon, Avatar, Box, TagLabel, TagCloseButton, Text, useBreakpoint } from '@chakra-ui/react';
import { forwardRef, createElement, Fragment, useMemo } from 'react';

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

var Checkbox = /*#__PURE__*/forwardRef(function HdsCheckbox(props, ref) {
  return createElement(Checkbox$1, Object.assign({
    ref: ref,
    "aria-label": "Select Item",
    variant: "hds"
  }, props));
});

function omit(subject) {
  var copy = _extends({}, subject); /* do NOT mutate original object 😏 */
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }
  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var key = _keys[_i];
    if (key in copy) {
      delete copy[key];
    }
  }
  return copy;
}
function space(when, props) {
  return !when ? null : createElement(Spacer, Object.assign({
    height: "1px"
  }, props));
}

var _excluded = ["variant", "label", "__testId"];
/*
 *
 * HEADS UP! 📢
 * We're heavily using Spacer due to design constraints. 😉
 *
 */
var Tag = /*#__PURE__*/forwardRef(function HdsTag(p, ref) {
  var _Object$assign = Object.assign({
      size: 'md'
    }, p, {
      variant: 'hds'
    }),
    variant = _Object$assign.variant,
    label = _Object$assign.label,
    __testId = _Object$assign.__testId,
    props = _objectWithoutPropertiesLoose(_Object$assign, _excluded);
  var size = useActualSize(props.size);
  var styles = useMultiStyleConfig('Tag', {
    size: size,
    variant: variant
  });
  return createElement(Tag$1, {
    ref: ref,
    size: size,
    variant: variant,
    __css: _extends({}, omit(props, 'size', 'icon', 'badge', 'avatar', 'closable', 'checkbox', 'indicator', /* @ts-ignore "TypeScript doesn't know how to handle union types just yet 🤐" */
    'onClose', 'checked', 'onCheck', 'badgeCount'), styles.container),
    "data-testid": __testId
  }, !!props.checkbox /* <!-- Checkbox --> */ && createElement(Fragment, null, space(true, {
    width: {
      sm: '5px',
      md: '4px',
      lg: '5px'
    }[size]
  }), createElement(Checkbox, {
    size: size,
    variant: variant,
    checked: props.checked,
    onChange: function onChange(_ref) {
      var target = _ref.target;
      props.onCheck(target.checked);
    }
  }), space(![props.avatar, props.icon].some(Boolean), {
    width: {
      sm: '4px',
      md: '5px',
      lg: '6px'
    }[size]
  })), !!props.icon /* <!-- Icon  --> */ && createElement(Fragment, null, space(true, {
    width: {
      sm: '4px',
      md: '5px',
      lg: '6px'
    }[size]
  }), createElement(TagLeftIcon, {
    as: props.icon,
    role: "img",
    "aria-label": "Tag Icon",
    sx: styles.icon
  }), space(true, {
    width: {
      sm: '4px',
      md: '5px',
      lg: '6px'
    }[size]
  })), !!props.avatar /* <!-- Avatar --> */ && createElement(Fragment, null, space(true, {
    width: {
      sm: '4px',
      md: '5px',
      lg: '6px'
    }[size]
  }), createElement(Avatar, {
    src: props.avatar,
    role: "img",
    "aria-label": "Tag Avatar",
    sx: styles.avatar
  }), space(true, {
    width: {
      sm: '4px',
      md: '5px',
      lg: '6px'
    }[size]
  })), !!props.indicator /* <!-- Indicator --> */ && createElement(Fragment, null, space(true, {
    width: {
      sm: '7px',
      md: '8px',
      lg: '10px'
    }[size]
  }), createElement(Box, {
    role: "presentation",
    "aria-label": "Green Dot",
    sx: styles.indicator
  }), space(true, {
    width: {
      sm: '5px',
      md: '6px',
      lg: '7px'
    }[size]
  })), !!label /* <!-- Label --> */ && createElement(Fragment, null, space(![props.icon, props.avatar, props.indicator, props.checkbox].some(Boolean), {
    width: {
      sm: '8px',
      md: '9px',
      lg: '10px'
    }[size]
  }), createElement(TagLabel, {
    role: "contentinfo",
    __css: styles.label
  }, label), space(![props.closable, props.badge].some(Boolean), {
    width: {
      sm: '8px',
      md: '9px',
      lg: '10px'
    }[size]
  })), !!props.closable /* <!-- Close Button --> */ && createElement(Fragment, null, space(true, {
    width: {
      sm: '5px',
      md: '5px',
      lg: '6px'
    }[size]
  }), createElement(TagCloseButton, {
    role: "button",
    "aria-label": "Close Tag",
    onClick: props.onClose
  }), space(true, {
    width: {
      sm: '7px',
      md: '6px',
      lg: '7px'
    }[size]
  })), !!props.badge /* <!-- Badge --> */ && createElement(Fragment, null, space(true, {
    width: {
      sm: '8px',
      md: '10px',
      lg: '12px'
    }[size]
  }), createElement(Text, {
    sx: styles.badge
  }, props.badgeCount), space(true, {
    width: {
      sm: '8px',
      md: '8px',
      lg: '10px'
    }[size]
  })));
});
function useActualSize(size) {
  var _size$psuedoBreakpoin;
  var actualBreakpoint = useBreakpoint();
  var psuedoBreakpoint = useMemo(function () {
    return 'sm|md|lg'.split(/\|/g).includes(actualBreakpoint) ? actualBreakpoint : ['base'].includes(actualBreakpoint) ? 'sm' : 'lg';
  }, []);
  var keys = Object.keys(size);
  return typeof size === 'string' ? size : (_size$psuedoBreakpoin = size[psuedoBreakpoint]) != null ? _size$psuedoBreakpoin : /* fallback to closest given size */size[keys[keys.length - 1]];
}

/*
 *
 * This is isolated so it doesn't bloat the theme
 * and won't be added to bundle if not used. 💰
 * This approach is highly inspired by this ⬇️
 * https://chakra-ui.com/community/recipes/prose
 *
 */
function withTag() {
  var Tag = {
    parts: ['icon', 'label', 'badge', 'avatar', 'container', 'indicator', 'closeButton'],
    baseStyle: {},
    variants: {
      hds: function hds() {
        return {
          container: {
            bgColor: 'white',
            border: '1px solid #F0F0F0',
            paddingX: '0px',
            rounded: '6px'
          },
          label: {
            fontWeight: 'medium',
            color: '#525252',
            margin: '0px'
          },
          closeButton: {
            minWidth: 'unset',
            minHeight: 'unset',
            color: '#C2C2C2',
            rounded: '3px',
            margin: '0px',
            _hover: {
              color: '#7A7A7A'
            },
            _active: {
              boxShadow: '0px 0px 0px 4px #F2F4F7;'
            }
          },
          indicator: {
            width: '6px',
            height: '6px',
            bgColor: '#00C408',
            rounded: 'full',
            margin: '0px'
          },
          icon: {
            width: '16px',
            height: '16px',
            margin: '0px'
          },
          avatar: {
            width: '16px',
            height: '16px',
            margin: '0px'
          },
          badge: {
            color: '#2E2E2E',
            margin: '0px'
          }
        };
      }
    },
    sizes: {
      sm: {
        container: {
          paddingY: '3px'
        },
        label: {
          fontSize: '12px',
          lineHeight: '18px'
        },
        closeButton: {
          width: '10px',
          height: '10px'
        },
        badge: {
          fontSize: '12px',
          lineHeight: '18px'
        }
      },
      md: {
        container: {
          paddingY: '3px'
        },
        label: {
          fontSize: '14px',
          lineHeight: '20px'
        },
        closeButton: {
          width: '12px',
          height: '12px'
        },
        badge: {
          fontSize: '12px',
          lineHeight: '18px'
        }
      },
      lg: {
        container: {
          paddingY: '4px'
        },
        label: {
          fontSize: '14px',
          lineHeight: '20px'
        },
        closeButton: {
          width: '14px',
          height: '14px'
        },
        badge: {
          fontSize: '14px',
          lineHeight: '20px'
        }
      }
    },
    defaultProps: {
      size: 'md'
    }
  };
  var Checkbox = {
    parts: ['icon', 'container', 'control', 'label'],
    baseStyle: {},
    variants: {
      hds: function hds() {
        return {
          container: {
            margin: 0
          },
          label: {},
          control: {
            rounded: '4px',
            bgColor: 'white',
            borderColor: '#F0F0F0',
            _hover: {
              bgColor: '#EDE8FC',
              borderColor: '#8A68EF'
            },
            _checked: {
              bgColor: '#8A68EF',
              borderColor: '#8A68EF',
              _hover: {
                bgColor: '#4A3880',
                borderColor: '#4A3880'
              }
            },
            _focus: {
              boxShadow: 'none'
            },
            _active: {
              boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF'
            },
            transition: 'all 300ms ease-in-out'
          }
        };
      }
    },
    sizes: {
      sm: {
        container: {
          width: '14px',
          height: '14px'
        }
      },
      md: {
        container: {
          width: '16px',
          height: '16px'
        }
      },
      lg: {
        container: {
          width: '18px',
          height: '18px'
        }
      }
    },
    defaultProps: {}
  };
  return {
    components: {
      Tag: Tag,
      Checkbox: Checkbox
    }
  };
}

export { Tag, withTag };
//# sourceMappingURL=hds-tag.esm.js.map
