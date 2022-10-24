'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var icons = require('@chakra-ui/icons');
var react = require('@chakra-ui/react');
var yup = require('@hookform/resolvers/yup');
var React = require('react');
var React__default = _interopDefault(React);
var reactHookForm = require('react-hook-form');
var yup$1 = require('yup');
var cookies = _interopDefault(require('js-cookie'));
var ReactTextareaAutosize = _interopDefault(require('react-textarea-autosize'));
var omit = _interopDefault(require('lodash/omit'));
var merge = _interopDefault(require('lodash/merge'));
var framerMotion = require('framer-motion');

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
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

var FormContainer = function FormContainer(_ref) {
  var id = _ref.id,
    label = _ref.label,
    labelColor = _ref.labelColor,
    errorMsg = _ref.errorMsg,
    helperMsg = _ref.helperMsg,
    children = _ref.children,
    disabled = _ref.disabled,
    partProps = _ref.partProps,
    variant = _ref.variant;
  var styles = react.useMultiStyleConfig('Form', {
    variant: variant
  });
  var uid = React.useId();
  return React__default.createElement(react.FormControl, Object.assign({
    id: id,
    isInvalid: Boolean(errorMsg),
    isReadOnly: disabled,
    "data-testid": uid + "-form-container-form-control",
    sx: styles.formControl
  }, partProps == null ? void 0 : partProps.formControl), label && React__default.createElement(react.FormLabel, Object.assign({
    borderRadius: "4px"
  }, labelColor && {
    color: labelColor
  }, {
    "data-testid": uid + "-form-container-label",
    sx: styles.formLabel
  }, partProps == null ? void 0 : partProps.formLabel), label), children, React__default.createElement(react.FormErrorMessage, Object.assign({
    sx: styles.formErrorMessage
  }, partProps == null ? void 0 : partProps.formErrorMessage, {
    "data-testid": uid + "-form-container-error"
  }), errorMsg), helperMsg && React__default.createElement(react.FormHelperText, Object.assign({
    sx: styles.formHelperText
  }, partProps == null ? void 0 : partProps.formErrorMessage, {
    "data-testid": uid + "-form-container-helper"
  }), helperMsg));
};

var InputField = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'text' : _props$type,
    _props$size = props.size,
    size = _props$size === void 0 ? 'md' : _props$size,
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
    partProps = props.partProps,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'primary' : _props$variant,
    onPressEnter = props.onPressEnter,
    inputValue = props.inputValue;
  var styles = react.useMultiStyleConfig('Form', {
    variant: variant,
    size: size
  });
  var uid = React.useId();
  return React__default.createElement(FormContainer, Object.assign({}, props), React__default.createElement(react.InputGroup, Object.assign({
    sx: styles.formInputGroup
  }, partProps == null ? void 0 : partProps.inputGroup, {
    size: size,
    "data-testid": uid + "-input-field-group"
  }), leftIcon && React__default.createElement(react.InputLeftElement, Object.assign({}, partProps == null ? void 0 : partProps.inputLeftElement, {
    "data-testid": uid + "-input-field-left-element"
  }), leftIcon), React__default.createElement(react.Input, Object.assign({
    sx: styles.formInput
  }, partProps == null ? void 0 : partProps.input, {
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
    variant: "check-in",
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') {
        if (onPressEnter) onPressEnter();
      }
    },
    value: inputValue ? inputValue.trim() : undefined,
    role: "input",
    "data-testid": uid + "-input-field-input"
  })), rightIcon && React__default.createElement(react.InputRightElement, Object.assign({}, partProps == null ? void 0 : partProps.inputRightElement, {
    "data-testid": uid + "-input-field-right-element"
  }), rightIcon)));
});

var ArrayFieldSchema = /*#__PURE__*/yup$1.object().shape({
  input: yup$1.array(yup$1.object().shape({
    value: yup$1.string().required('input is required')
  }))
}).required();

