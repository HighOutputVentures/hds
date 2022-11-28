'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function arrayChunk(array, size) {
  var chunks = [];
  var copy = [].concat(array);
  var len = copy.length;
  var max = Math.ceil(len / size);
  var idx = 0;
  for (; idx < max; idx++) {
    chunks.push(copy.splice(0, size));
  }
  return chunks;
}

function arrayRandom(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

/**
 *
 * @example
 * arrayUnique([1, 2, 3, 4, 5, 1, 2, 3, 4]) // [1, 2, 3, 4, 5]
 * arrayUnique([
 *  {key: 1},
 *  {key: 2},
 *  {key: 3},
 *  {key: 1},
 *  {key: 2},
 * ], (item) => item.key) // [{key: 1}, {key: 2}, {key: 3}]
 *
 */
function arrayUnique(array, callback) {
  if (callback === void 0) {
    callback = function callback(item) {
      return item;
    };
  }
  var copy = [].concat(array);
  var mapped = copy.map(callback);
  return copy.filter(function (item, index) {
    return mapped.indexOf(callback(item)) === index;
  });
}

function capitalize(subject, config) {
  if (config === void 0) {
    config = {};
  }
  if (!config.delimiter) config.delimiter = ". ";
  if (config.trim) subject = subject.trim().replace(/\s{2,}/g, " ");
  if (config.lower) subject = subject.toLowerCase();
  if (subject.length <= 0) return subject;
  return subject.split(config.delimiter).map(function (value) {
    var _value$at;
    return (_value$at = value.at(0)) == null ? void 0 : _value$at.toUpperCase().concat(value.substring(1));
  }).join(config.delimiter);
}

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

/**
 *
 * deeply merge objects
 *
 */
function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    var targetValue = target[key];
    var sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = [].concat(targetValue, sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = merge(targetValue, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}
function isObject(subject) {
  return Object.prototype.toString.call(subject) === "[object Object]";
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

function pick(subject) {
  var copy = _extends({}, subject);
  var picked = {};
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }
  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var key = _keys[_i];
    if (key in copy) {
      picked[key] = copy[key];
    }
  }
  return picked;
}

function Show(props) {
  var _Object$assign = Object.assign({
      fallback: null
    }, props),
    when = _Object$assign.when,
    fallback = _Object$assign.fallback,
    children = _Object$assign.children;
  return !when ? fallback : React.createElement(React.Fragment, null, children);
}

exports.For = For;
exports.Show = Show;
exports.arrayChunk = arrayChunk;
exports.arrayRandom = arrayRandom;
exports.arrayUnique = arrayUnique;
exports.capitalize = capitalize;
exports.merge = merge;
exports.omit = omit;
exports.pick = pick;
//# sourceMappingURL=hds-utilities.cjs.development.js.map
