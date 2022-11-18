'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var cookies = _interopDefault(require('js-cookie'));
var icons = require('@chakra-ui/icons');
var react = require('@chakra-ui/react');
var hdsForms = require('@highoutput/hds-forms');
var yup = require('@hookform/resolvers/yup');
var reactHookForm = require('react-hook-form');
var yup$1 = require('yup');

var AuthContext = /*#__PURE__*/React.createContext({
  hostname: ''
});

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
  var signUpTitle = props.signUpTitle,
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
  return React__default.createElement(react.Box, {
    as: 'form',
    maxW: 512,
    onSubmit: handleSubmit(onSubmitForm)
  }, React__default.createElement(react.Center, {
    m: 0,
    p: 0
  }, isSignUp && signUpTitle ? signUpTitle : !isSignUp && loginTitle ? loginTitle : !isSignUp && !loginTitle ? React__default.createElement(react.Text, {
    size: "header-3",
    my: 8
  }, "Login") : isSignUp && !signUpTitle && React__default.createElement(react.Text, {
    size: "header-3",
    my: 8
  }, "Sign up")), React__default.createElement(react.Stack, {
    spacing: '1rem'
  }, variant === 'name-password' ? React__default.createElement(hdsForms.InputField, Object.assign({}, register('name'), {
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
  })) : React__default.createElement(hdsForms.InputField, Object.assign({}, register('email'), {
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
  })), React__default.createElement(hdsForms.InputField, Object.assign({}, register('password'), {
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
  }))), React__default.createElement(react.Button, {
    w: "full",
    variant: "primary",
    isLoading: formState.isSubmitting,
    type: "submit",
    my: 8
  }, isSignUp ? 'Sign Up' : 'Login'), React__default.createElement(react.Center, null, React__default.createElement(react.Text, null, isSignUp ? 'Already have an account?' : 'No account yet?', ' ', React__default.createElement(react.Text, {
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
    onSubmitOTPValue = props.onSubmitOTPValue;
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
  return React__default.createElement(react.Box, {
    as: "form",
    w: 350,
    "data-testid": "box.otpform.form",
    onSubmit: handleSubmitOtp(onSubmitOTP)
  }, React__default.createElement(react.Box, {
    mb: "6"
  }, title ? title : React__default.createElement(react.Heading, {
    as: "h1",
    mb: 2
  }, "Check your inbox"), subTitle ? subTitle : React__default.createElement(react.Text, null, "We have sent a 6-digit code to your email ")), React__default.createElement(hdsForms.PinInputField, Object.assign({
    id: "otp"
  }, registerOtp('otp'), {
    errorMsg: (_formStateOtp$errors$ = formStateOtp.errors.otp) == null ? void 0 : _formStateOtp$errors$.message,
    disabled: formStateOtp.isSubmitting,
    numberOfFields: numberOfFields,
    autoFocus: true,
    onComplete: (_buttonRef$current = buttonRef.current) == null ? void 0 : _buttonRef$current.click,
    type: otpType
  })), React__default.createElement(react.Button, {
    variant: 'primary',
    ref: buttonRef,
    type: "submit",
    isLoading: formStateOtp.isSubmitting,
    width: '100%',
    "data-testid": "button.otp.submit",
    marginTop: 5
  }, buttonText ? buttonText : 'Sign In'));
};

var OTPVerificationForm = function OTPVerificationForm(props) {
  var _errors$emailAddress;
  var otpReceived = props.otpReceived,
    onSubmitEmailValue = props.onSubmitEmailValue,
    numberOfFields = props.numberOfFields,
    title = props.title,
    subTitle = props.subTitle,
    onSubmitOTPValue = props.onSubmitOTPValue;
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
  return React__default.createElement(react.Box, null, !otpReceived ? React__default.createElement(react.Box, {
    as: 'form',
    "data-testid": "box.emailform.form",
    w: 350,
    onSubmit: handleSubmit(onSubmitEmail)
  }, React__default.createElement(hdsForms.InputField, Object.assign({
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
  })), React__default.createElement(react.Button, {
    variant: 'primary',
    type: "submit",
    isLoading: isSubmitting,
    width: '100%',
    marginTop: '10px',
    "data-testid": "button.email.submit"
  }, "Sign In")) : React__default.createElement(react.Box, {
    "data-testid": "otp.component"
  }, React__default.createElement(OTPForm, {
    title: title,
    subTitle: subTitle,
    onSubmitOTPValue: function onSubmitOTPValue(value) {
      return onSubmitOTP(value);
    },
    numberOfFields: numberOfFields
  })));
};

exports.AuthContext = AuthContext;
exports.AuthProvider = AuthProvider;
exports.CredentialLoginForm = CredentialLoginForm;
exports.OTPForm = OTPForm;
exports.OTPVerificationForm = OTPVerificationForm;
exports.constants = constants;
exports.getAuthState = getAuthState;
exports.logout = logout;
exports.useAuthService = useAuthService;
exports.useAuthState = useAuthState;
exports.useProfile = useProfile;
//# sourceMappingURL=hds-auth.cjs.development.js.map
