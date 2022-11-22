import { useMultiStyleConfig, Avatar, Icon, AvatarBadge, Box, useBreakpoint, HStack, AvatarGroup, Tooltip, chakra, Heading, Text, cssVar, defineStyleConfig } from '@chakra-ui/react';
import { createElement, Children, isValidElement, cloneElement } from 'react';

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

function UserIcon(props) {
  return createElement("svg", Object.assign({
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), createElement("path", {
    d: "M26.6666 28C26.6666 26.1392 26.6666 25.2089 26.4369 24.4518C25.9199 22.7473 24.586 21.4134 22.8814 20.8963C22.1244 20.6667 21.194 20.6667 19.3332 20.6667H12.6666C10.8058 20.6667 9.87546 20.6667 9.1184 20.8963C7.41386 21.4134 6.07997 22.7473 5.5629 24.4518C5.33325 25.2089 5.33325 26.1392 5.33325 28M21.9999 10C21.9999 13.3137 19.3136 16 15.9999 16C12.6862 16 9.99992 13.3137 9.99992 10C9.99992 6.68629 12.6862 4 15.9999 4C19.3136 4 21.9999 6.68629 21.9999 10Z",
    stroke: "currentColor",
    strokeWidth: "2.66667",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

function VerifiedIcon(props) {
  return createElement("svg", Object.assign({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), createElement("g", {
    clipPath: "url(#clip0_3302_419216)"
  }, createElement("path", {
    d: "M15.4442 3.54197C15.6342 4.00136 15.9988 4.36652 16.4579 4.55716L18.0678 5.22398C18.5272 5.41428 18.8922 5.7793 19.0825 6.23873C19.2728 6.69815 19.2728 7.21436 19.0825 7.67379L18.4162 9.28249C18.2258 9.74212 18.2255 10.2589 18.4168 10.7183L19.082 12.3265C19.1763 12.554 19.2249 12.7979 19.2249 13.0443C19.225 13.2906 19.1765 13.5345 19.0822 13.7621C18.9879 13.9897 18.8497 14.1965 18.6755 14.3706C18.5013 14.5448 18.2945 14.6829 18.0669 14.7771L16.4582 15.4434C15.9988 15.6334 15.6336 15.998 15.443 16.4571L14.7762 18.067C14.5859 18.5264 14.2209 18.8914 13.7614 19.0817C13.302 19.272 12.7858 19.272 12.3264 19.0817L10.7177 18.4154C10.2582 18.2255 9.7422 18.2259 9.28304 18.4164L7.67318 19.0823C7.21401 19.2722 6.69825 19.272 6.2392 19.0819C5.78014 18.8917 5.41533 18.5271 5.2249 18.0682L4.55788 16.4578C4.36793 15.9985 4.00332 15.6333 3.54421 15.4427L1.93435 14.7758C1.47513 14.5856 1.11022 14.2208 0.919849 13.7617C0.729477 13.3025 0.729219 12.7865 0.919131 12.3272L1.58548 10.7185C1.77531 10.259 1.77492 9.74301 1.5844 9.28386L0.91901 7.67284C0.824671 7.4453 0.776094 7.20139 0.776054 6.95506C0.776015 6.70873 0.824513 6.46481 0.91878 6.23723C1.01305 6.00965 1.15123 5.80287 1.32544 5.62872C1.49965 5.45457 1.70647 5.31645 1.93408 5.22225L3.54278 4.55591C4.00178 4.36612 4.36671 4.00198 4.55749 3.5434L5.22432 1.93354C5.41462 1.47411 5.77964 1.1091 6.23906 0.918794C6.69849 0.728493 7.2147 0.728493 7.67413 0.918794L9.28283 1.58514C9.74227 1.77497 10.2583 1.77459 10.7174 1.58406L12.328 0.919827C12.7874 0.729633 13.3034 0.729672 13.7628 0.919935C14.2221 1.1102 14.5871 1.47511 14.7774 1.93442L15.4444 3.54476L15.4442 3.54197Z",
    fill: "#0788F5"
  }), createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9166 7.37864C14.0502 7.16879 14.0949 6.91446 14.041 6.6716C13.9871 6.42874 13.8389 6.21724 13.6291 6.08364C13.4192 5.95004 13.1649 5.90527 12.922 5.95919C12.6792 6.0131 12.4677 6.16129 12.3341 6.37114L8.66283 12.1399L6.98283 10.0399C6.82751 9.84562 6.60138 9.72101 6.35418 9.69346C6.10699 9.66592 5.85897 9.7377 5.6647 9.89302C5.47043 10.0483 5.34582 10.2745 5.31827 10.5217C5.29073 10.7689 5.36251 11.0169 5.51783 11.2111L8.01783 14.3361C8.111 14.4528 8.23066 14.5454 8.36687 14.6065C8.50308 14.6675 8.65189 14.6951 8.80094 14.6871C8.94998 14.679 9.09494 14.6355 9.22376 14.5601C9.35258 14.4847 9.46154 14.3796 9.54158 14.2536L13.9166 7.37864Z",
    fill: "white"
  })), createElement("defs", null, createElement("clipPath", {
    id: "clip0_3302_419216"
  }, createElement("rect", {
    width: "20",
    height: "20",
    fill: "white"
  }))));
}

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
function pick(obj) {
  var copy = _extends({}, obj);
  var picked = {};
  for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    keys[_key2 - 1] = arguments[_key2];
  }
  for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
    var key = _keys2[_i2];
    if (key in copy) {
      picked[key] = copy[key];
    }
  }
  return picked;
}
function findClosestBreakpoint(breakpoints, base) {
  if (breakpoints.length > 0) {
    if (breakpoints.length === 1) return breakpoints[0];
    if (base === "xl") {
      if (breakpoints.includes("xl")) return "xl";
      if (breakpoints.includes("lg")) return "lg";
      if (breakpoints.includes("md")) return "md";
      if (breakpoints.includes("sm")) return "sm";
      if (breakpoints.includes("base")) return "base";
    }
    if (base === "lg") {
      if (breakpoints.includes("lg")) return "lg";
      if (breakpoints.includes("md")) return "md";
      if (breakpoints.includes("sm")) return "sm";
      if (breakpoints.includes("base")) return "base";
    }
    if (base === "md") {
      if (breakpoints.includes("md")) return "md";
      if (breakpoints.includes("sm")) return "sm";
      if (breakpoints.includes("base")) return "base";
    }
    if (base === "sm") {
      if (breakpoints.includes("sm")) return "sm";
      if (breakpoints.includes("base")) return "base";
    }
  }
  /* shouldn't be reached but just in case. 😅 */
  return "md";
}

var _excluded = ["src", "name", "size", "onlineIndicator", "online", "__bordered", "__elevated"];
/**
 *
 * ### HDS Avatar
 *
 * 💡
 *
 * Please only use the `size`s `2xl` and below.
 * `3xl` and up are only used for profile internally
 * and will be removed in the future.
 * They also does not support `badge` and other stuffs
 *
 */
function HdsAvatar(props) {
  var src = props.src,
    name = props.name,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    onlineIndicator = props.onlineIndicator,
    online = props.online,
    __bordered = props.__bordered,
    __elevated = props.__elevated,
    p = _objectWithoutPropertiesLoose(props, _excluded);
  var styles = useMultiStyleConfig("Avatar", {
    size: size,
    variant: "hds"
  });
  return createElement(Avatar, Object.assign({
    variant: "hds",
    src: src,
    size: size,
    name: name,
    icon: createElement(Icon, {
      as: UserIcon,
      color: "#475467"
    }),
    "data-online": !!online,
    "data-fallback": !src,
    "data-elevated": !!__elevated,
    "data-bordered": !!__bordered,
    "data-clickable": !!p.clickable
  }, p.clickable && {
    tabIndex: 0,
    onClick: p.onClick
  }, {
    sx: _extends({}, omit(p, "badge", "clickable", /* @ts-ignore "Include types which utilizes type guard-ing." */
    "onClick", "badgeIcon"))
  }), !!onlineIndicator /* <!-- Online Indicator --> */ && createElement(AvatarBadge, {
    role: "presentation",
    "aria-label": online ? "Online" : "Offline"
  }), !!p.verified /* <!-- Verified --> */ && createElement(Icon, {
    as: VerifiedIcon,
    role: "presentation",
    "aria-label": "Verified",
    sx: styles.verified
  }), !!p.badge /* <!-- Badge --> */ && createElement(Box, {
    role: "presentation",
    "aria-label": "Company Icon",
    sx: styles.customIcon
  }, createElement(Icon, {
    as: p.badgeIcon
  })));
}

function useActualSize(size, fallback) {
  if (fallback === void 0) {
    fallback = "md";
  }
  var breakpoint = useBreakpoint({
    fallback: fallback
  });
  var keys = typeof size === "string" ? [] : Object.keys(size);
  return typeof size === "string" ? size : breakpoint in size ? size[breakpoint] : keys.length ? size[findClosestBreakpoint(keys, breakpoint)] : fallback;
}

function PlusIcon(props) {
  return createElement("svg", Object.assign({
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), createElement("path", {
    d: "M7.99992 3.33331V12.6666M3.33325 7.99998H12.6666",
    stroke: "currentColor",
    strokeWidth: "1.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

var _excluded$1 = ["max", "size", "children", "hasAddButton", "onAddButtonClick"],
  _excluded2 = ["size"];
function HdsAvatarGroup(props) {
  var _props$max = props.max,
    max = _props$max === void 0 ? 5 : _props$max,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    children = props.children,
    hasAddButton = props.hasAddButton,
    onAddButtonClick = props.onAddButtonClick,
    others = _objectWithoutPropertiesLoose(props, _excluded$1);
  var actualMax = useActualMax(max);
  var actualSize = useActualSize(size) || "md";
  return createElement(HStack, {
    sx: others,
    spacing: "8px" /* retain spacing */
  }, createElement(AvatarGroup, {
    variant: "hds",
    max: actualMax,
    size: size,
    spacing: getSizeSpace({
      xs: "-4px",
      sm: "-8px",
      md: "-12px"
    }, actualSize),
    "aria-label": "Group of users"
  }, Children.map(children, function (child, zIndex) {
    if (!isValidElement(child)) return null;
    return cloneElement(child, {
      size: size,
      zIndex: zIndex,
      __bordered: true
    });
  })), hasAddButton && createElement(AddButton, {
    size: actualSize,
    onClick: onAddButtonClick
  }));
}
function AddButton(_ref) {
  var size = _ref.size,
    props = _objectWithoutPropertiesLoose(_ref, _excluded2);
  var styles = useMultiStyleConfig("AvatarGroupButton", {
    size: size
  });
  return createElement(Tooltip, {
    variant: "hds-avatar",
    hasArrow: true,
    label: "Add user",
    placement: "top",
    role: "tooltip",
    "aria-label": "Add user"
  }, createElement(chakra.button, Object.assign({
    role: "button",
    "aria-label": "Add User",
    sx: styles.container
  }, props), createElement(Icon, {
    as: PlusIcon,
    sx: styles.icon
  })));
}
function useActualMax(max, fallback) {
  if (fallback === void 0) {
    fallback = "md";
  }
  var breakpoint = useBreakpoint({
    fallback: fallback
  });
  var breakpoints = typeof max === "number" ? [] : Object.keys(max || {});
  return typeof max === "number" ? max : breakpoint in (max || {}) ? max[breakpoint] : breakpoints.length ? max[findClosestBreakpoint(breakpoints, breakpoint)] : fallback;
}
function getSizeSpace(obj, size) {
  return obj[size];
}

var _excluded$2 = ["src", "name", "size", "fallback", "children", "supportText", "online", "onlineIndicator"];
function AvatarLabel(props) {
  var src = props.src,
    name = props.name,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    _props$fallback = props.fallback,
    fallback = _props$fallback === void 0 ? true : _props$fallback,
    children = props.children,
    supportText = props.supportText,
    online = props.online,
    onlineIndicator = props.onlineIndicator,
    others = _objectWithoutPropertiesLoose(props, _excluded$2);
  var styles = useMultiStyleConfig("AvatarLabel", {
    size: size,
    variant: "hds"
  });
  if (!isValidElement(children)) {
    console.error("'AvatarLabel' only accepts a single 'Avatar' child");
    return null;
  }
  return createElement(Box, {
    sx: _extends({}, omit(others, "badge", "clickable", "verified", /* @ts-ignore "This uses type guards here" */
    "onClick", "badgeIcon"), styles.container)
  }, createElement(Box, {
    sx: styles.avatar
  }, cloneElement(children, _extends({
    src: src,
    name: fallback ? name : undefined,
    size: size,
    online: online,
    onlineIndicator: onlineIndicator
  }, pick(others, "badge", "verified", "clickable", /* @ts-ignore "This uses type guards here" */
  "onClick", "badgeIcon")))), createElement(Box, {
    sx: styles.label
  }, createElement(Heading, {
    sx: styles.heading
  }, name), createElement(Text, {
    sx: styles.supportText
  }, supportText)));
}

var _excluded$3 = ["size"];
function AvatarProfile(props) {
  var _Object$assign = Object.assign({
      size: "md"
    }, props),
    size = _Object$assign.size,
    others = _objectWithoutPropertiesLoose(_Object$assign, _excluded$3);
  var actualSize = useActualSize(size) || "md";
  var psuedoSize = {
    sm: "3xl",
    md: "4xl",
    lg: "5xl"
  };
  return createElement(HdsAvatar, Object.assign({
    size: psuedoSize[actualSize]
  }, others, {
    __elevated: true,
    __bordered: true
  }));
}

// 💡NOTE
// Sizes 3xl, 4xl and 5xl are normally used for "AvatarProfile"
// and shouldn't be used for regular "Avatar"
function withAvatar() {
  var Avatar = {
    parts: ["badge", "container", "excessLabel", "group", "verified", "customIcon"],
    variants: {
      hds: function hds(context) {
        return {
          container: {
            color: "#475467",
            bgColor: "#F9FAFB",
            fontWeight: "medium",
            padding: "0px",
            /* clickable */
            /* 🪲 Causes bug. Might be worth to look at soon */
            /* cursor: context['data-clickable'] ? 'pointer' : 'default', */
            _focus: {
              outline: "none",
              /* box-shadow depends if "src" exists or not 🐸 */
              boxShadow: context["data-fallback"] ? "0 0 0 4px #F2F4F7" : "0 0 0 4px #F4EBFF"
            },
            transition: "box-shadow 300ms ease-in-out",
            /* elevations for '3xl', '4xl' and '5xl' which will normally be used for profile pic */
            shadow: context["data-elevated"] ? context.size === "3xl" ? ["0px 4px 8px -2px rgba(16, 24, 40, 0.1)", "0px 2px 4px -2px rgba(16, 24, 40, 0.06)"].join() : context.size === "4xl" ? ["0px 12px 16px -4px rgba(16, 24, 40, 0.08)", "0px 4px 6px -2px rgba(16, 24, 40, 0.03)"].join() : context.size === "5xl" ? ["0px 12px 16px -4px rgba(16, 24, 40, 0.08)", "0px 4px 6px -2px rgba(16, 24, 40, 0.03)"].join() : undefined : undefined,
            border: context["data-bordered"] ? context.size === "3xl" ? "3px solid #FFFFFF" : context.size === "4xl" ? "4px solid #FFFFFF" : context.size === "5xl" ? "4px solid #FFFFFF" : "1.5px solid #FFFFFF" : undefined
          },
          badge: {
            color: "#00C408",
            bgColor: context["data-online"] ? "#00C408" : "#F0F0F0",
            border: "1.5px solid",
            borderColor: "white",
            right: "unset",
            bottom: "unset",
            transform: "unset"
          },
          verified: {
            position: "absolute"
          },
          customIcon: {
            position: "absolute",
            rounded: "full",
            border: "1.5px solid #FFFFFF",
            bgColor: "#F4EBFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          excessLabel: {
            color: "#475467",
            bgColor: "#F9FAFB",
            border: "2px solid #FFFFFF",
            fontWeight: "medium",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          group: {}
        };
      }
    },
    sizes: {
      xs: {
        container: {
          width: "24px",
          height: "24px",
          fontSize: "12px",
          lineHeight: "18px",
          svg: {
            width: "16px",
            height: "16px"
          }
        },
        badge: {
          width: "6px",
          height: "6px",
          left: "18px",
          top: "18px"
        },
        verified: {
          width: "10px!important",
          height: "10px!important",
          left: "15px",
          top: "15px"
        },
        customIcon: {
          width: "10px",
          height: "10px",
          left: "16px",
          top: "16px",
          "& svg": {
            width: "10px",
            height: "10px"
          }
        },
        excessLabel: {
          width: "24px",
          height: "24px",
          fontSize: "12px",
          lineHeight: "18px"
        }
      },
      sm: {
        container: {
          width: "32px",
          height: "32px",
          fontSize: "14px",
          lineHeight: "20px",
          svg: {
            width: "20px",
            height: "20px"
          }
        },
        badge: {
          width: "8px",
          height: "8px",
          left: "24px",
          top: "24px"
        },
        verified: {
          width: "12px!important",
          height: "12px!important",
          left: "20px",
          top: "20px"
        },
        customIcon: {
          width: "12px",
          height: "12px",
          left: "22px",
          top: "22px",
          "& svg": {
            width: "12px",
            height: "12px"
          }
        },
        excessLabel: {
          width: "32px",
          height: "32px",
          fontSize: "14px",
          lineHeight: "20px"
        }
      },
      md: {
        container: {
          width: "40px",
          height: "40px",
          fontSize: "16px",
          lineHeight: "24px",
          svg: {
            width: "24px",
            height: "24px"
          }
        },
        badge: {
          width: "10px",
          height: "10px",
          left: "30px",
          top: "30px"
        },
        verified: {
          width: "14px!important",
          height: "14px!important",
          left: "26px",
          top: "26px"
        },
        customIcon: {
          width: "14px",
          height: "14px",
          left: "28px",
          top: "28px",
          "& svg": {
            width: "14px",
            height: "14px"
          }
        },
        excessLabel: {
          width: "40px",
          height: "40px",
          fontSize: "16px",
          lineHeight: "24px"
        }
      },
      lg: {
        container: {
          width: "48px",
          height: "48px",
          fontSize: "18px",
          lineHeight: "28px",
          svg: {
            width: "28px",
            height: "28px"
          }
        },
        badge: {
          width: "12px",
          height: "12px",
          left: "36px",
          top: "36px"
        },
        verified: {
          width: "16px!important",
          height: "16px!important",
          left: "32px",
          top: "32px"
        },
        customIcon: {
          width: "16px",
          height: "16px",
          left: "34px",
          top: "34px",
          "& svg": {
            width: "16px",
            height: "16px"
          }
        }
      },
      xl: {
        container: {
          width: "56px",
          height: "56px",
          fontSize: "20px",
          lineHeight: "30px",
          svg: {
            width: "32px",
            height: "32px"
          }
        },
        badge: {
          width: "14px",
          height: "14px",
          left: "42px",
          top: "42px"
        },
        verified: {
          width: "18px!important",
          height: "18px!important",
          left: "38px",
          top: "38px"
        },
        customIcon: {
          width: "18px",
          height: "18px",
          left: "40px",
          top: "40px",
          "& svg": {
            width: "18px",
            height: "18px"
          }
        }
      },
      "2xl": {
        container: {
          width: "64px",
          height: "64px",
          fontSize: "24px",
          lineHeight: "32px",
          svg: {
            width: "32px",
            height: "32px"
          }
        },
        badge: {
          width: "16px",
          height: "16px",
          left: "50px",
          top: "50px"
        },
        verified: {
          width: "20px!important",
          height: "20px!important",
          left: "44px",
          top: "44px"
        },
        customIcon: {
          width: "20px",
          height: "20px",
          left: "46px",
          top: "46px",
          "& svg": {
            width: "20px",
            height: "20px"
          }
        }
      },
      /* <!-- Sizes here will be normally used for avatar profile 👌 --> */
      "3xl": {
        container: {
          width: "72px",
          height: "72px",
          fontSize: "28px",
          lineHeight: "28px",
          svg: {
            width: "30px",
            height: "30px"
          }
        },
        verified: {
          width: "20px!important",
          height: "20px!important",
          left: "calc(52px - 6px)" /* minus border */,
          top: "calc(52px - 6px)" /* minus border */
        },

        /* NOT SUPPORTED */
        badge: {},
        customIcon: {}
      },
      "4xl": {
        container: {
          width: "96px",
          height: "96px",
          fontSize: "32px",
          lineHeight: "32px",
          svg: {
            width: "40px",
            height: "40px"
          }
        },
        verified: {
          width: "24px!important",
          height: "24px!important",
          left: "calc(70px - 8px)" /* minus the border */,
          top: "calc(70px - 8px)" /* minus the border */
        },

        /* NOT SUPPORTED */
        badge: {},
        customIcon: {}
      },
      "5xl": {
        container: {
          width: "160px",
          height: "160px",
          fontSize: "56px",
          lineHeight: "64px",
          letterSpacing: "-0.02em",
          svg: {
            width: "66.67px",
            height: "66.67px"
          }
        },
        verified: {
          width: "32px!important",
          height: "32px!important",
          left: "calc(124px - 8px)" /* minus border */,
          top: "calc(124px - 8px)" /* minus border */
        },

        /* NOT SUPPORTED */
        badge: {},
        customIcon: {}
      }
    },
    /* Please don't set any global style which affects other themes */
    baseStyle: {},
    defaultProps: {}
  };
  var AvatarLabel = {
    parts: ["container", "label", "heading", "supportText"],
    variants: {
      hds: function hds() {
        return {
          container: {
            display: "flex",
            alignItems: "center"
          },
          label: {},
          heading: {
            fontWeight: "normal",
            color: "#2E2E2E"
          },
          supportText: {
            color: "#7A7A7A",
            fontWeight: "normal",
            marginTop: "4px"
          }
        };
      }
    },
    sizes: {
      sm: {
        container: {
          gap: "10px"
        },
        label: {},
        heading: {
          fontSize: "14px",
          lineHeight: "14px",
          letterSpacing: "0.02em"
        },
        supportText: {
          fontSize: "12px",
          lineHeight: "12px",
          letterSpacing: "0.02em"
        }
      },
      md: {
        container: {
          gap: "12px"
        },
        label: {},
        heading: {
          fontSize: "14px",
          lineHeight: "14px",
          letterSpacing: "0.02em"
        },
        supportText: {
          fontSize: "14px",
          lineHeight: "14px",
          letterSpacing: "0.02em"
        }
      },
      lg: {
        container: {
          gap: "12px"
        },
        label: {},
        heading: {
          fontSize: "18px",
          lineHeight: "18px"
        },
        supportText: {
          fontSize: "14px",
          lineHeight: "14px",
          letterSpacing: "0.02em"
        }
      },
      xl: {
        container: {
          gap: "16px"
        },
        label: {},
        heading: {
          fontSize: "20px",
          lineHeight: "20px"
        },
        supportText: {
          fontSize: "18px",
          lineHeight: "18px"
        }
      }
    },
    /* Please don't set any global style which affects other themes */
    baseStyle: {},
    defaultProps: {}
  };
  var arrowBg = cssVar("popper-arrow-bg");
  var Tooltip = defineStyleConfig({
    variants: {
      "hds-avatar": function hdsAvatar(context) {
        var _ref;
        return _ref = {
          marginBottom: context.placement === "top" ? "3px" : undefined,
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          lineHeight: "18px",
          fontWeight: "500",
          color: "#FCFCFC",
          bgColor: "#0F0F0F",
          rounded: "8px",
          paddingY: "8px",
          paddingX: "12px"
        }, _ref[arrowBg.variable] = "#0F0F0F", _ref;
      }
    }
  });
  var AvatarGroupButton = {
    parts: ["container", "icon"],
    baseStyle: {
      container: {
        border: "1px dashed #C2C2C2",
        rounded: "full",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      icon: {
        color: "#525252"
      }
    },
    sizes: {
      xs: {
        container: {
          width: "24px",
          height: "24px"
        },
        icon: {
          color: "#525252",
          width: "16px",
          height: "16px"
        }
      },
      sm: {
        container: {
          width: "32px",
          height: "32px"
        },
        icon: {
          color: "#525252",
          width: "16px",
          height: "16px"
        }
      },
      md: {
        container: {
          width: "40px",
          height: "40px"
        },
        icon: {
          color: "#525252",
          width: "20px",
          height: "20px"
        }
      }
    }
  };
  return {
    components: {
      Avatar: Avatar,
      AvatarLabel: AvatarLabel,
      AvatarGroupButton: AvatarGroupButton,
      Tooltip: Tooltip
    }
  };
}

export { HdsAvatar as Avatar, HdsAvatarGroup as AvatarGroup, AvatarLabel, AvatarProfile, withAvatar };
//# sourceMappingURL=hds-avatar.esm.js.map
