import React__default, { createContext, createElement, useContext, useCallback, useState, useEffect, useId, forwardRef, useMemo, Fragment } from 'react';
import cookies from 'js-cookie';
import { useMultiStyleConfig, FormControl, FormLabel, FormErrorMessage, FormHelperText, InputGroup, InputLeftElement, Input, InputRightElement, Button as Button$1, useStyleConfig, HStack, PinInput, PinInputField as PinInputField$1, Select as Select$1, Textarea, extendTheme as extendTheme$1, ChakraProvider, Box as Box$1, Center, Text as Text$1, Stack as Stack$1, Heading as Heading$1 } from '@chakra-ui/react';
export { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, AlertDescription, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertIcon, AlertTitle, AspectRatio, Avatar, AvatarBadge, AvatarGroup, Badge, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Button, ButtonGroup, ButtonSpinner, Center, Checkbox, CheckboxGroup, Circle, CircularProgress, CircularProgressLabel, CloseButton, Collapse, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Fade, Flex, FormControl, FormErrorIcon, FormErrorMessage, FormHelperText, FormLabel, GlobalStyle, Grid, GridItem, HStack, Heading, Hide, Icon, IconButton, Image, Img, Input, InputAddon, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, LightMode, Link, LinkBox, LinkOverlay, List, ListItem, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalContextProvider, ModalFocusScope, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, OrderedList, PinInputField as Pin, PinInput, Popover, PopoverAnchor, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, Progress, ProgressLabel, Radio, RadioGroup, ScaleFade, Select, Show, SimpleGrid, Skeleton, SkeletonCircle, SkeletonText, Slide, SlideFade, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Spacer, Spinner, Square, Stack, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, Switch, Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tag, TagCloseButton, TagLabel, TagLeftIcon, TagRightIcon, Tbody, Td, Text, Textarea, Tfoot, Th, Thead, Tooltip, Tr, UnorderedList, VStack, Wrap, WrapItem, chakra, createStandaloneToast, forwardRef, keyframes, shouldShowFallbackImage, useBoolean, useBreakpoint, useBreakpointValue, useButtonGroup, useCheckbox, useCheckboxGroup, useClipboard, useColorModeValue, useConst, useDisclosure, useImage, useInputGroupStyles, useMediaQuery, useMenuButton, useModal, useMultiStyleConfig, useOutsideClick, usePrefersReducedMotion, useRadio, useRadioGroup, useSlider, useTheme, useToast } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import ReactTextareaAutosize from 'react-textarea-autosize';
import omit from 'lodash-es/omit';
import merge from 'lodash-es/merge';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
export { isValidMotionProp, motion } from 'framer-motion';

