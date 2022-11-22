import { useMultiStyleConfig, Flex, HStack, Text, Select, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@highoutput/hds-icons';
import React, { useCallback } from 'react';

var Pagination = function Pagination(_ref) {
  var page = _ref.page,
    size = _ref.size,
    total = _ref.total,
    onPageChange = _ref.onPageChange,
    onSizeChange = _ref.onSizeChange,
    options = _ref.options,
    variant = _ref.variant;
  var styles = useMultiStyleConfig('Pagination', {
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
  var getPageInfo = useCallback(function () {
    var pageInfo = '';
    pageInfo += 'Page ';
    pageInfo += indexStart;
    pageInfo += '-';
    pageInfo += indexStop > total ? indexStart - 1 + remainder : indexStop;
    pageInfo += ' of ';
    pageInfo += total;
    return pageInfo;
  }, [indexStart, indexStop, total, remainder]);
  return React.createElement(Flex, {
    alignItems: "center",
    justifyContent: "space-between",
    sx: styles.container
  }, React.createElement(HStack, {
    spacing: 2
  }, React.createElement(Text, {
    as: "span",
    whiteSpace: "nowrap",
    sx: styles.dropdownLabel
  }, "Show rows per page"), React.createElement(Select, {
    "aria-label": "Change page size",
    onChange: handleSizeChange,
    value: size,
    sx: styles.dropdown
  }, options.sizes.map(function (size, index) {
    return React.createElement("option", {
      key: "" + size + index,
      value: size
    }, size);
  }))), React.createElement(HStack, {
    spacing: 4
  }, React.createElement(Text, {
    as: "span",
    sx: styles.caption
  }, getPageInfo()), React.createElement(HStack, null, React.createElement(IconButton, {
    "aria-label": "Go to previous page",
    icon: React.createElement(ChevronLeftIcon, {
      color: "white",
      sx: styles.controlIcons
    }),
    onClick: handlePageChange('decrement'),
    paddingTop: "10px",
    paddingLeft: "12px",
    disabled: !hasPrev,
    sx: styles.iconButton
  }), React.createElement(IconButton, {
    "aria-label": "Go to next page",
    icon: React.createElement(ChevronRightIcon, {
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

export { Pagination };
//# sourceMappingURL=hds-pagination.esm.js.map
