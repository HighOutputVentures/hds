'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

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
//# sourceMappingURL=hds-utilities.cjs.development.js.map