var ArrayField = function ArrayField(props) {
  var placeholder = props.placeholder,
    defaultValues = props.defaultValues,
    partProps = props.partProps,
    onChange = props.onChange,
    onRemove = props.onRemove,
    onBlur = props.onBlur,
    onAppend = props.onAppend,
    label = props.label,
    isRequired = props.isRequired,
    buttonAddChildren = props.buttonAddChildren,
    buttonRemoveChildren = props.buttonRemoveChildren,
    maxValue = props.maxValue;
  var _useForm = reactHookForm.useForm({
      defaultValues: defaultValues,
      resolver: isRequired ? yup.yupResolver(ArrayFieldSchema) : undefined
    }),
    control = _useForm.control,
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    formState = _useForm.formState;
  var _useFieldArray = reactHookForm.useFieldArray({
      control: control,
      name: 'input'
    }),
    fields = _useFieldArray.fields,
    append = _useFieldArray.append,
    remove = _useFieldArray.remove;
  var handleAddField = handleSubmit( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (maxValue && fields.length <= maxValue - 1) {
                append({
                  value: ''
                });
                onAppend(data);
              }
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  var handleOnBlurInput = handleSubmit( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              onBlur(data);
            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  var handleRemove = handleSubmit( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              onRemove(data);
            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  var handleOnChangeInput = handleSubmit( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              onChange(data);
            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  return React__default.createElement(react.Flex, {
    flexDir: "column",
    gap: 2
  }, label && React__default.createElement(react.Text, Object.assign({}, partProps == null ? void 0 : partProps.labelProps), label), fields.map(function (item, idx) {
    var _formState$errors, _formState$errors$inp, _formState$errors$inp2, _formState$errors$inp3, _partProps$buttonRemo, _partProps$buttonRemo2, _partProps$buttonAddP, _partProps$buttonAddP2;
    return React__default.createElement(react.Flex, {
      gap: 2,
      key: item.id,
      onBlur: handleOnBlurInput,
      onChange: handleOnChangeInput
    }, React__default.createElement(InputField, Object.assign({
      id: 'input',
      placeholder: placeholder != null ? placeholder : ''
    }, register("input." + idx + ".value"), {
      partProps: partProps,
      errorMsg: isRequired ? (_formState$errors = formState.errors) == null ? void 0 : (_formState$errors$inp = _formState$errors.input) == null ? void 0 : (_formState$errors$inp2 = _formState$errors$inp[idx]) == null ? void 0 : (_formState$errors$inp3 = _formState$errors$inp2.value) == null ? void 0 : _formState$errors$inp3.message : ''
    })), React__default.createElement(react.VStack, null, React__default.createElement(react.Button, Object.assign({
      variant: "outline",
      onClick: function onClick() {
        remove(idx);
        handleRemove();
      },
      disabled: fields.length <= 1,
      width: "32px",
      height: "40px"
    }, partProps == null ? void 0 : (_partProps$buttonRemo = partProps.buttonRemoveProps) == null ? void 0 : _partProps$buttonRemo.buttonProps), buttonRemoveChildren ? buttonRemoveChildren : React__default.createElement(react.Icon, Object.assign({}, partProps == null ? void 0 : (_partProps$buttonRemo2 = partProps.buttonRemoveProps) == null ? void 0 : _partProps$buttonRemo2.iconProps, {
      as: icons.DeleteIcon
    }))), idx === fields.length - 1 && React__default.createElement(react.Button, Object.assign({
      variant: "outline",
      width: "32px",
      height: "40px",
      disabled: maxValue === fields.length,
      onClick: handleAddField
    }, partProps == null ? void 0 : (_partProps$buttonAddP = partProps.buttonAddProps) == null ? void 0 : _partProps$buttonAddP.buttonProps), buttonAddChildren ? buttonAddChildren : React__default.createElement(react.Icon, Object.assign({}, partProps == null ? void 0 : (_partProps$buttonAddP2 = partProps.buttonAddProps) == null ? void 0 : _partProps$buttonAddP2.iconProps, {
      as: icons.AddIcon
    })))));
  }));
};

var AuthContext = /*#__PURE__*/React.createContext({
  hostname: ''
});

var _excluded = ["children"];
function AuthProvider(_ref) {
  var children = _ref.children,
    config = _objectWithoutPropertiesLoose(_ref, _excluded);
  return React.createElement(AuthContext.Provider, {
    value: config
  }, children);
}

var accessTokenId = '__AuthToken__';
var constants = {
  accessTokenId: accessTokenId
};

function getAuthState() {
  var token = cookies.get(constants.accessTokenId);
  return {
    token: token,
    status: token ? 'authenticated' : 'unauthenticated'
  };
}

function logout(callback) {
  cookies.remove(constants.accessTokenId);
  callback == null ? void 0 : callback();
}

function postJson(_x, _x2) {
  return _postJson.apply(this, arguments);
}
function _postJson() {
  _postJson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, postfields) {
    var response, parsed;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              body: JSON.stringify(postfields),
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            });
          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();
          case 5:
            parsed = _context.sent;
            if (response.ok) {
              _context.next = 8;
              break;
            }
            throw new Error(parsed.error.message);
          case 8:
            return _context.abrupt("return", parsed);
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _postJson.apply(this, arguments);
}

function useAuthService() {
  var _React$useContext = React.useContext(AuthContext),
    hostname = _React$useContext.hostname;
  var generateOtp = React.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(emailAddress) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return postJson(hostname + "/otp/generate", {
                emailAddress: emailAddress
              });
            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [hostname]);
  var validateOtp = React.useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(otp) {
      var _yield$postJson, token;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return postJson(hostname + "/otp/validate", {
                otp: otp
              });
            case 2:
              _yield$postJson = _context2.sent;
              token = _yield$postJson.token;
              cookies.set(constants.accessTokenId, token, {
                secure: "development" === 'production',
                expires: 29,
                sameSite: 'strict'
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), [hostname]);
  return {
    generateOtp: generateOtp,
    validateOtp: validateOtp
  };
}

function useAuthState(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    onauthenticated = _ref.onauthenticated,
    onunauthenticated = _ref.onunauthenticated;
  var _React$useState = React.useState({
      status: 'loading'
    }),
    state = _React$useState[0],
    setState = _React$useState[1];
  var handleState = React.useCallback(function () {
    var newState = getAuthState();
    setState(newState);
  }, []);
  React.useEffect(function () {
    handleState();
    return function () {
      return setState({
        status: 'loading'
      });
    };
  }, [handleState]);
  React.useEffect(function () {
    document.addEventListener('visibilitychange', handleState);
    return function () {
      return document.removeEventListener('visibilitychange', handleState);
    };
  }, [handleState]);
  React.useEffect(function () {
    if (state.status === 'authenticated') onauthenticated == null ? void 0 : onauthenticated();
    if (state.status === 'unauthenticated') onunauthenticated == null ? void 0 : onunauthenticated();
  }, [onauthenticated, onunauthenticated, state.status]);
  return state;
}

/**
 *
 * _NOT IMPLEMENTED YET_
 *
 */
function useProfile() {
  return {};
}

var Pagination = function Pagination(_ref) {
  var page = _ref.page,
    size = _ref.size,
    total = _ref.total,
    onPageChange = _ref.onPageChange,
    onSizeChange = _ref.onSizeChange,
    options = _ref.options,
    partProps = _ref.partProps,
    variant = _ref.variant;
  var styles = react.useMultiStyleConfig('Pagination', {
    variant: variant
  });
  var id = React.useId();
  var hasPrev = page > 1;
  var hasNext = page * size < total;
  var handleSizeChange = function handleSizeChange(e) {
    if (onSizeChange) onSizeChange(parseInt(e.target.value));
  };
  var handlePageChange = function handlePageChange(type) {
    var newPage = type === 'increment' ? page + 1 : page - 1;
    return function () {
      return onPageChange ? onPageChange(newPage) : newPage;
    };
  };
  var indexStart = (page - 1) * size + 1;
  var indexStop = page * size;
  var remainder = total % size;
  var getPageInfo = React.useCallback(function () {
    var pageInfo = '';
    pageInfo += 'Page ';
    pageInfo += indexStart;
    pageInfo += '-';
    pageInfo += indexStop > total ? indexStart - 1 + remainder : indexStop;
    pageInfo += ' of ';
    pageInfo += total;
    return pageInfo;
  }, [indexStart, indexStop, total, remainder]);
  return React__default.createElement(react.Flex, Object.assign({
    id: id,
    alignItems: "center",
    justifyContent: "space-between",
    sx: styles.container
  }, partProps == null ? void 0 : partProps.container), React__default.createElement(react.HStack, Object.assign({
    spacing: 2
  }, partProps == null ? void 0 : partProps.dropdownContainer), React__default.createElement(react.Text, Object.assign({
    as: "span",
    whiteSpace: "nowrap",
    sx: styles.dropdownLabel
  }, partProps == null ? void 0 : partProps.dropdownLabel), "Show rows per page"), React__default.createElement(react.Select, Object.assign({
    "data-testid": id + "-pagination.dropdown",
    onChange: handleSizeChange,
    value: size,
    sx: styles.dropdown
  }, partProps == null ? void 0 : partProps.dropdown), options.sizes.map(function (size, index) {
    return React__default.createElement("option", {
      value: size,
      key: id + size + index,
      "data-testid": id + "-" + size + "-" + index
    }, size);
  }))), React__default.createElement(react.HStack, Object.assign({
    spacing: 4
  }, partProps == null ? void 0 : partProps.captionAndControlsContainer), React__default.createElement(react.Text, Object.assign({
    as: "span",
    sx: styles.caption
  }, partProps == null ? void 0 : partProps.caption), getPageInfo()), React__default.createElement(react.HStack, Object.assign({}, partProps == null ? void 0 : partProps.controlsContainer), React__default.createElement(react.IconButton, Object.assign({
    "aria-label": "",
    "data-testid": id + "-pagination.controls.prev",
    // icon={
    //   <ChevronLeftIcon
    //     color="white"
    //     sx={styles.controlIcons}
    //     {...partProps?.controlIcons}
    //   />
    // }
    onClick: handlePageChange('decrement'),
    paddingTop: "10px",
    paddingLeft: "12px",
    disabled: !hasPrev,
    sx: styles.iconButton
  }, partProps == null ? void 0 : partProps.controls)), React__default.createElement(react.IconButton, Object.assign({
    "aria-label": "",
    "data-testid": id + "-pagination.controls.next",
    // icon={
    //   <ChevronRightIcon
    //     color="white"
    //     sx={styles.controlIcons}
    //     {...partProps?.controlIcons}
    //   />
    // }
    onClick: handlePageChange('increment'),
    disabled: !hasNext,
    paddingTop: "10px",
    paddingLeft: "12px",
    sx: styles.iconButton
  }, partProps == null ? void 0 : partProps.controls)))));
};

var PasswordInputField = /*#__PURE__*/React.forwardRef(function (props, _) {
  var partProps = props.partProps,
    placeholder = props.placeholder,
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
    partProps: partProps,
    type: showPassword ? 'text' : 'password',
    errorMsg: errorMsg,
    onBlur: onBlur,
    onChange: onChange,
    onPressEnter: onPressEnter,
    rightIcon: React__default.createElement(react.Button, Object.assign({
      background: 'none',
      _hover: {
        background: 'none'
      },
      _active: {
        background: 'none'
      }
    }, partProps == null ? void 0 : partProps.button, {
      "aria-label": 'show-hide-btn',
      onClick: onClickRightIcon
    }), showPassword ? React__default.createElement(icons.ViewIcon, null) : React__default.createElement(icons.ViewOffIcon, null))
  });
});
PasswordInputField.displayName = 'PasswordInputField';

