import { Icon, Box } from '@chakra-ui/react';
import { createElement, useCallback } from 'react';

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

function CheckIcon(props) {
  return createElement("svg", Object.assign({
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), createElement("path", {
    d: "M8.33329 2.5L3.74996 7.08333L1.66663 5",
    stroke: "currentColor",
    strokeWidth: "1.66667",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

function CircleIcon(props) {
  return createElement("svg", Object.assign({
    width: "8",
    height: "8",
    viewBox: "0 0 8 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), createElement("circle", {
    cx: "4",
    cy: "4",
    r: "4",
    fill: "currentColor"
  }));
}

function omit(subject) {
  var copy = _extends({}, subject);
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

var _excluded = ["variant", "size", "items", "children", "compareFn"];
function CheckboxGroup(props) {
  var _props$variant = props.variant,
    variant = _props$variant === void 0 ? "circle" : _props$variant,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    items = props.items,
    children = props.children,
    _props$compareFn = props.compareFn,
    compareFn = _props$compareFn === void 0 ? function (o) {
      return o;
    } : _props$compareFn,
    others = _objectWithoutPropertiesLoose(props, _excluded);
  var getCheckboxIcon = useCallback(function getCheckboxIconBaseOnVariant(_ref) {
    var disabled = _ref.disabled;
    if (variant === "dot") {
      return createElement(Icon, Object.assign({
        as: CircleIcon,
        width: {
          sm: "6px",
          md: "8px"
        }[size],
        height: {
          sm: "6px",
          md: "8px"
        }[size],
        color: "#8A68EF"
      }, disabled && {
        color: "#F0F0F0"
      }));
    }
    return createElement(Icon, Object.assign({
      as: CheckIcon,
      width: {
        sm: "8px",
        md: "10px"
      }[size],
      height: {
        sm: "8px",
        md: "10px"
      }[size],
      color: variant === "square" ? "#8A68EF" : "#FFFFFF"
    }, disabled && {
      color: variant === "square" ? "#F0F0F0" : "#FFFFFF"
    }));
  }, [variant]);
  return createElement(Box, {
    sx: _extends({
      display: "flex",
      flexDirection: "column",
      gap: 4
    }, omit(others, "onChange", "value", "multiple")),
    role: "group",
    "aria-label": "Checkbox Group",
    "aria-multiselectable": props.multiple
  }, items.map(function (item, index) {
    var selected = !others.multiple ? others.value && compareFn(others.value) === compareFn(item) : others.value.some(function (i) {
      return compareFn(item) === compareFn(i);
    });
    return children({
      item: item,
      index: index,
      selected: selected,
      getProps: function getProps(_temp) {
        var _ref2 = _temp === void 0 ? {} : _temp,
          disabled = _ref2.disabled;
        return {
          checkbox: _extends({}, !disabled && _extends({}, !selected && {
            border: "1px solid #D6D6D6",
            bgColor: "#FFFFFF"
          }, selected && {
            border: "1px solid #8A68EF",
            bgColor: variant === "circle" ? "#8A68EF" : "#EDE8FC",
            children: getCheckboxIcon({
              disabled: disabled
            })
          }), disabled && _extends({}, !selected && {
            border: "1px solid #F0F0F0",
            bgColor: "#FCFCFC"
          }, selected && {
            border: "1px solid #D6D6D6",
            bgColor: variant === "circle" ? "#D6D6D6" : "#FCFCFC",
            children: getCheckboxIcon({
              disabled: disabled
            })
          }), {
            // common
            tabIndex: -1,
            flexGrow: 0,
            flexShrink: 0,
            className: "CheckboxGroup__Checkbox",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            rounded: variant === "square" ? "4px" : "full",
            width: size === "sm" ? "16px" : "20px",
            height: size === "sm" ? "16px" : "20px",
            transition: ["background-color 300ms ease-in-out", "box-shadow 300ms ease-in-out", "border-color 300ms ease-in-out"].join()
          }),
          icon: _extends({
            className: "CheckboxGroup__Icon"
          }, disabled && {
            color: "#D0D5DD",
            bgColor: "#F2F4F7",
            borderColor: "#F9FAFB"
          }, !disabled && {
            color: "#8A68EF",
            bgColor: "#EDE8FC",
            borderColor: "#F9F5FF"
          }, {
            flexGrow: 0,
            flexShrink: 0,
            width: size === "sm" ? "32px" : "40px",
            height: size === "sm" ? "32px" : "40px",
            borderWidth: size === "sm" ? "4px" : "6px",
            borderStyle: "solid",
            rounded: "full",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: ["color 300ms ease-in-out", "box-shadow 300ms ease-in-out", "border-color 300ms ease-in-out", "background-color 300ms ease-in-out"].join(),
            role: "img",
            "aria-role": "Checkbox Icon"
          }),
          container: _extends({}, !disabled && _extends({}, !selected && {
            border: "1px solid #EAECF0",
            bgColor: "#FFFFFF",
            _hover: {
              border: "1px solid #D6BBFB",
              // radio
              "& .CheckboxGroup__Checkbox": {
                border: "1px solid #8A68EF",
                bgColor: "#EDE8FC"
              }
            },
            _focus: {
              border: "1px solid #D6BBFB",
              boxShadow: "0px 0px 0px 4px #E3E3FC",
              // radio
              "& .CheckboxGroup__Checkbox": {
                border: "1px solid #EDE8FC",
                bgColor: "#FFFFFF",
                boxShadow: "0px 0px 0px 4px #F4EBFF"
              }
            }
          }, selected && {
            border: "1px solid #8A68EF",
            bgColor: "#F9F5FF",
            _hover: {
              border: "1px solid #8A68EF",
              // radio
              "& .CheckboxGroup__Checkbox": {
                border: variant === "circle" ? "1px solid #4A3880" : "1px solid #8A68EF",
                bgColor: variant === "circle" ? "#4A3880" : "#EDE8FC"
              }
            },
            _focus: {
              border: "1px solid #8A68EF",
              boxShadow: "0px 0px 0px 4px #E3E3FC",
              // radio
              "& .CheckboxGroup__Checkbox": {
                border: "1px solid #8A68EF",
                bgColor: variant === "circle" ? "#8A68EF" : "#EDE8FC",
                boxShadow: "0px 0px 0px 4px #F4EBFF"
              }
            }
          }), disabled && {
            border: "1px solid #EAECF0",
            bgColor: "#F9FAFB"
          }, {
            // common
            rounded: "8px",
            position: "relative",
            padding: "16px",
            cursor: disabled ? "not-allowed" : "pointer",
            outline: "none",
            tabIndex: disabled ? -1 : 0,
            transition: ["background-color 300ms ease-in-out", "box-shadow 300ms ease-in-out", "border-color 300ms ease-in-out"].join(),
            onClick: disabled ? function () {} : function () {
              if (!others.multiple) {
                /* @ts-expect-error "Type guards doesn't seem to be working here 😖" */
                others.onChange(!selected ? item : null);
              } else {
                !selected && others.onChange([].concat(others.value, [item]));
                selected && others.onChange(others.value.filter(function (i) {
                  return compareFn(item) !== compareFn(i);
                }));
              }
            },
            /* Accessibility 👌 */
            role: "checkbox",
            "aria-label": "Select item " + (index + 1),
            "aria-rowindex": index,
            "aria-checked": selected,
            "aria-disabled": disabled
          })
        };
      }
    });
  }));
}

export { CheckboxGroup };
//# sourceMappingURL=hds-checkbox-group.esm.js.map
