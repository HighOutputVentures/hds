'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('@chakra-ui/react');
var React = require('react');
var React__default = _interopDefault(React);
var icons = require('@chakra-ui/icons');
var omit = _interopDefault(require('lodash/omit'));

var FormContainer = function FormContainer(_ref) {
  var id = _ref.id,
    label = _ref.label,
    errorMsg = _ref.errorMsg,
    helperMsg = _ref.helperMsg,
    children = _ref.children,
    disabled = _ref.disabled,
    variant = _ref.variant;
  var styles = react.useMultiStyleConfig('Form', {
    variant: variant
  });
  var uid = React.useId();
  return React__default.createElement(react.FormControl, {
    id: id,
    isInvalid: Boolean(errorMsg),
    isReadOnly: disabled,
    "data-testid": uid + "-form-container-form-control",
    sx: styles.formControl,
    "aria-label": "Form Group"
  }, label && React__default.createElement(react.FormLabel, {
    borderRadius: "4px",
    "data-testid": uid + "-form-container-label",
    sx: styles.formLabel
  }, label), children, React__default.createElement(react.FormErrorMessage, {
    sx: styles.formErrorMessage,
    "data-testid": uid + "-form-container-error"
  }, errorMsg), helperMsg && React__default.createElement(react.FormHelperText, {
    sx: styles.formHelperText,
    "data-testid": uid + "-form-container-helper"
  }, helperMsg));
};

var InputField = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'text' : _props$type,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
    __testId = props.__testId,
    maxLength = props.maxLength,
    autoFocus = props.autoFocus,
    placeholder = props.placeholder,
    leftIcon = props.leftIcon,
    rightIcon = props.rightIcon,
    onChange = props.onChange,
    onBlur = props.onBlur,
    name = props.name,
    autoComplete = props.autoComplete,
    disabled = props.disabled,
    readOnly = props.readOnly,
    defaultValue = props.defaultValue,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'outline' : _props$variant,
    onPressEnter = props.onPressEnter,
    inputValue = props.inputValue;
  var styles = react.useMultiStyleConfig('Form', {
    variant: variant,
    size: size
  });
  var uid = React.useId();
  return React__default.createElement(FormContainer, Object.assign({}, props), React__default.createElement(react.InputGroup, {
    sx: styles.formInputGroup,
    size: size,
    "data-testid": uid + "-input-field-group"
  }, leftIcon && React__default.createElement(react.InputLeftElement, {
    "data-testid": uid + "-input-field-left-element"
  }, leftIcon), React__default.createElement(react.Input, {
    sx: styles.formInput,
    // {...partProps?.input}
    errorBorderColor: "red.500",
    autoFocus: autoFocus,
    ref: ref,
    name: name,
    onChange: onChange,
    onBlur: onBlur,
    type: type,
    placeholder: placeholder,
    autoComplete: autoComplete,
    disabled: disabled,
    readOnly: readOnly,
    defaultValue: defaultValue,
    maxLength: maxLength,
    variant: variant,
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') {
        if (onPressEnter) onPressEnter();
      }
    },
    value: inputValue ? inputValue.trim() : undefined,
    role: "input",
    "data-testid": __testId != null ? __testId : uid + "-input-field-input"
  }), rightIcon && React__default.createElement(react.InputRightElement
  // {...partProps?.inputRightElement}
  , {
    "data-testid": uid + "-input-field-right-element"
  }, rightIcon)));
});

var PasswordInputField = /*#__PURE__*/React.forwardRef(function (props, _) {
  var placeholder = props.placeholder,
    onBlur = props.onBlur,
    errorMsg = props.errorMsg,
    onChange = props.onChange,
    onPressEnter = props.onPressEnter;
  var _React$useState = React__default.useState(false),
    showPassword = _React$useState[0],
    setShowPassword = _React$useState[1];
  var onClickRightIcon = function onClickRightIcon() {
    return setShowPassword(function (prev) {
      return !prev;
    });
  };
  return React__default.createElement(InputField, {
    placeholder: placeholder,
    id: "Password-input",
    type: showPassword ? 'text' : 'password',
    errorMsg: errorMsg,
    onBlur: onBlur,
    onChange: onChange,
    onPressEnter: onPressEnter,
    rightIcon: React__default.createElement(react.Button, {
      background: 'none',
      _hover: {
        background: 'none'
      },
      _active: {
        background: 'none'
      },
      "aria-label": 'show-hide-btn',
      onClick: onClickRightIcon
    }, showPassword ? React__default.createElement(icons.ViewIcon, null) : React__default.createElement(icons.ViewOffIcon, null))
  });
});
PasswordInputField.displayName = 'PasswordInputField';