var PinInputField = /*#__PURE__*/React.forwardRef(function (props, _) {
  var _props$numberOfFields = props.numberOfFields,
    numberOfFields = _props$numberOfFields === void 0 ? 6 : _props$numberOfFields,
    _onChange = props.onChange,
    size = props.size,
    variant = props.variant,
    partProps = props.partProps,
    name = props.name,
    _props$type = props.type,
    type = _props$type === void 0 ? 'alphanumeric' : _props$type,
    onComplete = props.onComplete;
  var styles = react.useStyleConfig('PinInputField', {
    size: size,
    variant: variant
  });
  var fieldsArray = React.useMemo(function () {
    return Array.from({
      length: numberOfFields
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
    type: type
  }, props, {
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
    return React__default.createElement(react.PinInputField, Object.assign({
      fontSize: "lg",
      fontWeight: "semibold",
      borderRadius: "4px",
      w: "12",
      h: "12",
      key: idx,
      sx: styles
    }, partProps == null ? void 0 : partProps.pin, {
      "data-testid": uid + "-pininput-pin-" + idx
    }));
  }))));
});
PinInputField.displayName = 'PinInputField';

var _excluded$1 = ["image", "size", "variant", "selectColor"];
var RadioImage = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var image = props.image,
    size = props.size,
    variant = props.variant,
    selectColor = props.selectColor,
    rest = _objectWithoutPropertiesLoose(props, _excluded$1);
  var styles = react.useStyleConfig('RadioImage', {
    size: size,
    variant: variant
  });
  var uid = React.useId();
  var _useRadio = react.useRadio(rest),
    state = _useRadio.state,
    getInputProps = _useRadio.getInputProps,
    getCheckboxProps = _useRadio.getCheckboxProps,
    htmlProps = _useRadio.htmlProps,
    getLabelProps = _useRadio.getLabelProps;
  return React__default.createElement(react.chakra.label, Object.assign({}, htmlProps, {
    cursor: "pointer"
  }), React__default.createElement(react.chakra.input, Object.assign({}, getInputProps({}), {
    hidden: true,
    "data-testid": uid + "-radio-image-input"
  })), React__default.createElement(react.Box, Object.assign({
    ref: ref,
    w: 12,
    p: 1,
    sx: styles
  }, getCheckboxProps(), {
    rounded: "full",
    bg: state.isChecked ? selectColor || styles.color || 'green.500' : 'transparent',
    "data-testid": uid + "-radio-image-box"
  }), React__default.createElement(react.Image, Object.assign({
    src: image,
    rounded: "full"
  }, getLabelProps(), {
    "data-testid": uid + "-radio-image-container"
  }))));
});

var RadioImageGroup = function RadioImageGroup(_ref) {
  var avatars = _ref.avatars,
    onChange = _ref.onChange,
    defaultValue = _ref.defaultValue;
  var _useRadioGroup = react.useRadioGroup({
      defaultValue: defaultValue || '',
      onChange: onChange
    }),
    getRadioProps = _useRadioGroup.getRadioProps,
    getRootProps = _useRadioGroup.getRootProps;
  var uid = React.useId();
  return React__default.createElement(react.Stack, Object.assign({}, getRootProps(), {
    "data-testid": uid + "-radio-image-group-stack-container"
  }), React__default.createElement(react.HStack, {
    "data-testid": uid + "-radio-image-group-horizontal-stack"
  }, avatars.map(function (avatar) {
    return React__default.createElement(RadioImage, Object.assign({}, getRadioProps({
      value: avatar.value
    }), {
      key: avatar.value,
      image: avatar.image
    }));
  })));
};

