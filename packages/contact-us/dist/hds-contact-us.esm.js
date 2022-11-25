import { Box, Stack, Button, Alert, AlertIcon, AlertDescription, Center, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { InputField, TextAreaField } from '@highoutput/hds-forms';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { HovIcon } from '@highoutput/hds-icons';

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
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
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
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
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
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
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
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
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
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

var postJson = /*#__PURE__*/function () {
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
  var _useState = useState(false),
    hasError = _useState[0],
    setHasError = _useState[1];
  var _useState2 = useState(false),
    isLoading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = useState(false),
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
              return postJson(url, _extends({}, data));
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

var withContactFormSchema = /*#__PURE__*/object().shape({
  emailAddress: /*#__PURE__*/string().email('Please enter a valid email address.').required('Email is required.'),
  message: /*#__PURE__*/string().required('Description is required.'),
  details: /*#__PURE__*/object().shape({
    name: /*#__PURE__*/string().required('Name is required.')
  })
});

var ContactForm = function ContactForm(props) {
  var _errors$details, _errors$details$name, _errors$emailAddress, _errors$message;
  var onSubmit = props.onSubmit,
    url = props.url;
  var _useSupport = useSupport(),
    postSupport = _useSupport.postSupport,
    hasError = _useSupport.hasError,
    isSuccess = _useSupport.isSuccess,
    isLoading = _useSupport.isLoading;
  var _useForm = useForm({
      resolver: yupResolver(withContactFormSchema),
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
  return /*#__PURE__*/React.createElement(Box, {
    maxW: 512,
    "data-testid": "box.contactform.container"
  }, /*#__PURE__*/React.createElement(Box, {
    as: "form",
    onSubmitCapture: handleSubmit(onSubmitForm),
    "data-testid": "box.contactform.form"
  }, /*#__PURE__*/React.createElement(Stack, {
    spacing: 4
  }, /*#__PURE__*/React.createElement(InputField, Object.assign({}, register('details.name'), {
    id: "name",
    label: "Name",
    placeholder: "Input your name",
    errorMsg: (_errors$details = errors.details) == null ? void 0 : (_errors$details$name = _errors$details.name) == null ? void 0 : _errors$details$name.message,
    disabled: isSubmitting
  })), /*#__PURE__*/React.createElement(InputField, Object.assign({}, register('emailAddress'), {
    id: "emailAddress",
    label: "Email",
    placeholder: "Input your email address",
    errorMsg: (_errors$emailAddress = errors.emailAddress) == null ? void 0 : _errors$emailAddress.message,
    disabled: isSubmitting,
    "data-testid": "input.contactform.email"
  })), /*#__PURE__*/React.createElement(TextAreaField, Object.assign({}, register('message'), {
    id: "message",
    label: "Desciption of concern",
    placeholder: "Enter description",
    errorMsg: (_errors$message = errors.message) == null ? void 0 : _errors$message.message,
    disabled: isSubmitting,
    "data-testid": "textarea.contactform.description"
  })), /*#__PURE__*/React.createElement(Button, {
    w: "full",
    variant: "primary",
    isLoading: isSubmitting || isLoading,
    type: "submit",
    "data-testid": "button.contactform.submit"
  }, "Send"), hasError && /*#__PURE__*/React.createElement(Alert, {
    status: "error"
  }, /*#__PURE__*/React.createElement(AlertIcon, null), /*#__PURE__*/React.createElement(AlertDescription, null, "Ops, Something went wrong.")), isSuccess && /*#__PURE__*/React.createElement(Alert, {
    status: "success"
  }, /*#__PURE__*/React.createElement(AlertIcon, null), /*#__PURE__*/React.createElement(AlertDescription, null, "Message successfully sent!")))));
};

var ContactCard = function ContactCard(props) {
  var children = props.children,
    _props$title = props.title,
    title = _props$title === void 0 ? 'Drop your message' : _props$title,
    url = props.url;
  return /*#__PURE__*/React.createElement(Box, Object.assign({
    w: 512,
    bg: "white",
    borderRadius: "8px",
    padding: "56px",
    boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)"
  }, props, {
    "data-testid": "box.contactcard.container"
  }), /*#__PURE__*/React.createElement(Center, {
    mb: 8,
    "data-testid": "center.contactcard.titleposition"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "header-4",
    "data-testid": "text.contactcard.title"
  }, title)), children ? children : /*#__PURE__*/React.createElement(ContactForm
  // {...partProps?.contactForm}
  , {
    // {...partProps?.contactForm}
    url: url
  }));
};

var ContactPage = function ContactPage(props) {
  var _props$title = props.title,
    title = _props$title === void 0 ? 'Contact Us' : _props$title,
    _props$secondaryTitle = props.secondaryTitle,
    secondaryTitle = _props$secondaryTitle === void 0 ? "Tell us what you need and we'll help you out." : _props$secondaryTitle,
    iconNode = props.iconNode,
    url = props.url;
  return /*#__PURE__*/React.createElement(Box, {
    pos: "relative",
    w: "100%",
    "data-testid": "box.contactpage.container"
  }, /*#__PURE__*/React.createElement(Box, {
    minW: '600px',
    bg: "#000",
    w: "100%",
    h: "400px",
    "data-testid": "box.contactpage.banner"
  }, /*#__PURE__*/React.createElement(Center, {
    pt: 20,
    pb: 8,
    "data-testid": "center.contactpage.iconposition"
  }, iconNode ? iconNode : /*#__PURE__*/React.createElement(HovIcon, {
    color: "white",
    "data-testid": "icon.contactpage.hovicon"
  })), /*#__PURE__*/React.createElement(Center, {
    "data-testid": "center.contactpage.titlepostion"
  }, /*#__PURE__*/React.createElement(Text, {
    size: "header-3",
    color: "white",
    "data-testid": "text.contactpage.title"
  }, title)), /*#__PURE__*/React.createElement(Center, {
    "data-testid": "center.contactpage.secondarytitleposition"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "gray.200",
    "data-testid": "text.contactpage.secondarytitle"
  }, secondaryTitle))), /*#__PURE__*/React.createElement(Center, {
    minW: '600px',
    "data-testid": "center.contactpage.secondarytitleposition"
  }, /*#__PURE__*/React.createElement(ContactCard, {
    pos: "absolute",
    top: "250px",
    w: "512px",
    url: url
  })));
};

export { ContactCard, ContactForm, ContactPage, useSupport, withContactFormSchema };
//# sourceMappingURL=hds-contact-us.esm.js.map