var PinInputField = /*#__PURE__*/React.forwardRef(function (props, _) {
  var _props$numberOfFields = props.numberOfFields,
    numberOfFields = _props$numberOfFields === void 0 ? 3 : _props$numberOfFields,
    _onChange = props.onChange,
    size = props.size,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'outline' : _props$variant,
    name = props.name,
    _props$type = props.type,
    type = _props$type === void 0 ? 'alphanumeric' : _props$type,
    onComplete = props.onComplete,
    disabled = props.disabled;
  var styles = react.useStyleConfig('PinInputField', {
    size: size,
    variant: variant
  });
  var fieldsArray = React.useMemo(function () {
    return numberOfFields <= 6 ? Array.from({
      length: numberOfFields
    }) : Array.from({
      length: 3
    });
  }, [numberOfFields]);
  var uid = React.useId();
  return React__default.createElement(FormContainer, Object.assign({}, props), React__default.createElement(react.HStack, {
    spacing: 3
  }, React__default.createElement(react.PinInput, Object.assign({
    autoFocus: true,
    otp: true,
    focusBorderColor: "brand.primary.700",
    errorBorderColor: "red.300",
    isInvalid: Boolean(props == null ? void 0 : props.errorMsg),
    type: type,
    isDisabled: disabled,
    variant: variant
  }, props, {
    placeholder: "0",
    onChange: function onChange(value) {
      _onChange == null ? void 0 : _onChange({
        target: {
          value: value,
          name: name
        }
      });
    },
    onComplete: onComplete,
    "data-testid": uid + "-pininput-input"
  }), fieldsArray.map(function (_, idx) {
    return React__default.createElement(React__default.Fragment, {
      key: idx
    }, fieldsArray.length === 6 && idx === 3 && React__default.createElement(react.Box, {
      fontSize: "60px",
      fontWeight: "500",
      color: "#D0D5DD",
      height: "64px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      pb: "10px"
    }, "-"), React__default.createElement(react.PinInputField, {
      fontWeight: "semibold",
      w: "12",
      h: "12",
      key: idx,
      sx: styles,
      "data-testid": uid + "-pininput-pin-" + idx
    }));
  }))));
});
PinInputField.displayName = 'PinInputField';

var SelectField = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var options = props.options,
    onChange = props.onChange,
    onBlur = props.onBlur,
    name = props.name,
    placeholder = props.placeholder,
    defaultValue = props.defaultValue,
    disabled = props.disabled,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'outline' : _props$variant;
  var styles = react.useMultiStyleConfig('Form', {
    variant: variant
  });
  var uid = React.useId();
  return React__default.createElement(FormContainer, Object.assign({}, props), React__default.createElement(react.Select, {
    ref: ref,
    name: name,
    onChange: onChange,
    onBlur: onBlur,
    sx: styles.formInput,
    placeholder: placeholder,
    defaultValue: defaultValue,
    disabled: disabled,
    "data-testid": uid + "-select-field-select"
  }, options.map(function (_ref) {
    var value = _ref.value,
      label = _ref.label;
    return React__default.createElement("option", {
      key: value,
      style: {
        padding: 0
      },
      value: value
    }, label);
  })));
});

var TextAreaField = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$isDisabled = props.isDisabled,
    isDisabled = _props$isDisabled === void 0 ? false : _props$isDisabled,
    autoFocus = props.autoFocus,
    leftIcon = props.leftIcon,
    rightIcon = props.rightIcon,
    onChange = props.onChange,
    onBlur = props.onBlur,
    name = props.name,
    limit = props.limit,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'outline' : _props$variant,
    size = props.size;
  var styles = react.useMultiStyleConfig('Form', {
    variant: variant,
    size: size
  });
  var uid = React.useId();
  return React__default.createElement(FormContainer, Object.assign({}, props), React__default.createElement(react.InputGroup, null, leftIcon && React__default.createElement(react.InputLeftElement, {
    pointerEvents: "none"
  }, leftIcon), React__default.createElement(react.Textarea, Object.assign({
    isDisabled: isDisabled,
    maxLength: limit,
    errorBorderColor: "red.500",
    autoFocus: autoFocus,
    ref: ref,
    name: name,
    onChange: onChange,
    onBlur: onBlur,
    sx: styles.formTextarea,
    color: "gray.700",
    resize: "vertical"
  }, omit(props, 'errorMsg'), {
    "data-testid": uid + "-textarea-field-input"
  })), rightIcon && React__default.createElement(react.InputRightElement, null, rightIcon)));
});

exports.FormContainer = FormContainer;
exports.InputField = InputField;
exports.PasswordInputField = PasswordInputField;
exports.PinInputField = PinInputField;
exports.SelectField = SelectField;
exports.TextAreaField = TextAreaField;
//# sourceMappingURL=hds-forms.cjs.development.js.map
