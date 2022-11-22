'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('@chakra-ui/react');
var hdsIcons = require('@highoutput/hds-icons');
var React = require('react');
var React__default = _interopDefault(React);

var Pagination = function Pagination(_ref) {
  var page = _ref.page,
    size = _ref.size,
    total = _ref.total,
    onPageChange = _ref.onPageChange,
    onSizeChange = _ref.onSizeChange,
    options = _ref.options,
    variant = _ref.variant;
  var styles = react.useMultiStyleConfig('Pagination', {
    size: size,
    variant: variant
  });
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
  return React__default.createElement(react.Flex, {
    alignItems: "center",
    justifyContent: "space-between",
    sx: styles.container
  }, React__default.createElement(react.HStack, {
    spacing: 2
  }, React__default.createElement(react.Text, {
    as: "span",
    whiteSpace: "nowrap",
    sx: styles.dropdownLabel
  }, "Show rows per page"), React__default.createElement(react.Select, {
    "aria-label": "Change page size",
    onChange: handleSizeChange,
    value: size,
    sx: styles.dropdown
  }, options.sizes.map(function (size, index) {
    return React__default.createElement("option", {
      key: "" + size + index,
      value: size
    }, size);
  }))), React__default.createElement(react.HStack, {
    spacing: 4
  }, React__default.createElement(react.Text, {
    as: "span",
    sx: styles.caption
  }, getPageInfo()), React__default.createElement(react.HStack, null, React__default.createElement(react.IconButton, {
    "aria-label": "Go to previous page",
    icon: React__default.createElement(hdsIcons.ChevronLeftIcon, {
      color: "white",
      sx: styles.controlIcons
    }),
    onClick: handlePageChange('decrement'),
    paddingTop: "10px",
    paddingLeft: "12px",
    disabled: !hasPrev,
    sx: styles.iconButton
  }), React__default.createElement(react.IconButton, {
    "aria-label": "Go to next page",
    icon: React__default.createElement(hdsIcons.ChevronRightIcon, {
      color: "white",
      sx: styles.controlIcons
    }),
    onClick: handlePageChange('increment'),
    disabled: !hasNext,
    paddingTop: "10px",
    paddingLeft: "12px",
    sx: styles.iconButton
  }))));
};

exports.Pagination = Pagination;
//# sourceMappingURL=hds-pagination.cjs.development.js.map
