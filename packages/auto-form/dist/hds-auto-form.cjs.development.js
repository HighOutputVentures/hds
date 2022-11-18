'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('@chakra-ui/react');
var hdsForms = require('@highoutput/hds-forms');
var yup = require('@hookform/resolvers/yup');
var React = _interopDefault(require('react'));
var reactHookForm = require('react-hook-form');

var InputTypeEnum;
(function (InputTypeEnum) {
  InputTypeEnum["Textarea"] = "textarea";
  InputTypeEnum["Input"] = "input";
})(InputTypeEnum || (InputTypeEnum = {}));
var getInputType = function getInputType(input, type, form) {
  var _errors;
  var key = input.key,
    placeholder = input.placeholder,
    label = input.label;
  var register = form.register,
    formState = form.formState;
  var isSubmitting = formState.isSubmitting,
    errors = formState.errors;
  var error = (_errors = errors["" + key]) == null ? void 0 : _errors.message;
  var input_type = {
    textarea: React.createElement(hdsForms.TextAreaField, Object.assign({}, register(key), {
      key: key,
      id: key,
      label: label,
      placeholder: placeholder,
      errorMsg: error,
      disabled: isSubmitting,
      width: "100%"
    })),
    input: React.createElement(hdsForms.InputField, Object.assign({}, register(key), {
      key: key,
      id: key,
      label: label,
      placeholder: placeholder,
      errorMsg: error,
      disabled: isSubmitting
    }))
  };
  return input_type[type];
};
var AutoForm = function AutoForm(props) {
  var yupSchema = props.yupSchema,
    onSubmitForm = props.onSubmitForm,
    placeholders = props.placeholders;
  var dataKey = Object.keys(yupSchema.fields);
  var form = reactHookForm.useForm({
    resolver: yup.yupResolver(yupSchema),
    shouldUnregister: true
  });
  var handleSubmit = form.handleSubmit;
  var onSubmitData = function onSubmitData(s) {
    if (onSubmitForm) onSubmitForm(s);
  };
  return React.createElement(react.Box, {
    width: 512
  }, React.createElement(react.VStack, {
    as: 'form',
    onSubmitCapture: handleSubmit(onSubmitData)
  }, dataKey.map(function (key, idx) {
    var _yupSchema$fields$spe, _yupSchema$fields$spe2, _yupSchema$fields$spe3;
    var input = {
      key: key,
      label: (_yupSchema$fields$spe = yupSchema.fields["" + key].spec.label) != null ? _yupSchema$fields$spe : key.charAt(0).toUpperCase() + key.slice(1),
      placeholder: placeholders == null ? void 0 : placeholders[idx]
    };
    var type = ((_yupSchema$fields$spe2 = yupSchema.fields["" + key].spec) == null ? void 0 : (_yupSchema$fields$spe3 = _yupSchema$fields$spe2.meta) == null ? void 0 : _yupSchema$fields$spe3.type) || 'input';
    return getInputType(input, type, form);
  }), React.createElement(react.Button, {
    type: "submit",
    variant: 'primary',
    width: '100%',
    "data-testid": "button.form.submit"
  }, "Submit")));
};

exports.AutoForm = AutoForm;
//# sourceMappingURL=hds-auto-form.cjs.development.js.map