var SelectField = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var options = props.options,
    onChange = props.onChange,
    onBlur = props.onBlur,
    name = props.name,
    placeholder = props.placeholder,
    defaultValue = props.defaultValue,
    disabled = props.disabled,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'primary' : _props$variant;
  var styles = react.useMultiStyleConfig('Form', {
    variant: variant
  });
  var uid = React.useId();
  return React__default.createElement(FormContainer, Object.assign({}, props), React__default.createElement(react.Select, Object.assign({}, props, {
    ref: ref,
    name: name,
    onChange: onChange,
    onBlur: onBlur,
    sx: styles.formInput,
    placeholder: placeholder,
    defaultValue: defaultValue,
    disabled: disabled,
    "data-testid": uid + "-select-field-select"
  }), options.map(function (_ref) {
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

var _excluded$2 = ["minRows", "maxRows"];
var TextareaAutosize = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var minRows = _ref.minRows,
    maxRows = _ref.maxRows,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  var uid = React.useId();
  return React.createElement(react.Textarea, Object.assign({
    as: ReactTextareaAutosize,
    ref: ref,
    width: "full",
    resize: "none",
    minHeight: "unset",
    overflowX: "hidden",
    overflowY: "auto",
    transition: "height none",
    minRows: minRows != null ? minRows : 2,
    maxRows: maxRows != null ? maxRows : 4,
    "data-testid": uid + "-textarea-autosize"
  }, props));
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
    variant = _props$variant === void 0 ? 'primary' : _props$variant,
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

var Box = {
  baseStyle: {},
  variants: {}
};

var Button = {
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
  variants: {
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
  },
  defaultProps: {
    variant: 'primary'
  }
};

var Checkbox = {
  baseStyle: {
    control: {
      borderRadius: 'base',
      padding: '6px'
    }
  },
  variants: {
    primary: {
      control: {
        borderColor: 'gray.200',
        pointerEvents: 'none',
        _focus: {
          shadow: 'none'
        },
        _checked: {
          bg: 'brand.primary.700',
          color: 'brand.primary.700',
          borderColor: 'brand.primary.700',
          _hover: {
            bg: 'brand.primary.700',
            color: 'brand.primary.700',
            borderColor: 'brand.primary.700'
          }
        }
      }
    },
    orange: {
      control: {
        borderColor: 'gray.200',
        _focus: {
          shadow: 'none'
        },
        _checked: {
          bg: 'orange.500',
          color: 'white',
          borderColor: 'orange.500',
          _hover: {
            bg: 'orange.500',
            color: 'white',
            borderColor: 'orange.500'
          }
        }
      }
    }
  },
  defaultProps: {
    variant: 'primary'
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

var sizeText = {
  'heading-web-1': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '80px',
    lineHeight: '88px',
    letterSpacing: '-0.02em'
  },
  'heading-web-2': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '56px',
    lineHeight: '64px',
    letterSpacing: '-0.02em'
  },
  'heading-web-3': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '40px',
    lineHeight: '44px',
    letterSpacing: '-0.02em'
  },
  'heading-web-4': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '32px',
    lineHeight: '36px',
    letterSpacing: '-0.02em'
  },
  'heading-web-5': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '-0.02em'
  },
  'heading-web-6': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.02em'
  },
  'heading-mobile-1': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '44px',
    lineHeight: '48px',
    letterSpacing: '-0.012em'
  },
  'heading-mobile-2': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '36px',
    letterSpacing: '-0.012em'
  },
  'heading-mobile-3': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '28px',
    letterSpacing: '-0.012em'
  },
  'heading-mobile-4': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.012em'
  },
  'heading-mobile-5': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '20px',
    letterSpacing: '-0.012em'
  },
  'heading-mobile-6': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '18px',
    letterSpacing: '-0.012em'
  },
  'paragraph-xxl-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '48px'
  },
  'paragraph-xl-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '34px',
    lineHeight: '36px'
  },
  'paragraph-lg-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '32px'
  },
  'paragraph-md-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '28px'
  },
  'paragraph-sm-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px'
  },
  'paragraph-xs-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px'
  },
  'paragraph-xxs-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px'
  },
  'paragraph-xxl-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '48px'
  },
  'paragraph-xl-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '34px',
    lineHeight: '36px'
  },
  'paragraph-lg-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '32px'
  },
  'paragraph-md-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '28px'
  },
  'paragraph-sm-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em'
  },
  'paragraph-xs-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.02em'
  },
  'paragraph-xxs-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.02em'
  },
  'paragraph-xxl-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '48px'
  },
  'paragraph-xl-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '34px',
    lineHeight: '36px'
  },
  'paragraph-lg-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '32px'
  },
  'paragraph-md-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '28px'
  },
  'paragraph-sm-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em'
  },
  'paragraph-xs-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.02em'
  },
  'paragraph-xxs-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.02em'
  },
  'label-xl-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'label-lg-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'label-md-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'label-sm-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'label-xs-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.02em'
  },
  'label-xxs-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.02em'
  },
  'label-xl-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'label-lg-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'label-md-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'label-sm-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'label-xs-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.02em'
  },
  'label-xxs-italic': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.02em'
  },
  'label-xl-medium': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'label-lg-medium': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'label-md-medium': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'label-sm-medium': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'label-xs-medium': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.02em'
  },
  'label-xxs-medium': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.02em'
  },
  'label-xl-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'label-lg-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'label-md-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'label-sm-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'label-xs-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.02em'
  },
  'label-xxs-bold': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.02em'
  },
  'uppercase-xl-default': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'uppercase-lg-default': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'uppercase-md-default': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'uppercase-sm-default': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'uppercase-xs-default': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '14px'
  },
  'uppercase-xxs-default': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '12px'
  },
  'uppercase-xl-italic': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'uppercase-lg-italic': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'uppercase-md-italic': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'uppercase-sm-italic': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'uppercase-xs-italic': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '14px'
  },
  'uppercase-xxs-italic': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '12px'
  },
  'uppercase-xl-medium': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'uppercase-lg-medium': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'uppercase-md-medium': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'uppercase-sm-medium': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'uppercase-xs-medium': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '14px'
  },
  'uppercase-xxs-medium': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '12px'
  },
  'uppercase-xl-bold': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'uppercase-lg-bold': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'uppercase-md-bold': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'uppercase-sm-bold': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'uppercase-xs-bold': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '14px'
  },
  'uppercase-xxs-bold': {
    textTransform: 'upperCase',
    letterSpacing: '0.05em',
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '12px'
  },
  'monospace-xl-default': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'monospace-lg-default': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'monospace-md-default': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'monospace-sm-default': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'monospace-xs-default': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.02em'
  },
  'monospace-xxs-default': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '12px'
  },
  'monospace-xl-italic': {
    fontFamily: 'SF Mono',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'monospace-lg-italic': {
    fontFamily: 'SF Mono',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'monospace-md-italic': {
    fontFamily: 'SF Mono',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'monospace-sm-italic': {
    fontFamily: 'SF Mono',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'monospace-xs-italic': {
    fontFamily: 'SF Mono',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '14px'
  },
  'monospace-xxs-italic': {
    fontFamily: 'SF Mono',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '12px'
  },
  'monospace-xl-medium': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'monospace-lg-medium': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'monospace-md-medium': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'monospace-sm-medium': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'monospace-xs-medium': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '14px'
  },
  'monospace-xxs-medium': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '12px'
  },
  'monospace-xl-bold': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '32px'
  },
  'monospace-lg-bold': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '28px'
  },
  'monospace-md-bold': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px'
  },
  'monospace-sm-bold': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '18px'
  },
  'monospace-xs-bold': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '14px'
  },
  'monospace-xxs-bold': {
    fontFamily: 'SF Mono',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '12px'
  },
  'button-default': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '24px'
  },
  'button-uppercase': {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '18px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase'
  }
};
var Text = {
  baseStyle: {
    fontStyle: 'Helvetica Neue',
    fontColor: 'neutrals.900'
  },
  sizes: sizeText
};

