'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var icons = require('@chakra-ui/icons');
var react = require('@chakra-ui/react');
var hdsForms = require('@highoutput/hds-forms');
var chakraReactSelect = require('chakra-react-select');
var React = require('react');
var React__default = _interopDefault(React);

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

var getStyles = function getStyles(_ref) {
  var error = _ref.error,
    darkMode = _ref.darkMode,
    testId = _ref.testId,
    multiple = _ref.multiple;
  return {
    menuList: function menuList(provided) {
      return _extends({}, provided, {
        _active: {
          background: 'transparent'
        },
        '&::-webkit-scrollbar': {
          width: '16px',
          scrollBehavior: 'smooth'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#E2E8F0',
          border: '6px solid rgba(0, 0, 0, 0)',
          backgroundClip: 'padding-box',
          borderRadius: '9999px'
        },
        backgroundColor: darkMode ? '#2E2E2E' : undefined,
        maxHeight: '210px'
      });
    },
    multiValueLabel: function multiValueLabel(baseStyle) {
      return _extends({}, baseStyle, {
        color: darkMode ? 'neutrals.100' : 'neutrals.700',
        fontSize: 'paragraphs-xs-default',
        letterSpacing: '0.02em'
      });
    },
    multiValue: function multiValue(baseStyle) {
      return _extends({}, baseStyle, {
        backgroundColor: darkMode ? 'neutrals.800' : 'alpha.white.500',
        border: "1px solid",
        borderColor: error ? 'interface.error.700' : darkMode ? 'neutrals.700' : 'neutrals.200',
        borderRadius: '6px',
        padding: '2px 5px',
        height: '24px',
        marginRight: '6px',
        'data-testid': testId
      });
    },
    valueContainer: function valueContainer(provided) {
      return _extends({}, provided, {
        padding: '0 0'
      });
    },
    multiValueRemove: function multiValueRemove(provided) {
      return _extends({}, provided, {
        _hover: {
          backgroundColor: 'none'
        },
        color: 'neutrals.400'
      });
    },
    control: function control(base, state) {
      return _extends({}, base, {
        _focus: {
          borderColor: error ? 'interface.error.700' : 'brand.primary.700'
        },
        _focusVisible: {
          outline: 'none'
        },
        _invalid: {
          borderColor: 'interface.error.700',
          _hover: {
            borderColor: 'none'
          }
        },
        _hover: {
          borderColor: 'brand.primary.700'
        },
        border: '1px solid',
        color: 'neutrals.900',
        backgroundColor: darkMode ? 'neutrals.800' : 'alpha.white.500',
        padding: multiple && state.hasValue ? '0px 14px' : '0px 12px',
        height: '44px',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        borderRadius: '8px'
      });
    },
    option: function option(style, _ref2) {
      var isFocused = _ref2.isFocused,
        isSelected = _ref2.isSelected;
      return _extends({}, style, {
        backgroundColor: isFocused ? darkMode ? 'neutrals.700' : 'gray.50' : isSelected ? darkMode ? 'neutrals.800' : 'gray.50' : undefined,
        _hover: {
          backgroundColor: darkMode ? '#525252' : 'gray.50'
        },
        _active: {
          backgroundColor: isSelected ? darkMode ? 'neutrals.700' : 'gray.400' : undefined
        },
        color: darkMode ? 'neutrals.100' : 'neutrals.900'
      });
    },
    menu: function menu(style) {
      return _extends({}, style, {
        zIndex: 9,
        backgroundColor: darkMode ? 'neutrals.800' : 'white'
      });
    },
    singleValue: function singleValue(styles) {
      return _extends({}, styles, {
        color: darkMode ? 'neutrals.100' : 'neutrals.900',
        fontSize: 'paragraph-sm-default'
      });
    }
  };
};

var _excluded = ["children", "data"];
var AutoCompleteInput = function AutoCompleteInput(props) {
  var _partProps$reactChakr;
  var value = props.value,
    options = props.options,
    darkMode = props.darkMode,
    placement = props.placement,
    showDropdownIndicator = props.showDropdownIndicator,
    errorMsg = props.errorMsg,
    partProps = props.partProps,
    autoFocus = props.autoFocus,
    disabled = props.disabled,
    onChangeValue = props.onChangeValue,
    multiple = props.multiple,
    loading = props.loading,
    placeholder = props.placeholder;
  var uid = React.useId();
  var styles = getStyles({
    error: Boolean(errorMsg),
    multiple: multiple,
    darkMode: darkMode
  });
  return React__default.createElement(hdsForms.FormContainer, Object.assign({}, props), React__default.createElement(chakraReactSelect.Select, {
    options: options,
    chakraStyles: (_partProps$reactChakr = partProps == null ? void 0 : partProps.reactChakraStyle) != null ? _partProps$reactChakr : styles,
    placeholder: placeholder,
    menuPlacement: placement != null ? placement : 'auto',
    isMulti: multiple,
    inputId: "auto-complete-input",
    useBasicStyles: true,
    "aria-label": "auto-complete-input",
    captureMenuScroll: true,
    backspaceRemovesValue: true,
    autoFocus: autoFocus,
    isLoading: loading,
    "data-testid": uid + "-auto-complete-input-field",
    isSearchable: true,
    isDisabled: disabled,
    isClearable: true,
    components: {
      ClearIndicator: function ClearIndicator() {
        return null;
      },
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      },
      DropdownIndicator: function DropdownIndicator(_ref) {
        var selectProps = _ref.selectProps;
        var icon = selectProps.menuIsOpen ? icons.ChevronUpIcon : icons.ChevronDownIcon;
        return showDropdownIndicator ? React__default.createElement(react.Icon, {
          as: icon,
          w: 4,
          h: 6,
          stroke: "brand.primary.500"
        }) : null;
      },
      MultiValueContainer: function MultiValueContainer(_ref2) {
        var children = _ref2.children,
          data = _ref2.data,
          props = _objectWithoutPropertiesLoose(_ref2, _excluded);
        return React__default.createElement(chakraReactSelect.chakraComponents.MultiValueContainer, Object.assign({}, props, {
          data: data
        }), React__default.createElement(react.HStack, {
          align: "center",
          spacing: "5px"
        }, data.avatar && React__default.createElement(react.Avatar, {
          width: "16px",
          height: "16px",
          src: data.avatar
        }), children));
      }
    },
    onChange: function onChange(options) {
      var _options$value;
      return isArray(options) ? onChangeValue(options.map(function (o) {
        return o.value;
      })) : onChangeValue((_options$value = options == null ? void 0 : options.value) != null ? _options$value : null);
    },
    value: options.filter(function (option) {
      return Array.isArray(value) ? value.some(function (val) {
        return val === option.value;
      }) : value === option.value;
    })
  }));
};
function isArray(subject) {
  return Array.isArray(subject);
}

exports.AutoCompleteInput = AutoCompleteInput;
//# sourceMappingURL=hds-autocomplete-input.cjs.development.js.map
