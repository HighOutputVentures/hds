import { Flex, HStack, Text, Icon, Button } from '@chakra-ui/react';
import { createElement } from 'react';

function ArrowDown(props) {
  return createElement("svg", Object.assign({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), createElement("path", {
    d: "M10 4.16669V15.8334M10 15.8334L15.8333 10M10 15.8334L4.16667 10",
    stroke: "#DC180C",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
}

function ArrowUp(props) {
  return createElement("svg", Object.assign({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), createElement("path", {
    d: "M10 15.8334V4.16669M10 4.16669L4.16666 10M10 4.16669L15.8333 10",
    stroke: "#00C408",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }));
}

var Metrics = function Metrics(_ref) {
  var percentage = _ref.percentage,
    metricChange = _ref.metricChange,
    metricLabel = _ref.metricLabel,
    icon = _ref.icon,
    metricValue = _ref.metricValue,
    lastViewedText = _ref.lastViewedText,
    viewDetailsText = _ref.viewDetailsText,
    viewDetailsCalllback = _ref.viewDetailsCalllback;
  return createElement(Flex, {
    flexDir: "column",
    minHeight: 114,
    width: "344px",
    bg: "white",
    border: "1px solid #FCFCFC",
    padding: "20px 16px",
    boxShadow: "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
    "border-radius": "8px"
  }, createElement(HStack, {
    mr: 8
  }, icon, createElement(Text, {
    size: "label-sm-default"
  }, metricLabel)), createElement(Text, {
    mt: 2,
    size: "header-4"
  }, metricValue), createElement(HStack, {
    height: "18px",
    mt: 2,
    borderRadius: "16px",
    padding: "2px 10px 2px 0px"
  }, metricChange === 'positive' ? createElement(Icon, {
    as: ArrowUp
  }) : createElement(Icon, {
    as: ArrowDown
  }), createElement(Text, {
    color: metricChange === 'positive' ? 'interface.success.900' : 'interface.error.900',
    size: "label-xs-default"
  }, percentage, "%"), createElement(Text, {
    color: "neutrals.500"
  }, lastViewedText)), createElement(Button, {
    mt: 5,
    fontWeight: "semibold",
    _hover: {
      textDecoration: 'none',
      color: 'brand.primary.700'
    },
    alignSelf: "end",
    onClick: function onClick() {
      if (viewDetailsCalllback) viewDetailsCalllback();
    },
    variant: "link",
    color: "brand.primary.900"
  }, viewDetailsText));
};

export { Metrics };
//# sourceMappingURL=hds-metrics.esm.js.map