var Form = {
  parts: ['formLabel', 'formInput', 'formTextarea'],
  baseStyle: {
    formLabel: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '19px'
    },
    formInput: {
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '19px',
      border: '1px solid',
      borderColor: 'gray.100',
      borderRadius: 'base',
      _placeholder: {
        color: 'gray.400'
      },
      padding: 2
    },
    formTextarea: {
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '19px',
      border: '1px solid',
      borderColor: 'gray.100',
      borderRadius: 'base',
      _placeholder: {
        color: 'gray.400'
      },
      padding: 2
    }
  },
  sizes: {
    formLabel: sizeText
  },
  variants: {
    primary: {
      formInput: {
        _focus: {
          border: '2px solid',
          borderColor: 'brand.primary.700'
        },
        _invalid: {
          _focus: {
            border: '2px solid',
            borderColor: 'red.500'
          }
        },
        fontSize: '14px'
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
    variant: 'primary'
  }
};

var Heading = {
  baseStyle: {
    marginBottom: 4
  },
  variants: {
    primary: {
      fontSize: '39px',
      lineHeight: '52px',
      color: 'gray.700'
    },
    modalTitle: {
      fontSize: '32px',
      lineHeight: '42px',
      color: 'gray.700'
    }
  }
};

var Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'underline'
    }
  },
  sizes: sizeText,
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

var RadioImage$1 = {
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
  Button: Button,
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
  RadioImage: RadioImage$1
};

var config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

var fonts = {
  heading: 'Helvetica Neue, sans-serif',
  body: 'Helvetica Neue, sans-serif'
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
      color: 'gray.800',
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

var _excluded$3 = ["children"];
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  return React__default.createElement(react.ChakraProvider, Object.assign({}, props, {
    theme: extendTheme(props.theme)
  }), children);
};

var withCredentialFormSchemaEmail = /*#__PURE__*/yup$1.object().shape({
  email: /*#__PURE__*/yup$1.string().email('Please enter a valid email address').required('Email is required.'),
  password: /*#__PURE__*/yup$1.string().required('Password is required')
});
var withCredentialFormSchemaName = /*#__PURE__*/yup$1.object().shape({
  name: /*#__PURE__*/yup$1.string().required('Name is required').trim(),
  password: /*#__PURE__*/yup$1.string().required('Password is required')
});
var generateEmailOTPSchema = /*#__PURE__*/yup$1.object().shape({
  emailAddress: /*#__PURE__*/yup$1.string().email('Please enter a valid email address.').required('Email is required.')
});
var authenticateSchema = /*#__PURE__*/yup$1.object().shape({
  otp: /*#__PURE__*/yup$1.string().when('$numberOfFields', function (numberOfFields, authenticateSchema) {
    return authenticateSchema.length(numberOfFields, 'OTP code is incomplete.');
  }).required('OTP code is required.')
});