var AuthContext = /*#__PURE__*/createContext({
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
  return createElement(AuthContext.Provider, {
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
  var _React$useContext = useContext(AuthContext),
    hostname = _React$useContext.hostname;
  var generateOtp = useCallback( /*#__PURE__*/function () {
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
  var validateOtp = useCallback( /*#__PURE__*/function () {
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
                secure: process.env.NODE_ENV === 'production',
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
  var _React$useState = useState({
      status: 'loading'
    }),
    state = _React$useState[0],
    setState = _React$useState[1];
  var handleState = useCallback(function () {
    var newState = getAuthState();
    setState(newState);
  }, []);
  useEffect(function () {
    handleState();
    return function () {
      return setState({
        status: 'loading'
      });
    };
  }, [handleState]);
  useEffect(function () {
    document.addEventListener('visibilitychange', handleState);
    return function () {
      return document.removeEventListener('visibilitychange', handleState);
    };
  }, [handleState]);
  useEffect(function () {
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
  var styles = useMultiStyleConfig('Form', {
    variant: variant
  });
  var uid = useId();
  return React__default.createElement(FormControl, Object.assign({
    id: id,
    isInvalid: Boolean(errorMsg),
    isReadOnly: disabled,
    "data-testid": uid + "-form-container-form-control",
    sx: styles.formControl
  }, partProps == null ? void 0 : partProps.formControl), label && React__default.createElement(FormLabel, Object.assign({
    borderRadius: "4px"
  }, labelColor && {
    color: labelColor
  }, {
    "data-testid": uid + "-form-container-label",
    sx: styles.formLabel
  }, partProps == null ? void 0 : partProps.formLabel), label), children, React__default.createElement(FormErrorMessage, Object.assign({
    sx: styles.formErrorMessage
  }, partProps == null ? void 0 : partProps.formErrorMessage, {
    "data-testid": uid + "-form-container-error"
  }), errorMsg), helperMsg && React__default.createElement(FormHelperText, Object.assign({
    sx: styles.formHelperText
  }, partProps == null ? void 0 : partProps.formErrorMessage, {
    "data-testid": uid + "-form-container-helper"
  }), helperMsg));
};

var InputField = /*#__PURE__*/forwardRef(function (props, ref) {
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
  var styles = useMultiStyleConfig('Form', {
    variant: variant,
    size: size
  });
  var uid = useId();
  return React__default.createElement(FormContainer, Object.assign({}, props), React__default.createElement(InputGroup, Object.assign({
    sx: styles.formInputGroup
  }, partProps == null ? void 0 : partProps.inputGroup, {
    size: size,
    "data-testid": uid + "-input-field-group"
  }), leftIcon && React__default.createElement(InputLeftElement, Object.assign({}, partProps == null ? void 0 : partProps.inputLeftElement, {
    "data-testid": uid + "-input-field-left-element"
  }), leftIcon), React__default.createElement(Input, Object.assign({
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
  })), rightIcon && React__default.createElement(InputRightElement, Object.assign({}, partProps == null ? void 0 : partProps.inputRightElement, {
    "data-testid": uid + "-input-field-right-element"
  }), rightIcon)));
});

var PasswordInputField = /*#__PURE__*/forwardRef(function (props, _) {
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
    rightIcon: React__default.createElement(Button$1, Object.assign({
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
    }), showPassword ? React__default.createElement(ViewIcon, null) : React__default.createElement(ViewOffIcon, null))
  });
});
PasswordInputField.displayName = 'PasswordInputField';

var PinInputField = /*#__PURE__*/forwardRef(function (props, _) {
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
  var styles = useStyleConfig('PinInputField', {
    size: size,
    variant: variant
  });
  var fieldsArray = useMemo(function () {
    return Array.from({
      length: numberOfFields
    });
  }, [numberOfFields]);
  var uid = useId();
  return React__default.createElement(FormContainer, Object.assign({}, props), React__default.createElement(HStack, {
    spacing: 3
  }, React__default.createElement(PinInput, Object.assign({
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
    return React__default.createElement(PinInputField$1, Object.assign({
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

var SelectField = /*#__PURE__*/forwardRef(function (props, ref) {
  var options = props.options,
    onChange = props.onChange,
    onBlur = props.onBlur,
    name = props.name,
    placeholder = props.placeholder,
    defaultValue = props.defaultValue,
    disabled = props.disabled,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'primary' : _props$variant;
  var styles = useMultiStyleConfig('Form', {
    variant: variant
  });
  var uid = useId();
  return React__default.createElement(FormContainer, Object.assign({}, props), React__default.createElement(Select$1, Object.assign({}, props, {
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

var _excluded$1 = ["minRows", "maxRows"];
var TextareaAutosize = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var minRows = _ref.minRows,
    maxRows = _ref.maxRows,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var uid = useId();
  return createElement(Textarea, Object.assign({
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

var TextAreaField = /*#__PURE__*/forwardRef(function (props, ref) {
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
  var styles = useMultiStyleConfig('Form', {
    variant: variant,
    size: size
  });
  var uid = useId();
  return React__default.createElement(FormContainer, Object.assign({}, props), React__default.createElement(InputGroup, null, leftIcon && React__default.createElement(InputLeftElement, {
    pointerEvents: "none"
  }, leftIcon), React__default.createElement(Textarea, Object.assign({
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
  })), rightIcon && React__default.createElement(InputRightElement, null, rightIcon)));
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

var RadioImage = {
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
  RadioImage: RadioImage
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

var theme = /*#__PURE__*/extendTheme$1({
  config: config,
  styles: styles,
  colors: colors,
  fonts: fonts,
  fontSizes: fontSizes,
  components: components,
  zIndices: zIndices
});

var extendTheme = function extendTheme(customTheme) {
  return extendTheme$1(merge(theme, customTheme));
};

var _excluded$2 = ["children"];
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  return React__default.createElement(ChakraProvider, Object.assign({}, props, {
    theme: extendTheme(props.theme)
  }), children);
};

var withCredentialFormSchemaEmail = /*#__PURE__*/object().shape({
  email: /*#__PURE__*/string().email('Please enter a valid email address').required('Email is required.'),
  password: /*#__PURE__*/string().required('Password is required')
});
var withCredentialFormSchemaName = /*#__PURE__*/object().shape({
  name: /*#__PURE__*/string().required('Name is required').trim(),
  password: /*#__PURE__*/string().required('Password is required')
});
var generateEmailOTPSchema = /*#__PURE__*/object().shape({
  emailAddress: /*#__PURE__*/string().email('Please enter a valid email address.').required('Email is required.')
});
var authenticateSchema = /*#__PURE__*/object().shape({
  otp: /*#__PURE__*/string().when('$numberOfFields', function (numberOfFields, authenticateSchema) {
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
  var _useForm = useForm({
      resolver: yupResolver(variant === 'name-password' ? withCredentialFormSchemaName : withCredentialFormSchemaEmail),
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
  return React__default.createElement(Box$1, Object.assign({
    as: 'form',
    maxW: 512
  }, partProps == null ? void 0 : partProps.containerProps, {
    onSubmit: handleSubmit(onSubmitForm)
  }), React__default.createElement(Center, {
    m: 0,
    p: 0
  }, isSignUp && signUpTitle ? signUpTitle : !isSignUp && loginTitle ? loginTitle : !isSignUp && !loginTitle ? React__default.createElement(Text$1, Object.assign({
    size: "text-3xl",
    my: 8
  }, partProps == null ? void 0 : partProps.title), "Login") : isSignUp && !signUpTitle && React__default.createElement(Text$1, Object.assign({
    size: "text-3xl",
    my: 8
  }, partProps == null ? void 0 : partProps.title), "Sign up")), React__default.createElement(Stack$1, {
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
    rightIcon: React__default.createElement(Button$1, {
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
    }, showPassword ? React__default.createElement(ViewIcon, null) : React__default.createElement(ViewOffIcon, null)),
    partProps: {
      input: {
        'aria-label': 'password-input',
        role: 'input'
      }
    }
  }, partProps == null ? void 0 : partProps.input))), React__default.createElement(Button$1, Object.assign({
    w: "full",
    variant: "primary",
    isLoading: formState.isSubmitting,
    type: "submit",
    my: 8
  }, partProps == null ? void 0 : partProps.button), isSignUp ? 'Sign Up' : 'Login'), React__default.createElement(Center, null, React__default.createElement(Text$1, null, isSignUp ? 'Already have an account?' : 'No account yet?', ' ', React__default.createElement(Text$1, {
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
  var _useForm = useForm({
      resolver: yupResolver(authenticateSchema),
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
  return React__default.createElement(Box$1, Object.assign({
    as: "form",
    w: 350,
    "data-testid": "box.otpform.form",
    onSubmit: handleSubmitOtp(onSubmitOTP)
  }, partProps == null ? void 0 : partProps.container), React__default.createElement(Box$1, {
    mb: "6"
  }, title ? title : React__default.createElement(Heading$1, Object.assign({
    as: "h1",
    mb: 2
  }, partProps == null ? void 0 : partProps.title), "Check your inbox"), subTitle ? subTitle : React__default.createElement(Text$1, Object.assign({}, partProps == null ? void 0 : partProps.subTitle), "We have sent a 6-digit code to your email", ' ')), React__default.createElement(PinInputField, Object.assign({
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
  })), React__default.createElement(Button$1, Object.assign({
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
  var _useForm = useForm({
      resolver: yupResolver(generateEmailOTPSchema),
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
  return React__default.createElement(Box$1, null, !otpReceived ? React__default.createElement(Box$1, Object.assign({
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
  })), React__default.createElement(Button$1, Object.assign({
    variant: 'primary',
    type: "submit",
    isLoading: isSubmitting,
    width: '100%',
    marginTop: '10px',
    "data-testid": "button.email.submit"
  }, partProps == null ? void 0 : partProps.button), "Sign In")) : React__default.createElement(Box$1, {
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

function For(props) {
  var _Object$assign = Object.assign(defaultProps, props),
    each = _Object$assign.each,
    fallback = _Object$assign.fallback,
    children = _Object$assign.children,
    getKey = _Object$assign.getKey;
  if (!each.length) return fallback;
  return createElement(Fragment, null, each.map(function (value, index) {
    var Item = function Item() {
      return children(value, index);
    };
    return createElement(Item, {
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
  return !when ? fallback : createElement(Fragment, null, children);
}

export { AuthContext, AuthProvider, CredentialLoginForm, For, FormContainer, InputField, Mount, OTPForm, OTPVerificationForm, PasswordInputField, PinInputField, SelectField, TextAreaField, TextareaAutosize, ThemeProvider, constants, extendTheme, getAuthState, logout, theme, useAuthService, useAuthState, useProfile };
//# sourceMappingURL=hds.esm.js.map
