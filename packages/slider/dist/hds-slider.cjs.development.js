'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@chakra-ui/react');
var React = require('react');

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
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
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

var InvariantError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(InvariantError, _Error);
  function InvariantError() {
    return _Error.apply(this, arguments) || this;
  }
  return InvariantError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function invariant(condition, message) {
  if (!condition) throw new InvariantError(message);
}

var _excluded = ["min", "max", "step", "defaultValue", "labeled", "labelVariant", "onChange"];
var RangeSlider = /*#__PURE__*/React.forwardRef(function HdsRangeSlider(props, ref) {
  var _Object$assign = Object.assign(defaultProps, props),
    min = _Object$assign.min,
    max = _Object$assign.max,
    step = _Object$assign.step,
    defaultValue = _Object$assign.defaultValue,
    labeled = _Object$assign.labeled,
    labelVariant = _Object$assign.labelVariant,
    onChange = _Object$assign.onChange,
    others = _objectWithoutPropertiesLoose(_Object$assign, _excluded);
  var styles = react.useMultiStyleConfig("Slider", {
    variant: "hds"
  });
  var _React$useState = React.useState(defaultValue || []),
    value = _React$useState[0],
    setValue = _React$useState[1];
  return React.createElement(react.RangeSlider, {
    variant: "hds",
    ref: ref,
    min: min,
    max: max,
    step: step,
    "aria-label": ["Min value", "Max value"],
    orientation: "horizontal",
    defaultValue: defaultValue,
    onChange: function onChange(newValue) {
      !(newValue.length === 2) ?  invariant(false)  : void 0;
      setValue([newValue[0], newValue[1]]);
    },
    onChangeEnd: function onChangeEnd(newValue) {
      !(newValue.length === 2) ?  invariant(false)  : void 0;
      onChange && onChange([newValue[0], newValue[1]]);
    },
    sx: _extends({}, others, styles.container)
  }, React.createElement(react.RangeSliderTrack, null, React.createElement(react.RangeSliderFilledTrack, null)), React.createElement(react.RangeSliderThumb, {
    index: 0
  }, labeled && labelVariant === "static" && React.createElement(react.Text, {
    sx: styles.staticLabel
  }, value[0], "%"), labeled && labelVariant === "floating" && React.createElement(react.Text, {
    sx: styles.floatingLabel
  }, value[0], "%")), React.createElement(react.RangeSliderThumb, {
    index: 1
  }, labeled && labelVariant === "static" && React.createElement(react.Text, {
    sx: styles.staticLabel
  }, value[1], "%"), labeled && labelVariant === "floating" && React.createElement(react.Text, {
    sx: styles.floatingLabel
  }, value[1], "%")));
});
var defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: [0, 100],
  labeled: true,
  labelVariant: "static",
  onChange: function onChange() {}
};

var _excluded$1 = ["min", "max", "step", "defaultValue", "labeled", "labelVariant", "onChange"];
var Slider = /*#__PURE__*/React.forwardRef(function HdsSlider(props, ref) {
  var _Object$assign = Object.assign(defaultProps$1, props),
    min = _Object$assign.min,
    max = _Object$assign.max,
    step = _Object$assign.step,
    defaultValue = _Object$assign.defaultValue,
    labeled = _Object$assign.labeled,
    labelVariant = _Object$assign.labelVariant,
    onChange = _Object$assign.onChange,
    others = _objectWithoutPropertiesLoose(_Object$assign, _excluded$1);
  var styles = react.useMultiStyleConfig("Slider", {
    variant: "hds"
  });
  var _React$useState = React.useState(defaultValue),
    value = _React$useState[0],
    setValue = _React$useState[1];
  return React.createElement(react.Slider, {
    variant: "hds",
    ref: ref,
    min: min,
    max: max,
    step: step,
    "aria-label": "Value",
    orientation: "horizontal",
    defaultValue: defaultValue,
    onChange: setValue,
    onChangeEnd: onChange,
    sx: _extends({}, others, styles.container)
  }, React.createElement(react.SliderTrack, null, React.createElement(react.SliderFilledTrack, null)), React.createElement(react.SliderThumb, null, labeled && labelVariant === "static" && React.createElement(react.Text, {
    sx: styles.staticLabel
  }, value, "%"), labeled && labelVariant === "floating" && React.createElement(react.Text, {
    sx: styles.floatingLabel
  }, value, "%")));
});
var defaultProps$1 = {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: 0,
  labeled: true,
  labelVariant: "static",
  onChange: function onChange() {}
};

function withSlider() {
  var Slider = {
    parts: ["container", "track", "thumb", "filledTrack", "floatingLabel", "staticLabel"],
    variants: {
      hds: function hds() {
        return {
          container: {},
          track: {
            rounded: "4px",
            height: "8px",
            bgColor: "#F0F0F0"
          },
          thumb: {
            position: "relative",
            width: "24px",
            height: "24px",
            border: "1.5px solid",
            borderColor: "#8A68EF",
            bgColor: "#FFFFFF",
            outline: "none",
            boxShadow: ["0px 4px 8px -2px rgba(16, 24, 40, 0.1)", "0px 2px 4px -2px rgba(16, 24, 40, 0.06)"].join(),
            _focusVisible: {
              boxShadow: "none"
            },
            /* this maintains position and discard scaling */
            _active: {
              transform: "translateY(-50%)"
            }
          },
          filledTrack: {
            bgColor: "#8A68EF"
          },
          floatingLabel: {
            bottom: "0%",
            marginBottom: "calc(24px + 12px)",
            position: "absolute",
            padding: "8px 12px",
            width: "unset",
            color: "#525252",
            bgColor: "#FFFFFF",
            fontSize: "14px",
            lineHeight: "14px",
            letterSpacing: "0.02em",
            border: "1px solid #F0F0F0",
            rounded: "8px",
            boxShadow: ["0px 12px 16px -4px rgba(16, 24, 40, 0.08)", "0px 4px 6px -2px rgba(16, 24, 40, 0.03)"].join()
          },
          staticLabel: {
            transform: "translateY(100%)",
            marginTop: "19px",
            fontSize: "18px",
            lineHeight: "18px",
            color: "#0F0F0F"
          }
        };
      }
    },
    sizes: {},
    baseStyle: {},
    defaultProps: {}
  };
  return {
    components: {
      Slider: Slider
    }
  };
}

exports.RangeSlider = RangeSlider;
exports.Slider = Slider;
exports.withSlider = withSlider;
//# sourceMappingURL=hds-slider.cjs.development.js.map