var CredentialLoginForm = function CredentialLoginForm(props) {
  var _formState$errors$nam, _formState$errors$ema, _formState$errors$pas;
  var partProps = props.partProps,
    signUpTitle = props.signUpTitle,
    loginTitle = props.loginTitle,
    variant = props.variant,
    onSubmit = props.onSubmit,
    _props$nameLabel = props.nameLabel,
    nameLabel = _props$nameLabel === void 0 ? 'Username' : _props$nameLabel;
  var _React$useState = React__default.useState(false),
    showPassword = _React$useState[0],
    setShowPassword = _React$useState[1];
  var _React$useState2 = React__default.useState(false),
    isSignUp = _React$useState2[0],
    setIsSignUp = _React$useState2[1];
  var _useForm = reactHookForm.useForm({
      resolver: yup.yupResolver(variant === 'name-password' ? withCredentialFormSchemaName : withCredentialFormSchemaEmail),
      shouldUnregister: true
    }),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    formState = _useForm.formState;
  var onSubmitForm = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (onSubmit) {
                onSubmit(values);
              }
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onSubmitForm(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return React__default.createElement(react.Box, Object.assign({
    as: 'form',
    maxW: 512
  }, partProps == null ? void 0 : partProps.containerProps, {
    onSubmit: handleSubmit(onSubmitForm)
  }), React__default.createElement(react.Center, {
    m: 0,
    p: 0
  }, isSignUp && signUpTitle ? signUpTitle : !isSignUp && loginTitle ? loginTitle : !isSignUp && !loginTitle ? React__default.createElement(react.Text, Object.assign({
    size: "text-3xl",
    my: 8
  }, partProps == null ? void 0 : partProps.title), "Login") : isSignUp && !signUpTitle && React__default.createElement(react.Text, Object.assign({
    size: "text-3xl",
    my: 8
  }, partProps == null ? void 0 : partProps.title), "Sign up")), React__default.createElement(react.Stack, {
    spacing: '1rem'
  }, variant === 'name-password' ? React__default.createElement(InputField, Object.assign({}, register('name'), {
    id: 'name',
    label: (nameLabel == null ? void 0 : nameLabel.charAt(0).toUpperCase()) + (nameLabel == null ? void 0 : nameLabel.slice(1)),
    placeholder: "Input your " + (nameLabel == null ? void 0 : nameLabel.toLowerCase()),
    errorMsg: (_formState$errors$nam = formState.errors.name) == null ? void 0 : _formState$errors$nam.message,
    disabled: formState.isSubmitting,
    partProps: {
      input: {
        'aria-label': 'name-input',
        role: 'input'
      }
    }
  }, partProps == null ? void 0 : partProps.input)) : React__default.createElement(InputField, Object.assign({}, register('email'), {
    id: 'email',
    label: "Email",
    placeholder: "Input your email",
    errorMsg: (_formState$errors$ema = formState.errors.email) == null ? void 0 : _formState$errors$ema.message,
    disabled: formState.isSubmitting,
    partProps: {
      input: {
        'aria-label': 'email-input',
        role: 'input'
      }
    }
  }, partProps == null ? void 0 : partProps.input)), React__default.createElement(InputField, Object.assign({}, register('password'), {
    id: "password",
    label: "Password",
    type: showPassword ? 'text' : 'password',
    placeholder: "Input your password",
    errorMsg: (_formState$errors$pas = formState.errors.password) == null ? void 0 : _formState$errors$pas.message,
    disabled: formState.isSubmitting,
    rightIcon: React__default.createElement(react.Button, {
      "data-testid": 'show-hide-btn',
      background: 'none',
      _hover: {
        background: 'none'
      },
      _active: {
        background: 'none'
      },
      "aria-label": showPassword ? 'show-password' : 'hide-password',
      onClick: function onClick() {
        return setShowPassword(function (prev) {
          return !prev;
        });
      }
    }, showPassword ? React__default.createElement(icons.ViewIcon, null) : React__default.createElement(icons.ViewOffIcon, null)),
    partProps: {
      input: {
        'aria-label': 'password-input',
        role: 'input'
      }
    }
  }, partProps == null ? void 0 : partProps.input))), React__default.createElement(react.Button, Object.assign({
    w: "full",
    variant: "primary",
    isLoading: formState.isSubmitting,
    type: "submit",
    my: 8
  }, partProps == null ? void 0 : partProps.button), isSignUp ? 'Sign Up' : 'Login'), React__default.createElement(react.Center, null, React__default.createElement(react.Text, null, isSignUp ? 'Already have an account?' : 'No account yet?', ' ', React__default.createElement(react.Text, {
    as: 'a',
    "data-testid": 'switch-form-link',
    _hover: {
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    "aria-label": isSignUp ? 'login-link-label' : 'signup-link-label',
    onClick: function onClick() {
      return setIsSignUp(function (prev) {
        return !prev;
      });
    },
    fontWeight: 'bold',
    role: 'link'
  }, isSignUp ? 'Login' : 'Sign up'))));
};

var OTPForm = function OTPForm(props) {
  var _formStateOtp$errors$, _buttonRef$current;
  var subTitle = props.subTitle,
    title = props.title,
    _props$otpType = props.otpType,
    otpType = _props$otpType === void 0 ? 'number' : _props$otpType,
    _props$numberOfFields = props.numberOfFields,
    numberOfFields = _props$numberOfFields === void 0 ? 6 : _props$numberOfFields,
    buttonText = props.buttonText,
    onSubmitOTPValue = props.onSubmitOTPValue,
    partProps = props.partProps;
  var buttonRef = React__default.useRef(null);
  var _useForm = reactHookForm.useForm({
      resolver: yup.yupResolver(authenticateSchema),
      context: {
        numberOfFields: numberOfFields
      },
      shouldUnregister: true,
      defaultValues: {
        otp: ''
      }
    }),
    registerOtp = _useForm.register,
    handleSubmitOtp = _useForm.handleSubmit,
    formStateOtp = _useForm.formState;
  var onSubmitOTP = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (onSubmitOTPValue) {
                onSubmitOTPValue(value);
              }
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onSubmitOTP(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return React__default.createElement(react.Box, Object.assign({
    as: "form",
    w: 350,
    "data-testid": "box.otpform.form",
    onSubmit: handleSubmitOtp(onSubmitOTP)
  }, partProps == null ? void 0 : partProps.container), React__default.createElement(react.Box, {
    mb: "6"
  }, title ? title : React__default.createElement(react.Heading, Object.assign({
    as: "h1",
    mb: 2
  }, partProps == null ? void 0 : partProps.title), "Check your inbox"), subTitle ? subTitle : React__default.createElement(react.Text, Object.assign({}, partProps == null ? void 0 : partProps.subTitle), "We have sent a 6-digit code to your email", ' ')), React__default.createElement(PinInputField, Object.assign({
    id: "otp"
  }, registerOtp('otp'), {
    errorMsg: (_formStateOtp$errors$ = formStateOtp.errors.otp) == null ? void 0 : _formStateOtp$errors$.message,
    disabled: formStateOtp.isSubmitting,
    numberOfFields: numberOfFields,
    autoFocus: true,
    onComplete: (_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.click,
    type: otpType,
    partProps: {
      pin: partProps == null ? void 0 : partProps.pin
    }
  })), React__default.createElement(react.Button, Object.assign({
    variant: 'primary',
    ref: buttonRef,
    type: "submit",
    isLoading: formStateOtp.isSubmitting,
    width: '100%',
    "data-testid": "button.otp.submit",
    marginTop: 5
  }, partProps == null ? void 0 : partProps.button), buttonText ? buttonText : 'Sign In'));
};

var OTPVerificationForm = function OTPVerificationForm(props) {
  var _errors$emailAddress;
  var otpReceived = props.otpReceived,
    onSubmitEmailValue = props.onSubmitEmailValue,
    numberOfFields = props.numberOfFields,
    title = props.title,
    subTitle = props.subTitle,
    onSubmitOTPValue = props.onSubmitOTPValue,
    partProps = props.partProps;
  var _useForm = reactHookForm.useForm({
      resolver: yup.yupResolver(generateEmailOTPSchema),
      defaultValues: {
        emailAddress: ''
      },
      shouldUnregister: true
    }),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    formState = _useForm.formState;
  var onSubmitEmail = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(value) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (onSubmitEmailValue) {
                onSubmitEmailValue(value);
              }
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onSubmitEmail(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var onSubmitOTP = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(value) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (onSubmitOTPValue) {
                onSubmitOTPValue(value);
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function onSubmitOTP(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var errors = formState.errors,
    isSubmitting = formState.isSubmitting;
  return React__default.createElement(react.Box, null, !otpReceived ? React__default.createElement(react.Box, Object.assign({
    as: 'form',
    "data-testid": "box.emailform.form",
    w: 350
  }, partProps == null ? void 0 : partProps.container, {
    onSubmit: handleSubmit(onSubmitEmail)
  }), React__default.createElement(InputField, Object.assign({
    id: "emailAddress"
  }, register('emailAddress'), {
    errorMsg: (_errors$emailAddress = errors.emailAddress) == null ? void 0 : _errors$emailAddress.message,
    disabled: isSubmitting,
    placeholder: 'Enter your email address',
    partProps: {
      input: {
        'aria-label': 'email-input',
        role: 'input'
      }
    }
  })), React__default.createElement(react.Button, Object.assign({
    variant: 'primary',
    type: "submit",
    isLoading: isSubmitting,
    width: '100%',
    marginTop: '10px',
    "data-testid": "button.email.submit"
  }, partProps == null ? void 0 : partProps.button), "Sign In")) : React__default.createElement(react.Box, {
    "data-testid": "otp.component"
  }, React__default.createElement(OTPForm, {
    partProps: partProps,
    title: title,
    subTitle: subTitle,
    onSubmitOTPValue: function onSubmitOTPValue(value) {
      return onSubmitOTP(value);
    },
    numberOfFields: numberOfFields
  })));
};

var postJson$1 = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(u, d) {
    var response, parsed;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(u, {
              body: JSON.stringify(d),
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            });
          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();
          case 5:
            parsed = _context.sent;
            if (response.ok) {
              _context.next = 8;
              break;
            }
            throw new Error(parsed.error.message);
          case 8:
            return _context.abrupt("return", parsed);
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function postJson(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var useSupport = function useSupport() {
  var _useState = React.useState(false),
    hasError = _useState[0],
    setHasError = _useState[1];
  var _useState2 = React.useState(false),
    isLoading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = React.useState(false),
    isSuccess = _useState3[0],
    setSuccess = _useState3[1];
  var postSupport = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, data) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setHasError(false);
              setSuccess(false);
              setLoading(true);
              _context.prev = 3;
              _context.next = 6;
              return postJson$1(url, _extends({}, data));
            case 6:
              response = _context.sent;
              if (response) {
                setSuccess(true);
              }
              _context.next = 13;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              setHasError(true);
            case 13:
              setLoading(false);
            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));
    return function postSupport(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    postSupport: postSupport,
    isLoading: isLoading,
    hasError: hasError,
    isSuccess: isSuccess
  };
};

var withContactFormSchema = /*#__PURE__*/yup$1.object().shape({
  emailAddress: /*#__PURE__*/yup$1.string().email('Please enter a valid email address.').required('Email is required.'),
  message: /*#__PURE__*/yup$1.string().required('Description is required.'),
  details: /*#__PURE__*/yup$1.object().shape({
    name: /*#__PURE__*/yup$1.string().required('Name is required.')
  })
});

var ContactForm = function ContactForm(props) {
  var _errors$details, _errors$details$name, _errors$emailAddress, _errors$message;
  var onSubmit = props.onSubmit,
    url = props.url,
    partProps = props.partProps;
  var _useSupport = useSupport(),
    postSupport = _useSupport.postSupport,
    hasError = _useSupport.hasError,
    isSuccess = _useSupport.isSuccess,
    isLoading = _useSupport.isLoading;
  var _useForm = reactHookForm.useForm({
      resolver: yup.yupResolver(withContactFormSchema),
      defaultValues: {
        emailAddress: '',
        message: '',
        details: {
          name: ''
        }
      },
      shouldUnregister: true
    }),
    register = _useForm.register,
    handleSubmit = _useForm.handleSubmit,
    formState = _useForm.formState,
    reset = _useForm.reset;
  var onSubmitForm = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!url) {
                _context.next = 4;
                break;
              }
              _context.next = 3;
              return postSupport(url, values);
            case 3:
              reset({
                emailAddress: '',
                message: '',
                details: {
                  name: ''
                }
              });
            case 4:
              if (onSubmit) onSubmit(values);
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onSubmitForm(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var isSubmitting = formState.isSubmitting,
    errors = formState.errors;
  return React__default.createElement(react.Box, {
    maxW: 512,
    "data-testid": "box.contactform.container"
  }, React__default.createElement(react.Box, {
    as: "form",
    onSubmitCapture: handleSubmit(onSubmitForm),
    "data-testid": "box.contactform.form"
  }, React__default.createElement(react.Stack, {
    spacing: 4
  }, React__default.createElement(InputField, Object.assign({}, partProps == null ? void 0 : partProps.input, register('details.name'), {
    id: "name",
    label: "Name",
    placeholder: "Input your name",
    errorMsg: (_errors$details = errors.details) == null ? void 0 : (_errors$details$name = _errors$details.name) == null ? void 0 : _errors$details$name.message,
    disabled: isSubmitting
  })), React__default.createElement(InputField, Object.assign({}, partProps == null ? void 0 : partProps.input, register('emailAddress'), {
    id: "emailAddress",
    label: "Email",
    placeholder: "Input your email address",
    errorMsg: (_errors$emailAddress = errors.emailAddress) == null ? void 0 : _errors$emailAddress.message,
    disabled: isSubmitting,
    "data-testid": "input.contactform.email"
  })), React__default.createElement(TextAreaField, Object.assign({}, partProps == null ? void 0 : partProps.textarea, register('message'), {
    id: "message",
    label: "Desciption of concern",
    placeholder: "Enter description",
    errorMsg: (_errors$message = errors.message) == null ? void 0 : _errors$message.message,
    disabled: isSubmitting,
    "data-testid": "textarea.contactform.description"
  })), React__default.createElement(react.Button, Object.assign({
    w: "full",
    variant: "primary",
    isLoading: isSubmitting || isLoading
  }, partProps == null ? void 0 : partProps.button, {
    type: "submit",
    "data-testid": "button.contactform.submit"
  }), "Send"), hasError && React__default.createElement(react.Alert, {
    status: "error"
  }, React__default.createElement(react.AlertIcon, null), React__default.createElement(react.AlertDescription, null, "Ops, Something went wrong.")), isSuccess && React__default.createElement(react.Alert, {
    status: "success"
  }, React__default.createElement(react.AlertIcon, null), React__default.createElement(react.AlertDescription, null, "Message successfully sent!")))));
};

var ContactCard = function ContactCard(props) {
  var children = props.children,
    _props$title = props.title,
    title = _props$title === void 0 ? 'Drop your message' : _props$title,
    partProps = props.partProps,
    url = props.url;
  return React__default.createElement(react.Box, Object.assign({
    w: 512,
    bg: "white",
    borderRadius: "8px",
    padding: "56px",
    boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
  }, props, {
    "data-testid": "box.contactcard.container"
  }), React__default.createElement(react.Center, {
    mb: 8,
    "data-testid": "center.contactcard.titleposition"
  }, React__default.createElement(react.Text, Object.assign({
    size: "text-3xl"
  }, partProps == null ? void 0 : partProps.text, {
    "data-testid": "text.contactcard.title"
  }), title)), children ? children : React__default.createElement(ContactForm, Object.assign({}, partProps == null ? void 0 : partProps.contactForm, {
    url: url
  })));
};

var ContactPage = function ContactPage(props) {
  var partProps = props.partProps,
    _props$title = props.title,
    title = _props$title === void 0 ? 'Contact Us' : _props$title,
    _props$secondaryTitle = props.secondaryTitle,
    secondaryTitle = _props$secondaryTitle === void 0 ? "Tell us what you need and we'll help you out." : _props$secondaryTitle,
    iconNode = props.iconNode,
    url = props.url;
  return React__default.createElement(react.Box, {
    pos: "relative",
    w: "100%",
    "data-testid": "box.contactpage.container"
  }, React__default.createElement(react.Box, Object.assign({
    minW: '600px',
    bg: "#000",
    w: "100%",
    h: "400px"
  }, props, {
    "data-testid": "box.contactpage.banner"
  }), React__default.createElement(react.Center, {
    pt: 20,
    pb: 8,
    "data-testid": "center.contactpage.iconposition"
  }, iconNode ? iconNode :
  // <HovIcon data-testid="icon.contactpage.hovicon" />
  ''), React__default.createElement(react.Center, {
    "data-testid": "center.contactpage.titlepostion"
  }, React__default.createElement(react.Text, Object.assign({
    size: "text-5xl",
    color: "white"
  }, partProps == null ? void 0 : partProps.title, {
    "data-testid": "text.contactpage.title"
  }), title)), React__default.createElement(react.Center, {
    "data-testid": "center.contactpage.secondarytitleposition"
  }, React__default.createElement(react.Text, Object.assign({
    size: "text-base",
    color: "gray.200"
  }, partProps == null ? void 0 : partProps.secondaryTitle, {
    "data-testid": "text.contactpage.secondarytitle"
  }), secondaryTitle))), React__default.createElement(react.Center, {
    minW: '600px',
    "data-testid": "center.contactpage.secondarytitleposition"
  }, React__default.createElement(ContactCard, Object.assign({
    pos: "absolute",
    top: "250px",
    w: "512px",
    url: url
  }, partProps == null ? void 0 : partProps.contactCard))));
};

var InputTypeEnum;
(function (InputTypeEnum) {
  InputTypeEnum["Textarea"] = "textarea";
  InputTypeEnum["Input"] = "input";
})(InputTypeEnum || (InputTypeEnum = {}));
var getInputType = function getInputType(input, type, form) {
  var _errors;
  var key = input.key,
    placeholder = input.placeholder,
    label = input.label,
    partProps = input.partProps;
  var register = form.register,
    formState = form.formState;
  var isSubmitting = formState.isSubmitting,
    errors = formState.errors;
  var error = (_errors = errors["" + key]) == null ? void 0 : _errors.message;
  var input_type = {
    textarea: React__default.createElement(TextAreaField, Object.assign({}, partProps == null ? void 0 : partProps.textarea, register(key), {
      key: key,
      id: key,
      label: label,
      placeholder: placeholder,
      errorMsg: error,
      disabled: isSubmitting,
      width: "100%"
    })),
    input: React__default.createElement(InputField, Object.assign({}, register(key), {
      key: key,
      id: key,
      label: label,
      placeholder: placeholder,
      errorMsg: error,
      disabled: isSubmitting,
      partProps: {
        input: _extends({
          width: '100%'
        }, partProps == null ? void 0 : partProps.input)
      }
    }))
  };
  return input_type[type];
};
var AutoForm = function AutoForm(props) {
  var yupSchema = props.yupSchema,
    partProps = props.partProps,
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
  return React__default.createElement(react.Box, Object.assign({
    width: 512
  }, partProps == null ? void 0 : partProps.boxContainer), React__default.createElement(react.VStack, {
    as: 'form',
    onSubmitCapture: handleSubmit(onSubmitData)
  }, dataKey.map(function (key, idx) {
    var _yupSchema$fields$spe, _yupSchema$fields$spe2, _yupSchema$fields$spe3;
    var input = {
      key: key,
      label: (_yupSchema$fields$spe = yupSchema.fields["" + key].spec.label) != null ? _yupSchema$fields$spe : key.charAt(0).toUpperCase() + key.slice(1),
      placeholder: placeholders == null ? void 0 : placeholders[idx],
      partProps: partProps
    };
    var type = ((_yupSchema$fields$spe2 = yupSchema.fields["" + key].spec) == null ? void 0 : (_yupSchema$fields$spe3 = _yupSchema$fields$spe2.meta) == null ? void 0 : _yupSchema$fields$spe3.type) || 'input';
    return getInputType(input, type, form);
  }), React__default.createElement(react.Button, Object.assign({
    type: "submit",
    variant: 'primary',
    width: '100%'
  }, partProps == null ? void 0 : partProps.button, {
    "data-testid": "button.form.submit"
  }), "Submit")));
};

function For(props) {
  var _Object$assign = Object.assign(defaultProps, props),
    each = _Object$assign.each,
    fallback = _Object$assign.fallback,
    children = _Object$assign.children,
    getKey = _Object$assign.getKey;
  if (!each.length) return fallback;
  return React.createElement(React.Fragment, null, each.map(function (value, index) {
    var Item = function Item() {
      return children(value, index);
    };
    return React.createElement(Item, {
      key: getKey(value, index)
    });
  }));
}
var defaultProps = {
  fallback: null,
  getKey: function getKey(_, index) {
    return index;
  }
};

function Mount(props) {
  var _Object$assign = Object.assign({
      fallback: null
    }, props),
    when = _Object$assign.when,
    fallback = _Object$assign.fallback,
    children = _Object$assign.children;
  return !when ? fallback : React.createElement(React.Fragment, null, children);
}

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
Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function () {
    return react.Button;
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
Object.defineProperty(exports, 'CloseButton', {
  enumerable: true,
  get: function () {
    return react.CloseButton;
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
Object.defineProperty(exports, 'Pin', {
  enumerable: true,
  get: function () {
    return react.PinInputField;
  }
});
Object.defineProperty(exports, 'PinInput', {
  enumerable: true,
  get: function () {
    return react.PinInput;
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
Object.defineProperty(exports, 'chakra', {
  enumerable: true,
  get: function () {
    return react.chakra;
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
exports.ArrayField = ArrayField;
exports.AuthContext = AuthContext;
exports.AuthProvider = AuthProvider;
exports.AutoForm = AutoForm;
exports.ContactCard = ContactCard;
exports.ContactForm = ContactForm;
exports.ContactPage = ContactPage;
exports.CredentialLoginForm = CredentialLoginForm;
exports.For = For;
exports.FormContainer = FormContainer;
exports.InputField = InputField;
exports.Mount = Mount;
exports.OTPForm = OTPForm;
exports.OTPVerificationForm = OTPVerificationForm;
exports.Pagination = Pagination;
exports.PasswordInputField = PasswordInputField;
exports.PinInputField = PinInputField;
exports.RadioImage = RadioImage;
exports.RadioImageGroup = RadioImageGroup;
exports.SelectField = SelectField;
exports.TextAreaField = TextAreaField;
exports.TextareaAutosize = TextareaAutosize;
exports.ThemeProvider = ThemeProvider;
exports.constants = constants;
exports.extendTheme = extendTheme;
exports.getAuthState = getAuthState;
exports.logout = logout;
exports.theme = theme;
exports.useAuthService = useAuthService;
exports.useAuthState = useAuthState;
exports.useProfile = useProfile;
exports.useSupport = useSupport;
exports.withContactFormSchema = withContactFormSchema;
//# sourceMappingURL=hds.cjs.development.js.map
