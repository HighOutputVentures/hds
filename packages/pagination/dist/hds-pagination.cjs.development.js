'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('@chakra-ui/react');
var React = require('react');
var React__default = _interopDefault(React);
var hdsIcons = require('@highoutput/hds-icons');

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
    icon: React__default.createElement(hdsIcons.ChevronLeftIcon, Object.assign({
      color: "white",
      sx: styles.controlIcons
    }, partProps == null ? void 0 : partProps.controlIcons)),
    onClick: handlePageChange('decrement'),
    paddingTop: "10px",
    paddingLeft: "12px",
    disabled: !hasPrev,
    sx: styles.iconButton
  }, partProps == null ? void 0 : partProps.controls)), React__default.createElement(react.IconButton, Object.assign({
    "aria-label": "",
    "data-testid": id + "-pagination.controls.next",
    icon: React__default.createElement(hdsIcons.ChevronRightIcon, Object.assign({
      color: "white",
      sx: styles.controlIcons
    }, partProps == null ? void 0 : partProps.controlIcons)),
    onClick: handlePageChange('increment'),
    disabled: !hasNext,
    paddingTop: "10px",
    paddingLeft: "12px",
    sx: styles.iconButton
  }, partProps == null ? void 0 : partProps.controls)))));
};

exports.Pagination = Pagination;
//# sourceMappingURL=hds-pagination.cjs.development.js.map
